'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Palette } from 'lucide-react';
import Link from 'next/link';
import { nav, siteMeta } from '@/data/content';
import { useTheme } from '@/lib/theme-context';
import { themes } from '@/lib/themes';
import { featureFlags } from '@/lib/feature-flags';

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showName, setShowName] = useState(!isHomePage);
  const [activeSection, setActiveSection] = useState<string>('');
  const { themeId, clearTheme } = useTheme();

  const currentTheme = themes[themeId];

  useEffect(() => {
    // Use Intersection Observer to track visible sections
    const observerOptions = {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'contact') {
            setActiveSection('#contact');
          } else if (id === 'work') {
            setActiveSection('#work');
          } else if (id === 'home') {
            setActiveSection('');
          } else {
            setActiveSection('');
          }
        }
      });
    }, observerOptions);

    // Observe sections
    const sections = ['home', 'work', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Only animate on homepage
    if (!isHomePage) {
      setShowName(true);
      return;
    }

    const handleScroll = () => {
      // Show name in nav when scrolled past 100px, then keep it visible
      if (window.scrollY > 100 && !showName) {
        setShowName(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showName, isHomePage]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const handleThemeSwitch = () => {
    clearTheme();
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-fg-inverted focus:rounded"
      >
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-alt border-b border-border">
        <div className="px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className={`text-2xl md:text-3xl font-semibold tracking-tight text-primary hover:text-primary-hover transition-all duration-300 ${
              showName ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {siteMeta.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center text-sm tracking-wide">
            {nav.slice(1).map((link) => {
              let isActive = pathname === link.href;

              // Special handling for work link
              if (link.href === '/work') {
                isActive = pathname === '/work' || pathname.startsWith('/work/');
              }

              // Don't show page indicators when contact section is active
              if (activeSection === '#contact') {
                isActive = false;
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-primary transition-colors pb-1 ${
                    isActive ? 'border-b-2 border-primary' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="#contact"
              className={`hover:text-primary transition-colors pb-1 ${
                activeSection === '#contact' ? 'border-b-2 border-primary' : ''
              }`}
            >
              Contact
            </a>

            {/* Theme Switcher - only shown when feature flag is enabled */}
            {featureFlags.enableThemeSelector && (
              <button
                onClick={handleThemeSwitch}
                className="flex items-center gap-2 px-3 py-1.5 rounded-theme bg-bg border border-border hover:border-border-strong transition-colors ml-4"
                title="Change theme"
              >
                <Palette size={16} className="text-primary" />
                <span className="text-xs font-medium">{currentTheme.name}</span>
              </button>
            )}
          </div>

          {/* Mobile: Theme button + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {featureFlags.enableThemeSelector && (
              <button
                onClick={handleThemeSwitch}
                className="p-2 hover:text-primary transition-colors"
                title="Change theme"
              >
                <Palette size={20} />
              </button>
            )}
            <button
              className="p-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-bg-alt">
          <div className="px-8 py-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-4">
              {nav.slice(1).map((link) => {
                let isActive = pathname === link.href;

                // Special handling for work link
                if (link.href === '/work') {
                  isActive = pathname === '/work' || pathname.startsWith('/work/');
                }

                // Don't show page indicators when contact section is active
                if (activeSection === '#contact') {
                  isActive = false;
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`text-lg hover:text-primary transition-colors pb-1 inline-block ${
                      isActive ? 'border-b-2 border-primary' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className={`text-lg hover:text-primary transition-colors pb-1 inline-block ${
                  activeSection === '#contact' ? 'border-b-2 border-primary' : ''
                }`}
              >
                Contact
              </a>

              {/* Mobile theme info - only shown when feature flag is enabled */}
              {featureFlags.enableThemeSelector && (
                <div className="pt-4 mt-4 border-t border-border">
                  <p className="text-xs text-fg-muted mb-2">Current theme</p>
                  <button
                    onClick={handleThemeSwitch}
                    className="flex items-center gap-2 text-primary"
                  >
                    <Palette size={16} />
                    <span className="font-medium">{currentTheme.name}</span>
                    <span className="text-xs text-fg-muted">({currentTheme.era})</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
