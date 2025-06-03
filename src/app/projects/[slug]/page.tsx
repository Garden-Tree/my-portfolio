import projectsData from '@/data/projects.json';
import Link from 'next/link';
import Image from 'next/image'; // next/image をインポート
import { notFound } from 'next/navigation';
import type { Project } from '@/types'; // 共通の型定義をインポート

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project: Project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p: Project) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  return {
    title: `${project.title} - Project Details`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;
  // projectsDataをProject型として扱うことを明示
  const typedProjectsData: Project[] = projectsData;
  const project = typedProjectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <header className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
        <Link
          href="/" // 通常はプロジェクト一覧ページ（例: /projects）に戻ることが多いです
          className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>
        {project.imageUrl && (
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mt-4">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px"
              priority // LCPになる可能性が高いためpriorityを付与
            />
          </div>
        )}
      </header>

      <section className="mb-10 prose prose-lg dark:prose-invert max-w-none">
        {/* proseクラスを使うとMarkdown風のスタイルが適用される */}
        {/* 必要に応じて prose-headings:text-xl などで調整 */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          About This Project
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          {project.longDescription || project.shortDescription}
        </p>
        {/* もしlongDescriptionがMarkdown形式なら、それをパースして表示するライブラリを使うとよりリッチになります */}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Technologies Used
        </h2>
        <ul className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-full text-sm font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Links
        </h2>
        <div className="space-y-3">
          {project.projectUrl && (
            <p>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
              >
                View Live Project &rarr;
              </a>
            </p>
          )}
          {project.repositoryUrl && (
            <p>
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
              >
                View Source Code &rarr;
              </a>
            </p>
          )}
          {!project.projectUrl && !project.repositoryUrl && (
            <p className="text-gray-600 dark:text-gray-400">
              No external links available for this project.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}