import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

import profileData from '@/data/profile';
import { getProjects } from '@/lib/projects';

export default function HomePage() {
  return (
    <>
      <HeroSection profile={profileData} />
      <AboutSection profile={profileData} />
      <CertificationsSection certifications={profileData.certifications} />
      <TimelineSection />
      <ProjectsSection projects={getProjects()} />
      <LeadershipSection />
      <SkillsSection skills={profileData.skills} />
      <ContactSection />
    </>
  );
}
