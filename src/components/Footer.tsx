'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                        {t.footer.reachOut}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 text-sm font-medium">
                        <a href="mailto:anisbiad1@gmail.com" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                            anisbiad1@gmail.com
                        </a>
                        <span className="hidden md:inline text-zinc-300 dark:text-zinc-700">|</span>
                        <a href="tel:+33786577194" className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                            +33 7 86 57 71 94
                        </a>
                        <span className="hidden md:inline text-zinc-300 dark:text-zinc-700">|</span>
                        <span className="text-zinc-500 dark:text-zinc-400">Paris, France</span>
                    </div>
                </div>

                <p className="text-sm text-zinc-400 dark:text-zinc-500 font-mono">
                    {t.footer.crafted}
                </p>
            </div>
        </footer>
    );
}
