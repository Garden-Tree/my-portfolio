import { getProjects, getProjectBySlug } from '@/lib/projects';
import BackButton from '@/components/BackButton';
import Image from 'next/image'; // next/image をインポート
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
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

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 pt-24 pb-8 sm:pb-12 animate-fade-up">
      <header className="mb-8 pb-6 border-b border-zinc-800">
        <BackButton />
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">
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

      <section className="mb-10 max-w-none">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
          About This Project
        </h2>
        {/* Markdown本文をReactMarkdownでレンダリング */}
        <div className="prose prose-invert prose-zinc max-w-none
          prose-headings:text-zinc-100 prose-headings:font-semibold
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-zinc-300 prose-p:leading-relaxed
          prose-li:text-zinc-300
          prose-strong:text-zinc-200
          prose-a:text-amber-400 hover:prose-a:text-amber-300
        ">
          <ReactMarkdown>
            {project.content || project.shortDescription}
          </ReactMarkdown>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
          Technologies Used
        </h2>
        <ul className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="bg-zinc-950 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-md text-sm font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
          Links
        </h2>
        <div className="space-y-3">
          {project.projectUrl && (
            <p>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 hover:underline font-medium transition-colors"
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
                className="text-amber-400 hover:text-amber-300 hover:underline font-medium transition-colors"
              >
                View Source Code &rarr;
              </a>
            </p>
          )}
          {!project.projectUrl && !project.repositoryUrl && (
            <p className="text-zinc-500">
              No external links available for this project.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}