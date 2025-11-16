import { aboutPage } from '@/data/content';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import Image from 'next/image';

export const metadata = {
  title: 'About - Scott Cullum',
  description: 'Learn about Scott Cullum, a creative technologist with 20+ years of experience bridging design, engineering, and strategy.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />

      <main className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            {/* Sidebar with label and photo */}
            <div className="md:col-span-3">
              <h1 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-12 font-semibold">
                {aboutPage.hero.title}
              </h1>

              {/* Photo placeholder - replace with actual image */}
              <div className="sticky top-32">
                <div className="aspect-square w-full bg-neutral-100 mb-6 relative overflow-hidden">
                  {/* Placeholder - replace src with your photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
                    Photo
                  </div>
                  {/* Uncomment when you have a photo:
                  <Image
                    src="/images/scott-cullum.jpg"
                    alt="Scott Cullum"
                    fill
                    className="object-cover"
                    priority
                  />
                  */}
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Based near Washington, DC
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-9 space-y-12">
              {aboutPage.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  {section.heading && (
                    <>
                      <h2 className="text-2xl font-semibold tracking-tight mb-6">
                        {section.heading}
                      </h2>
                      <div className="h-px bg-neutral-200 mb-8"></div>
                    </>
                  )}
                  <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-prose">
                    {section.body.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* CTA to Services */}
              <div className="pt-12 mt-16 border-t border-neutral-200">
                <a
                  href="/services"
                  className="inline-block text-sm uppercase tracking-wide font-medium border-b border-neutral-400 hover:border-neutral-900 transition-colors pb-1"
                >
                  View services
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
