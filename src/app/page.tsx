// app/page.tsx や pages/index.tsx などのホームページ用ファイル

// 各セクションコンポーネントをインポート (パスは適宜調整してください)
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';

// データファイルをインポート
import profileData from '@/data/profile.json';
import projectsData from '@/data/projects.json';

export default function HomePage() {
  return (
    <>
      {/* 各セクションコンポーネントを配置し、必要なデータをpropsで渡す */}
      <HeroSection profile={profileData} />
      <AboutSection profile={profileData} />
      <ProjectsSection projects={projectsData} />
      <SkillsSection skills={profileData.skills } />
    </>
  );
}