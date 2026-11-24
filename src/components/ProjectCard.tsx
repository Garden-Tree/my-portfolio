import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col"
    >
      {/* プロジェクト画像 */}
      {project.imageUrl && (
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}

      {/* プロジェクト情報 */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-zinc-100">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
          {project.shortDescription}
        </p>

        {/* 使用技術 */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-zinc-500 mb-2">使用技術</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex justify-end items-end text-zinc-500 group-hover:text-amber-400 transition-colors duration-300 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </Link>
  );
}