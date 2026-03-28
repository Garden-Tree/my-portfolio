// components/sections/AboutSection.tsx
import Image from 'next/image';
import GitHubLink from '@/components/GitHubLink';
import type { Profile } from '@/types';

interface AboutSectionProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white dark:bg-[#0a0a0a] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16 text-gray-900 dark:text-gray-100 tracking-wide">
          About Me
        </h2>
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          {profile.profileImageUrl && (
            <div className="md:col-span-2 relative flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow duration-500 group">
                <Image
                  src={profile.profileImageUrl}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          )}
          <div className="md:col-span-3 flex flex-col justify-center text-center md:text-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed md:leading-loose mb-10 font-light">
              {profile.bio}
            </p>
            <div className="inline-flex mt-2 justify-center md:justify-start">
              <GitHubLink href={profile.heroCTA?.href || "https://github.com/Garden-Tree"} size={36} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}