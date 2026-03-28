// components/sections/HeroSection.tsx
import Image from 'next/image'; // プロフィール画像を使う場合
import Link from 'next/link';   // CTAボタンなどでリンクを使う場合
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
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 tracking-tighter text-white">
          {profile.name}<span className="text-blue-400"></span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 text-blue-50 animate-fade-up-delay-1 tracking-wide">
          {profile.title.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
      </div>
    </section>
  );
}