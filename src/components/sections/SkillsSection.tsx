// components/sections/SkillsSection.tsx

interface SkillItem {
  category: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: SkillItem[];
  title: string;
}

export default function SkillsSection({ skills, title }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="space-y-10">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm"
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