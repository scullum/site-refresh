import { aboutPage } from '@/data/content';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { ExperienceTimeline } from '@/app/components/ExperienceTimeline';
import { PageWrapper } from '@/app/components/PageWrapper';
import Image from 'next/image';

export const metadata = {
  title: 'About - Scott Cullum',
  description: 'Learn about Scott Cullum, a creative technologist with 20+ years of experience bridging design, engineering, and strategy.',
  alternates: {
    canonical: 'https://scullum.com/about',
  },
  openGraph: {
    title: 'About - Scott Cullum',
    description: 'Learn about Scott Cullum, a creative technologist with 20+ years of experience bridging design, engineering, and strategy.',
    url: 'https://scullum.com/about',
    siteName: 'Scott Cullum',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: '/images/scott-cullum.jpg',
        width: 1200,
        height: 630,
        alt: 'Scott Cullum',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Scott Cullum',
    description: 'Learn about Scott Cullum, a creative technologist with 20+ years of experience bridging design, engineering, and strategy.',
    images: ['/images/scott-cullum.jpg'],
  },
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-bg text-fg">
        <Navigation />
        <main className="pt-32 pb-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-16">
              {/* Sidebar with label and photo */}
              <div className="md:col-span-3">
                <h1 className="text-sm uppercase tracking-[0.2em] text-primary mb-12 font-semibold">
                  {aboutPage.hero.title}
                </h1>

                {/* Photo */}
                <div className="sticky top-32">
                  <div className="aspect-square w-full bg-bg-alt mb-6 relative overflow-hidden">
                    <Image
                      src="/images/scott-cullum.jpg"
                      alt="Scott Cullum"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="text-sm text-fg-muted leading-relaxed">
                    I used to look like this 10 years ago
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
                        <div className="h-px bg-border mb-8"></div>
                      </>
                    )}
                    <div className="space-y-6 text-lg text-fg-muted leading-relaxed max-w-prose">
                      {section.body.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-16">
            <ExperienceTimeline />
          </div>

          {/* CTA to Services */}
          <div className="max-w-7xl mx-auto px-8 pt-16 pb-24">
            <div className="border-t border-border pt-12">
              <a
                href="/services"
                className="inline-block text-sm uppercase tracking-wide font-medium border-b border-fg-muted hover:border-fg transition-colors pb-1"
              >
                View services
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageWrapper>
  );
}
