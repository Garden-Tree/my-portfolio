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
    <Link
      href={`/projects/${project.slug}`}
      className="group bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col"
    >
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

        <div className="mt-auto flex justify-end items-end text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors duration-300 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </Link>
  );
}