'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.creations, path: '/creations' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter border-2 border-black dark:border-white text-black dark:text-white p-1 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
          AB
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-black dark:hover:text-white uppercase tracking-wider',
                pathname === item.path
                  ? 'text-black dark:text-white'
                  : 'text-zinc-500 dark:text-zinc-400'
              )}
            >
              {item.name}
            </Link>
          ))}

          <div className="h-4 w-[1px] bg-zinc-300 dark:bg-zinc-700 mx-2" />

          {/* Language Switch */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors uppercase"
          >
            {language}
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 p-6"
        >
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'text-lg font-medium uppercase tracking-wider',
                  pathname === item.path
                    ? 'text-black dark:text-white'
                    : 'text-zinc-500 dark:text-zinc-400'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'fr' : 'en');
                  setIsOpen(false);
                }}
                className="text-lg font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors uppercase"
              >
                {language === 'en' ? 'Français' : 'English'}
              </button>

              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
