import { homePage } from '@/data/content';

export function HowIHelp() {
  return (
    <section className="bg-orange-500/95 border-b-2 border-orange-600 px-8 py-20 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl">
          <h2 className="text-sm uppercase tracking-[0.2em] text-white/70 mb-8 font-semibold">
            {homePage.howIHelp.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            {homePage.howIHelp.items.map((item, index) => (
              <div key={index} className="border-t border-white pt-6">
                <p className="text-lg font-medium leading-relaxed tracking-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
