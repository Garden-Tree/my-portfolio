import { getProjects, getProjectBySlug } from '@/lib/projects';
import BackButton from '@/components/BackButton';
import Image from 'next/image';
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
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} - Project Details`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 animate-fade-up">
        {/* ヘッダーセクション */}
        <header className="mb-12">
          <BackButton />
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mt-6 mb-8 tracking-tight">
            {project.title}
          </h1>
          {project.imageUrl && (
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
          )}
        </header>

        {/* 2カラムレイアウトエリア */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* 左側: メインコンテンツ (本文) */}
          <div className="lg:col-span-8">
            <section className="prose prose-invert prose-zinc max-w-none
              prose-headings:text-zinc-100 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:border-b prose-h2:border-zinc-800 prose-h2:pb-1 prose-h2:mt-4 prose-h2:mb-2
              prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-2
              prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:text-lg prose-p:my-1
              prose-ul:my-0
              prose-li:text-zinc-300 prose-li:text-lg prose-li:my-0
              prose-strong:text-zinc-100
              prose-a:text-amber-400 hover:prose-a:text-amber-300
            ">
              <ReactMarkdown>
                {project.content || project.shortDescription}
              </ReactMarkdown>
            </section>
          </div>

          {/* 右側: サイドバー (使用技術・リンク) */}
          <aside className="lg:col-span-4 space-y-12">

            {/* 使用技術 */}
            <section className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 sticky top-24">
              <h2 className="text-xl font-bold text-zinc-100 mb-6 flex items-center">
                <span className="w-1.5 h-6 bg-amber-500 rounded-full mr-3" />
                使用技術
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-xl text-sm font-medium border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* リンク (使用技術と同じカード内に配置してコンパクトに) */}
              <div className="mt-10 pt-8 border-t border-zinc-800">
                <h2 className="text-xl font-bold text-zinc-100 mb-6 flex items-center">
                  <span className="w-1.5 h-6 bg-amber-500 rounded-full mr-3" />
                  リンク
                </h2>
                <div className="space-y-4">
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-amber-400 hover:text-amber-300 font-bold text-lg group transition-colors"
                    >
                      プロジェクトを見る
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                  )}
                  {project.repositoryUrl && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-amber-400 hover:text-amber-300 font-bold text-lg group transition-colors"
                    >
                      ソースコード
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                  )}
                  {!project.projectUrl && !project.repositoryUrl && (
                    <p className="text-zinc-500 italic">リンクはありません</p>
                  )}
                </div>
              </div>
            </section>

          </aside>
        </div>
      </div>
    </div>
  );
}