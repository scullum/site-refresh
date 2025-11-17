import { workPage } from '@/data/content';
import Link from 'next/link';
import Image from 'next/image';

export function Work() {
  return (
    <section id="work" className="min-h-screen px-8 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-6 font-semibold">
            {workPage.hero.title}
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-prose">
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
              className="group border border-neutral-200 hover:border-neutral-900 transition-all bg-white overflow-hidden block"
            >
              {project.image && (
                <div className="aspect-[16/10] relative bg-neutral-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-12">
                <h3 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {project.tagline}
                </p>
                <span className="inline-block mt-6 text-sm uppercase tracking-wide font-medium border-b border-neutral-400 group-hover:border-neutral-900 transition-colors pb-1">
                  Read case study
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

