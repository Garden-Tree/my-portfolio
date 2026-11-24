import Image from 'next/image';
import type { Profile } from '@/types';

interface AboutSectionProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-zinc-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-100 tracking-tight">
          自己紹介
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
            <Image
              src={profile.profileImageUrl}
              alt="愛車のバイク"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="text-base sm:text-lg text-zinc-400 leading-loose whitespace-pre-wrap">
            {profile.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
