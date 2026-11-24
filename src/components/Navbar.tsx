'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'ホーム', href: '/#hero' },
  { name: '自己紹介', href: '/#about' },
  { name: '経歴', href: '/#timeline' },
  { name: 'プロジェクト', href: '/#projects' },
  { name: '活動', href: '/#leadership' },
  { name: 'スキル', href: '/#skills' },
  { name: '連絡先', href: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (pathname !== '/') return;

    const element = document.getElementById(href.replace('/#', ''));
    if (!element) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    window.history.pushState(null, '', href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 shadow-sm"
      onKeyDown={(e) => {
        if (e.key === 'Escape') setIsOpen(false);
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/#hero"
            onClick={(e) => handleClick(e, '/#hero')}
            className="text-xl font-bold text-zinc-100 tracking-tighter hover:text-zinc-300 transition-colors"
          >
            GardenTree
          </Link>

          <div className="hidden md:flex items-center gap-1 lg:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-zinc-400 hover:text-amber-400 px-2 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-3 -mr-3 text-zinc-300"
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d={isOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block py-3 text-zinc-300 hover:text-amber-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
