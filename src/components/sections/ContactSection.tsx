import GitHubLink from '@/components/GitHubLink';
import { siteConfig } from '@/lib/site';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-zinc-950 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-zinc-100 tracking-tight">連絡先</h2>
      <p className="text-zinc-400 mb-8">GitHubのプロフィールをご覧ください。</p>
      <GitHubLink href={siteConfig.githubUrl} size={36} />
    </section>
  );
}
