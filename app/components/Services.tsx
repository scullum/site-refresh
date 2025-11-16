import { servicesPage } from '@/data/content';

export function Services() {
  return (
    <section id="services" className="min-h-screen px-8 py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6 font-semibold">
            {servicesPage.hero.title}
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed max-w-prose">
            {servicesPage.hero.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          {servicesPage.services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-neutral-200 p-12 hover:border-neutral-900 transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-5">
                  <h3 className="text-3xl font-semibold tracking-tight mb-3">{service.name}</h3>
                  <p className="text-neutral-700 text-lg mb-6 leading-relaxed">{service.summary}</p>
                  <div className="space-y-4 text-neutral-700 leading-relaxed max-w-prose">
                    {service.description.map((desc, idx) => (
                      <p key={idx}>{desc}</p>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-7 space-y-8">
                  {service.whatThisIncludes.length > 0 && (
                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4 font-semibold">
                        What this includes
                      </h4>
                      <ul className="space-y-3 text-neutral-700 leading-relaxed">
                        {service.whatThisIncludes.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-600 mr-3 mt-1">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {service.goodFor.length > 0 && (
                    <div>
                      <h4 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4 font-semibold">
                        Good for
                      </h4>
                      <ul className="space-y-3 text-neutral-700 leading-relaxed">
                        {service.goodFor.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-600 mr-3 mt-1">—</span>
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
      </div>
    </section>
  );
}

