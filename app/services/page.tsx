import { servicesPage } from '@/data/content';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { PageWrapper } from '@/app/components/PageWrapper';

export const metadata = {
  title: 'Services - Scott Cullum',
  description: 'Fractional advisory, AI-native prototyping, capability support, and technical direction for teams that need senior guidance.',
  alternates: {
    canonical: 'https://scullum.com/services',
  },
  openGraph: {
    title: 'Services - Scott Cullum',
    description: 'Fractional advisory, AI-native prototyping, capability support, and technical direction for teams that need senior guidance.',
    url: 'https://scullum.com/services',
    siteName: 'Scott Cullum',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/scott-cullum.jpg',
        width: 1200,
        height: 630,
        alt: 'Scott Cullum - Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Scott Cullum',
    description: 'Fractional advisory, AI-native prototyping, capability support, and technical direction for teams that need senior guidance.',
    images: ['/images/scott-cullum.jpg'],
  },
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-bg text-fg">
        <Navigation />
        <main className="pt-32 pb-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h1 className="text-sm uppercase tracking-[0.2em] text-primary mb-6 font-semibold">
                {servicesPage.hero.title}
              </h1>
              <div className="space-y-6 text-lg text-fg-muted leading-relaxed max-w-prose">
                {servicesPage.hero.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              {servicesPage.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-bg border border-border p-12 hover:border-border-strong transition-colors"
                >
                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-5">
                      <h2 className="text-3xl font-semibold tracking-tight mb-3">
                        {service.name}
                      </h2>
                      <p className="text-fg-muted text-lg mb-6 leading-relaxed">
                        {service.summary}
                      </p>
                      <div className="space-y-4 text-fg-muted leading-relaxed max-w-prose">
                        {service.description.map((desc, idx) => (
                          <p key={idx}>{desc}</p>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-7 space-y-8">
                      {service.whatThisIncludes.length > 0 && (
                        <div>
                          <h3 className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-semibold">
                            What this includes
                          </h3>
                          <ul className="space-y-3 text-fg-muted leading-relaxed">
                            {service.whatThisIncludes.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-3 mt-1">—</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {service.goodFor.length > 0 && (
                        <div>
                          <h3 className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-semibold">
                            Good for
                          </h3>
                          <ul className="space-y-3 text-fg-muted leading-relaxed">
                            {service.goodFor.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-3 mt-1">—</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to Work */}
            <div className="pt-16 mt-16 border-t border-border">
              <a
                href="/work"
                className="inline-block text-sm uppercase tracking-wide font-medium border-b border-fg-muted hover:border-fg transition-colors pb-1"
              >
                View work
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageWrapper>
  );
}
