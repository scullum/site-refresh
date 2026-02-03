import { footer, siteMeta } from '@/data/content';

export function Footer() {
  return (
    <footer id="contact" className="px-8 py-32 bg-bg-alt border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            {footer.heading}
          </h2>
          <div className="space-y-4">
            <a
              href={`mailto:${footer.email}`}
              className="text-3xl md:text-4xl text-primary hover:text-primary-hover transition-colors inline-block"
            >
              {footer.email}
            </a>
            <div>
              <a
                href={siteMeta.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-fg hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                {footer.linkedinLabel}
              </a>
            </div>
          </div>
          {footer.availability && (
            <p className="text-fg-muted text-base mt-8">
              {footer.availability}
            </p>
          )}
        </div>

        <div className="pt-16 border-t border-border">
          <p className="text-fg-muted text-sm tracking-wide leading-relaxed">
            {footer.tagline}
          </p>
          <p className="text-fg-muted/60 text-xs mt-8">
            © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
