interface CertificationsSectionProps {
  certifications: string[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="py-16 sm:py-20 bg-zinc-900 border-t border-zinc-800 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-zinc-100 tracking-tight">
          資格・受賞
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl px-5 py-4 text-zinc-300 font-medium"
            >
              <svg aria-hidden="true" className="text-amber-400 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
