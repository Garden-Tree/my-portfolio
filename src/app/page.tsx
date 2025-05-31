import profileData from '@/data/profile.json'; // パスエイリアス @/ を使用している場合
// import profileData from '../data/profile.json'; // 相対パスの場合
import projectsData from '@/data/projects.json'; // プロジェクトデータをインポート
// import projectsData from '../data/projects.json'; // 相対パスの場合
import Link from 'next/link'; // 詳細ページへのリンク用

export const metadata = {
  title: `${profileData.name} - Portfolio`,
  description: `Portfolio of ${profileData.name}`,
};

// プロジェクトの型定義 (任意ですが推奨)
interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  // longDescription?: string; // 詳細ページで使うのでここでは不要かも
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  repositoryUrl?: string;
}

export default function HomePage() {
  return (
    <div>
      <main style={{ padding: '2rem' }}>
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          {/* <img src="/images/profile.jpg" alt={profileData.name} style={{ borderRadius: '50%', width: '150px', height: '150px' }} /> */}
          <h1>{profileData.name}</h1>
          <p>{profileData.title}</p>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>{profileData.bio}</p>
        </header>

        <section>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {projectsData.map((project: Project) => ( // 型アサーションまたは型ガードを使用
              <div key={project.id} style={{ border: '1px solid #eee', padding: '1.5rem', borderRadius: '8px' }}>
                {/* publicフォルダに画像を配置した場合 */}
                {project.imageUrl && (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }}
                    />
                )}
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <p style={{ fontSize: '0.9em', color: '#555' }}>
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
                </p>

                <Link href={`/projects/${project.slug}`} style={{ display: 'inline-block', marginTop: '1rem' }}>
                  View Details
                </Link>
                <div>
                    {project.projectUrl && (
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
                            View Project
                        </a>
                    )}
                    {project.repositoryUrl && (
                        <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                            View Code
                        </a>
                    )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}