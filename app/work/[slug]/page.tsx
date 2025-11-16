import { workPage } from '@/data/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return workPage.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const project = workPage.projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} - Scott Cullum`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = workPage.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />

      <main className="pt-32 pb-24 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/#work"
            className="inline-flex items-center text-neutral-600 hover:text-orange-600 transition-colors mb-12"
          >
            ← Back to work
          </Link>

          {/* Project header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-medium leading-tight tracking-tight mb-6">
              {project.name}
            </h1>
            <p className="text-2xl text-neutral-600 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project sections */}
          <div className="space-y-16">
            {project.sections.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h2 className="text-3xl font-medium tracking-tight mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.subheading && (
                  <p className="text-xl text-neutral-600 mb-6 italic">
                    {section.subheading}
                  </p>
                )}
                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                  {section.body.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                {index < project.sections.length - 1 && (
                  <div className="h-px bg-neutral-200 mt-16"></div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation to next project */}
          <div className="mt-24 pt-12 border-t border-neutral-200">
            <Link
              href="/#work"
              className="inline-flex items-center text-lg font-medium text-orange-600 hover:text-orange-700 transition-colors"
            >
              View all work →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
