// src/components/sections/ProjectsSection.tsx

import ProjectCard from '@/components/ProjectCard';

import type { Project } from '@/types';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-zinc-950 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-zinc-100 tracking-tight">
          My Projects
        </h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index < 6} />
            ))}
          </div>
        ) : (
          <p className="text-center text-zinc-400">No projects to display yet.</p>
        )}
      </div>
    </section>
  );
}