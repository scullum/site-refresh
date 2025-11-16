import { aboutPage } from '@/data/content';

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-8 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-3">
            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 sticky top-32">
              {aboutPage.hero.title}
            </h2>
          </div>
          <div className="md:col-span-9 space-y-12">
            {aboutPage.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {section.heading && (
                  <>
                    <h3 className="text-2xl font-medium tracking-tight mb-6">{section.heading}</h3>
                    <div className="h-px bg-neutral-200 mb-8"></div>
                  </>
                )}
                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                  {section.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

