'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-12 pb-32">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex flex-col justify-center px-6 max-w-7xl mx-auto w-full pt-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            ANIS BIAD
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light mb-8 uppercase tracking-widest"
          >
            {t.hero.role}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-2xl text-zinc-600 dark:text-zinc-300 mb-10 leading-relaxed"
          >
            {t.hero.description}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="/creations"
              className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              {t.hero.cta} <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-4">{t.experience.title}</h2>
        <div className="flex flex-col gap-4">
          {t.experience.items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl transition-all hover:opacity-90"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:underline decoration-1 underline-offset-4">
                    {item.company}
                  </h3>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
                </div>
                <span className="text-zinc-500 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {item.period}
                </span>
              </div>
              <h4 className="text-base font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                {item.role}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 tracking-tight border-b border-zinc-200 dark:border-zinc-800 pb-4">{t.education.title}</h2>
        <div className="flex flex-col gap-4">
          {t.education.items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl transition-all hover:opacity-90"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:underline decoration-1 underline-offset-4">
                    {item.school}
                  </h3>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
                </div>
                <span className="text-zinc-500 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  {item.period}
                </span>
              </div>
              <h4 className="text-base font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                {item.degree}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
