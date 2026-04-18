// components/sections/SkillsSection.tsx

import type { SkillGroup } from '@/types';

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-zinc-900 px-4 sm:px-6 lg:px-8 border-y border-zinc-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-zinc-100 tracking-tight">
          My Skills
        </h2>
        <div className="space-y-12">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
            >
              <h3 className="text-lg font-medium mb-5 text-zinc-100 tracking-wide">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm px-4 py-2 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}