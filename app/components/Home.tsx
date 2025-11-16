'use client';

import { useState, useEffect } from 'react';
import { homePage } from '@/data/content';

export function Home() {
  const [hideHeroName, setHideHeroName] = useState(false);

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

  return (
    <section id="home" className="min-h-screen flex items-center bg-orange-600 text-white px-8 pt-24 pb-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-5xl">
          <div className={`py-8 mb-4 transition-opacity duration-300 ${hideHeroName ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-2xl md:text-3xl font-semibold tracking-tight">
              {homePage.hero.title}
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight mb-12">
            {homePage.hero.subtitle}
          </h1>

          <div className="space-y-6 text-xl md:text-2xl text-white/90 leading-relaxed max-w-prose mb-8">
            {homePage.hero.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex gap-8">
            <a
              href={homePage.hero.cta.href}
              className="inline-block text-sm uppercase tracking-wide font-medium border-b-2 border-white hover:border-white/70 hover:text-white/70 transition-colors pb-1"
            >
              {homePage.hero.cta.label}
            </a>
            <a
              href="/about"
              className="inline-block text-sm uppercase tracking-wide font-medium border-b-2 border-white hover:border-white/70 hover:text-white/70 transition-colors pb-1"
            >
              More about me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

