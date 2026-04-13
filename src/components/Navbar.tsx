import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Timeline', href: '/#timeline' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/#hero" className="text-xl font-bold text-gray-900 dark:text-white tracking-tighter hover:opacity-80 transition-opacity">
              GardenTree
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
                  className="text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500"
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
