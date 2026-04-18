// app/page.tsx や pages/index.tsx などのホームページ用ファイル

// 各セクションコンポーネントをインポート (パスは適宜調整してください)
import HeroSection from '@/components/sections/1HeroSection';
import AboutSection from '@/components/sections/2AboutSection';
import TimelineSection from '@/components/sections/5TimelineSection';
import ProjectsSection from '@/components/sections/3ProjectsSection';
import LeadershipSection from '@/components/sections/6LeadershipSection';
import SkillsSection from '@/components/sections/4SkillsSection';

// データファイルをインポート
import profileData from '@/data/profile';
import projectsData from '@/data/projects';

export default function HomePage() {
  return (
    <>
      {/* 各セクションコンポーネントを配置し、必要なデータをpropsで渡す */}
      <HeroSection profile={profileData} />
      <AboutSection profile={profileData} />
      <TimelineSection />
      <ProjectsSection projects={projectsData} />
      <LeadershipSection />
      <SkillsSection skills={profileData.skills || []} />
    </>
  );
}