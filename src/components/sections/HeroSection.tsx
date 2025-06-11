// components/sections/HeroSection.tsx
import Image from 'next/image'; // プロフィール画像を使う場合
import Link from 'next/link';   // CTAボタンなどでリンクを使う場合
import type { Profile } from '@/types';

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
          {profile.name}'s<br />
          Portfolio
        </h1>
        <p className="text-2xl sm:text-3xl font-medium mb-6 text-blue-200">
          {profile.title}
        </p>
        {/* 下のセクションへのスクロールを促すアイコンなどを置いても良い */}
      </div>
    </section>
  );
}