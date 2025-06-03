// components/sections/HeroSection.tsx
import Image from 'next/image'; // プロフィール画像を使う場合
import Link from 'next/link';   // CTAボタンなどでリンクを使う場合

interface ProfileData {
  name: string;
  title: string;
  heroSubtitle?: string;
  heroCTA?: {
    text: string;
    href: string;
  };
  // 他にもヒーローセクションで使いたいデータがあれば追加
}

interface HeroSectionProps {
  profile: ProfileData;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl">
        {/* プロフィール画像 (オプション) */}
        {/* <Image src="/images/your-hero-image.jpg" alt={profile.name} width={200} height={200} className="rounded-full mx-auto mb-8 shadow-lg" /> */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
          {profile.name}
        </h1>
        <p className="text-2xl sm:text-3xl font-medium mb-6 text-blue-200">
          {profile.title}
        </p>
        {profile.heroSubtitle && (
          <p className="text-lg sm:text-xl mb-10 text-blue-100 leading-relaxed">
            {profile.heroSubtitle}
          </p>
        )}
        {profile.heroCTA && (
          <Link href={profile.heroCTA.href}
            className="bg-white text-purple-700 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              {profile.heroCTA.text}
          </Link>
        )}
        {/* 下のセクションへのスクロールを促すアイコンなどを置いても良い */}
      </div>
    </section>
  );
}