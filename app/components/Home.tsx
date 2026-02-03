'use client';

import { useState, useEffect } from 'react';
import { homePage } from '@/data/content';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme-context';

export function Home() {
  const [hideHeroName, setHideHeroName] = useState(false);
  const { themeId } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Hide hero name when scrolled past 100px, then keep it hidden
      if (window.scrollY > 100 && !hideHeroName) {
        setHideHeroName(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideHeroName]);

  // Theme-specific classes
  const heroClasses = {
    terminal: 'theme-scanlines',
    vaporwave: 'theme-neon',
    'art-deco': 'theme-deco-border',
    swiss: '',
    brutalist: 'brutalist-border',
    y2k: 'theme-shine',
    minimal: '',
  }[themeId] || '';

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center px-8 pt-24 pb-32 ${heroClasses}`}
      style={{
        background: 'var(--hero-gradient)',
        backgroundSize: themeId === 'minimal' ? '200% 200%' : undefined,
        animation: themeId === 'minimal' ? 'gradient 15s ease infinite' : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hideHeroName ? 0 : 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-8 mb-4"
          >
            <p className={`text-2xl md:text-3xl font-semibold tracking-tight text-fg-inverted ${themeId === 'terminal' ? 'theme-glow' : ''}`}>
              {homePage.hero.title}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight mb-12 text-fg-inverted ${themeId === 'terminal' ? 'theme-glow' : ''}`}
          >
            {homePage.hero.subtitle}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6 text-xl md:text-2xl text-fg-inverted/90 leading-relaxed max-w-prose mb-8"
          >
            {homePage.hero.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-8"
          >
            <a
              href={homePage.hero.cta.href}
              className="inline-block text-sm uppercase tracking-wide font-medium border-b-2 border-fg-inverted hover:border-fg-inverted/70 hover:text-fg-inverted/70 transition-colors pb-1 text-fg-inverted"
            >
              {homePage.hero.cta.label}
            </a>
            <a
              href="/about"
              className="inline-block text-sm uppercase tracking-wide font-medium border-b-2 border-fg-inverted hover:border-fg-inverted/70 hover:text-fg-inverted/70 transition-colors pb-1 text-fg-inverted"
            >
              More about me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
