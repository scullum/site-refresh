import { workPage } from '@/data/content';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { PageWrapper } from '@/app/components/PageWrapper';

export const metadata = {
  title: 'Work - Scott Cullum',
  description: 'Portfolio of work spanning design, engineering, and product across organizations from early-stage teams to global enterprises.',
  alternates: {
    canonical: 'https://scullum.com/work',
  },
  openGraph: {
    title: 'Work - Scott Cullum',
    description: 'Portfolio of work spanning design, engineering, and product across organizations from early-stage teams to global enterprises.',
    url: 'https://scullum.com/work',
    siteName: 'Scott Cullum',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/scott-cullum.jpg',
        width: 1200,
        height: 630,
        alt: 'Scott Cullum - Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work - Scott Cullum',
    description: 'Portfolio of work spanning design, engineering, and product across organizations from early-stage teams to global enterprises.',
    images: ['/images/scott-cullum.jpg'],
  },
};

export default function WorkPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-bg text-fg">
        <Navigation />
        <main className="pt-32 pb-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h1 className="text-sm uppercase tracking-[0.2em] text-primary mb-6 font-semibold">
                {workPage.hero.title}
              </h1>
              <div className="space-y-6 text-lg text-fg-muted leading-relaxed max-w-prose">
                {workPage.hero.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-1">
              {workPage.projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group border border-border hover:border-border-strong transition-all bg-bg overflow-hidden block"
                >
                  {project.image && (
                    <div className="aspect-[16/10] relative bg-bg-alt overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-12">
                    <p className="text-sm uppercase tracking-[0.2em] text-fg-muted mb-3 font-semibold">
                      {project.company}
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-fg-muted leading-relaxed">
                      {project.tagline}
                    </p>
                    <span className="inline-block mt-6 text-sm uppercase tracking-wide font-medium border-b border-fg-muted group-hover:border-fg transition-colors pb-1">
                      Read case study
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageWrapper>
  );
}
