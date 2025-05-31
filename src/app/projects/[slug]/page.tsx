import projectsData from '@/data/projects.json'; // または '../data/projects.json' など相対パス
import Link from 'next/link';
import { notFound } from 'next/navigation'; // プロジェクトが見つからない場合用

// プロジェクトの型定義 (ホームページと同じものを使えます)
interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription?: string; // 詳細ページではこちらを使います
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  repositoryUrl?: string;
}

interface ProjectDetailPageProps {
  params: {
    slug: string; // URLの動的セグメント [slug] がここに入ります
  };
}

// (任意) generateStaticParams: ビルド時に静的にパスを生成する場合
// これにより、各プロジェクトページがビルド時に静的HTMLとして生成されます。
export async function generateStaticParams() {
  return projectsData.map((project: Project) => ({
    slug: project.slug,
  }));
}

// (任意) ページのメタデータを動的に生成
export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p: Project) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  return {
    title: `${project.title} - Project Details`,
    description: project.shortDescription, // または longDescription の一部
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;
  const project = projectsData.find((p: Project) => p.slug === slug);

  if (!project) {
    notFound(); // projects.json に該当する slug がなければ404ページを表示
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
          &larr; Back to Projects
        </Link>
        <h1>{project.title}</h1>
        {project.imageUrl && (
          <img
            src={project.imageUrl} // ここはメイン画像や詳細画像など、一覧とは違う画像でも良い
            alt={project.title}
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginTop: '1rem' }}
          />
        )}
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2>About this project</h2>
        <p style={{ lineHeight: '1.8' }}>{project.longDescription || project.shortDescription}</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>Technologies Used</h3>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.technologies.map((tech) => (
            <li key={tech} style={{ background: '#444', padding: '0.3rem 0.7rem', borderRadius: '4px', fontSize: '0.9em' }}>
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Links</h3>
        {project.projectUrl && (
          <p>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>
              View Live Project &rarr;
            </a>
          </p>
        )}
        {project.repositoryUrl && (
          <p>
            <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3' }}>
              View Source Code &rarr;
            </a>
          </p>
        )}
        {!project.projectUrl && !project.repositoryUrl && <p>No external links available for this project.</p>}
      </section>
    </div>
  );
}