import Image from 'next/image';
import activitiesData from '@/data/activities';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Leadership & Activities
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            組織を動かし、チーム全体の価値を最大化する取り組み
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {activitiesData.map((activity, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center group">

              {/* Image Section */}
              <div className="w-full md:w-2/5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 shrink-0 border border-gray-100 dark:border-gray-800">
                <Image
                  src={activity.imageUrl}
                  alt={activity.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/5 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider rounded-full self-start mb-4">
                  {activity.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed whitespace-pre-wrap font-light">
                  {activity.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
