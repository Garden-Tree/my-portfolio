import { siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-8 text-center text-sm text-zinc-500">
      &copy; {siteConfig.name}
    </footer>
  );
}
