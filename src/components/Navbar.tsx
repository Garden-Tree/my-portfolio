'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Timeline', href: '/#timeline' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Leadership', href: '/#leadership' },
    { name: 'Skills', href: '/#skills' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // もし現在トップページ(/)にいて、かつリンクがアンカーリンク(#)なら、JSでスムーズスクロール
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/#hero" className="text-xl font-bold text-zinc-100 tracking-tighter hover:text-zinc-300 transition-colors">
              GardenTree
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-zinc-400 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile minimal icon (optional) */}
          <div className="md:hidden flex">
             <div className="flex space-x-4">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-xs font-medium text-zinc-400 hover:text-amber-400"
                >
                  {item.name}
                </Link>
              ))}
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
