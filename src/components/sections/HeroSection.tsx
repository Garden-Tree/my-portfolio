import type { Profile } from '@/types';
import InteractiveBackground from '@/components/InteractiveBackground';
import { siteConfig } from '@/lib/site';

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="hero" className="relative isolate min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <InteractiveBackground />
      <div className="relative text-center max-w-4xl animate-fade-up z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter text-zinc-100">
          {profile.name}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 text-zinc-400 animate-fade-up-delay-1 tracking-wide whitespace-pre-wrap">
          {profile.title}
        </p>
        <div className="animate-fade-up-delay-1">
          <p className="mb-8 text-sm sm:text-base text-zinc-300">{profile.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-amber-400 px-7 py-3 font-bold text-zinc-950 transition-colors hover:bg-amber-300"
            >
              作品を見る
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-600 px-7 py-3 font-bold text-zinc-100 transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
