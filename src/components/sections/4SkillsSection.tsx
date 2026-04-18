// components/sections/SkillsSection.tsx

import type { SkillGroup } from '@/types';

interface SkillsSectionProps {
  skills: SkillGroup[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-gray-50 dark:bg-[#111] px-4 sm:px-6 lg:px-8 border-y border-gray-100 dark:border-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16 text-gray-900 dark:text-gray-100 tracking-wide">
          My Skills
        </h2>
        <div className="space-y-12">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`animate-fade-up`}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
            >
              <h3 className="text-lg font-medium mb-5 text-gray-900 dark:text-gray-300 tracking-wide">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 text-sm px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#222] transition-colors duration-200 cursor-default"
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