import timelineData from '@/data/timeline';
import type { TimelineEvent } from '@/types';

export default function TimelineSection() {
  const events: TimelineEvent[] = timelineData;

  return (
    <section id="timeline" className="py-24 sm:py-32 bg-zinc-950 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-zinc-100 tracking-tight">
          My Timeline
        </h2>
        
        {/* Timeline Container */}
        <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-8 space-y-14">
          {events.map((event, index) => (
            <div key={index} className="relative pl-8 sm:pl-12">
              {/* Timeline Dot (Outer) */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-4 border-amber-400 shadow-sm" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline mb-3">
                <span className="text-xl font-black text-amber-400 mr-5 tabular-nums">
                  {event.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-1 sm:mt-0 leading-tight">
                  {event.title}
                </h3>
              </div>
              
              {event.description && (
                <p className="text-zinc-400 leading-relaxed max-w-2xl mt-2 font-light whitespace-pre-wrap">
                  {event.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
