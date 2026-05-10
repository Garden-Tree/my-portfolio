// src/lib/projects.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project } from '@/types';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

/**
 * Markdownファイルの内容をパースして Project オブジェクトに変換する。
 */
function parseProjectFile(fileName: string, fileContents: string): Project {
  const { data, content } = matter(fileContents);
  return {
    slug: data.slug ?? fileName.replace(/\.md$/, ''),
    title: data.title,
    shortDescription: data.shortDescription,
    technologies: data.technologies ?? [],
    imageUrl: data.imageUrl,
    projectUrl: data.projectUrl,
    repositoryUrl: data.repositoryUrl,
    order: data.order,
    content,
  };
}

/**
 * src/content/projects 配下の全Markdownファイルを読み込み、
 * フロントマターと本文をパースして Project[] として返す。
 * order の昇順でソートされる。
 */
export function getProjects(): Project[] {
  return fs
    .readdirSync(projectsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const filePath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return parseProjectFile(fileName, fileContents);
    })
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

/**
 * 指定された slug に一致するプロジェクトを1件返す。
 * ファイル名が slug と一致する場合は対象ファイルのみを読み込む。
 * 見つからない場合は undefined を返す。
 */
export function getProjectBySlug(slug: string): Project | undefined {
  const fileName = `${slug}.md`;
  const filePath = path.join(projectsDirectory, fileName);

  // ファイル名 = slug のケース（高速パス）
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return parseProjectFile(fileName, fileContents);
  }

  // フォールバック: フロントマターの slug がファイル名と異なる場合
  return getProjects().find((p) => p.slug === slug);
}
