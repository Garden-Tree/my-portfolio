import Image from 'next/image';
import activitiesData from '@/data/activities';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 sm:py-32 bg-zinc-900 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 tracking-tight">
            Leadership & Activities
          </h2>
          <p className="text-zinc-400 text-lg">
            組織を動かし、チーム全体の価値を最大化する取り組み
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {activitiesData.map((activity, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center">

              {/* Image Section */}
              <div className="md:col-span-2 relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-zinc-800">
                <Image
                  src={activity.imageUrl}
                  alt={activity.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-amber-400/10 text-amber-400 text-sm font-semibold tracking-wider rounded-full self-start mb-4">
                  {activity.role}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-5 leading-tight">
                  {activity.title}
                </h3>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed whitespace-pre-wrap font-light">
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
