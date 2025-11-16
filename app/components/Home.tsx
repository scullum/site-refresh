import { homePage } from '@/data/content';

export function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight mb-12">
            {homePage.hero.subtitle}
          </h1>

          <div className="space-y-6 text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-prose mb-8">
            {homePage.hero.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a
            href={homePage.hero.cta.href}
            className="inline-block text-sm uppercase tracking-wide font-medium border-b border-neutral-400 hover:border-neutral-900 transition-colors pb-1 mb-20"
          >
            {homePage.hero.cta.label}
          </a>

          <div className="mt-32">
            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-8 font-semibold">
              {homePage.howIHelp.heading}
            </h2>
            <div className="grid md:grid-cols-3 gap-16">
              {homePage.howIHelp.items.map((item, index) => (
                <div key={index} className="border-t border-neutral-900 pt-6">
                  <p className="text-lg font-medium leading-relaxed tracking-tight">
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

