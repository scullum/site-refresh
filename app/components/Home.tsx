import { homePage } from '@/data/content';
import Link from 'next/link';

export function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-12">
            {homePage.hero.subtitle}
          </h1>

          <div className="space-y-6 text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mb-12">
            {homePage.hero.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a
            href={homePage.hero.cta.href}
            className="inline-block text-lg font-medium text-orange-600 hover:text-orange-700 transition-colors mb-20"
          >
            {homePage.hero.cta.label} →
          </a>

          <div className="mt-24">
            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-12">
              {homePage.howIHelp.heading}
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {homePage.howIHelp.items.map((item, index) => (
                <div key={index} className="border-t border-neutral-900 pt-6">
                  <p className="text-xl font-medium leading-relaxed tracking-tight">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

