import type { Profile } from '@/types';
import InteractiveBackground from '@/components/InteractiveBackground';

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Subtle Background */}
      <InteractiveBackground />

      {/* Minimalist Centered Content */}
      <div className="relative text-center max-w-4xl animate-fade-up z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter text-zinc-100">
          {profile.name}<span className="text-amber-400"></span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 text-zinc-400 animate-fade-up-delay-1 tracking-wide whitespace-pre-wrap">
          {profile.title}
        </p>
      </div>
    </section>
  );
}