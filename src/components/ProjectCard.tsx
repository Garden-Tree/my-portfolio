// src/components/ProjectCard.tsx

import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col">
      {/* プロジェクト画像 */}
      {project.imageUrl && (
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill // 親要素いっぱいに表示
            style={{ objectFit: 'cover' }} // アスペクト比を保ちつつカバー
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // レスポンシブな画像読み込みのヒント
            className="group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
            priority={priority}
          />
          {/* subtle overlay to make standard placeholders look better */}
          <div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}

      {/* プロジェクト情報 */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
          {project.shortDescription}
        </p>

        {/* 使用技術 */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* リンクボタン群 (カード下部に配置されるように mt-auto を使用) */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="w-full sm:w-auto bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white font-medium py-2 px-5 rounded-md text-sm text-center transition-colors duration-200"
            >
              View Details
            </Link>
            <div className="flex gap-3 justify-center sm:justify-end">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline text-sm font-medium"
                  aria-label={`View live project: ${project.title}`}
                >
                  View Project
                </a>
              )}
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:underline text-sm font-medium"
                  aria-label={`View source code for ${project.title}`}
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}