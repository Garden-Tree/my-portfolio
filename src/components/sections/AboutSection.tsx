// components/sections/AboutSection.tsx
import Image from 'next/image';

import type { Profile } from '@/types';

interface AboutSectionProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {profile.profileImageUrl && (
            <div className="md:col-span-1 flex justify-center">
              <Image
                src={profile.profileImageUrl}
                alt={profile.name}
                width={200}
                height={200}
                className="rounded-full shadow-lg object-cover"
              />
            </div>
          )}
          <div className={profile.profileImageUrl ? "md:col-span-2" : "md:col-span-3"}>
            {/* profile.bio は HomePage で使っていたものをこちらに */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {profile.bio} {/* JSONのbioを表示 */}
            </p>
            {/* さらに詳細な自己紹介文や強みなどをここに追加 */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              情報系学部に所属し、Web技術を中心に学んでいます。特にフロントエンド開発に情熱を持っており、
              ユーザーにとって直感的で使いやすいインターフェースの実現を目指しています。
              新しい技術を学ぶことにも積極的で、チームでの開発経験も積みたいと考えています。
            </p>
            {/* 必要に応じて、さらに段落やリストを追加 */}
          </div>
        </div>
      </div>
    </section>
  );
}