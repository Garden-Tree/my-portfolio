// components/sections/AboutSection.tsx
import Image from 'next/image';
import GitHubLink from '@/components/GitHubLink';
import type { Profile } from '@/types';

interface AboutSectionProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-zinc-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-zinc-100 tracking-tight">
          About Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {profile.profileImageUrl && (
            <div className="relative flex justify-center">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
                <Image
                  src={profile.profileImageUrl}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed md:leading-loose mb-10 font-light whitespace-pre-wrap">
              {profile.bio}
            </p>

            {profile.certifications && profile.certifications.length > 0 && (
              <div className="mb-10 w-full bg-amber-500/10 p-6 rounded-2xl border border-amber-500/20">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-100 mb-5 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                  Certifications & Awards
                </h3>
                <ul className="space-y-4">
                  {profile.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start text-zinc-300">
                      <span className="text-amber-400 mr-4 mt-1.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="font-medium text-base sm:text-lg leading-snug">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="inline-flex mt-2 justify-center lg:justify-start">
              <GitHubLink href={profile.heroCTA?.href || "https://github.com/Garden-Tree"} size={36} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}