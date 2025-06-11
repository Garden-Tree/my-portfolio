// components/sections/AboutSection.tsx
import Image from 'next/image';
import GitHubLink from '@/components/GitHubLink';
import type { Profile } from '@/types';

interface AboutSectionProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {/* プロフィールのbioを表示 */}
              {profile.bio}
            </p>
            <GitHubLink href="https://github.com/Garden-Tree" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}