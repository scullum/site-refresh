'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { nav, siteMeta } from '@/data/content';

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showName, setShowName] = useState(!isHomePage);
  const [activeSection, setActiveSection] = useState<string>('');

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50 border-b border-neutral-200">
      <div className="px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className={`text-2xl md:text-3xl font-semibold tracking-tight text-orange-600 hover:text-orange-700 transition-all duration-300 ${
              showName ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {siteMeta.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            {nav.slice(1).map((link) => {
              let isActive = pathname === link.href;

              // Special handling for work link (homepage section or detail pages)
              if (link.href === '/#work') {
                isActive = (isHomePage && activeSection === '#work') || pathname.startsWith('/work/');
              }

              // Don't show page indicators when contact section is active
              if (activeSection === '#contact') {
                isActive = false;
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-orange-600 transition-colors pb-1 ${
                    isActive ? 'border-b-2 border-orange-600' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="#contact"
              className={`hover:text-orange-600 transition-colors pb-1 ${
                activeSection === '#contact' ? 'border-b-2 border-orange-600' : ''
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-orange-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-neutral-50">
          <div className="px-8 py-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-4">
              {nav.slice(1).map((link) => {
                let isActive = pathname === link.href;

                // Special handling for work link (homepage section or detail pages)
                if (link.href === '/#work') {
                  isActive = (isHomePage && activeSection === '#work') || pathname.startsWith('/work/');
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
                    className={`text-lg hover:text-orange-600 transition-colors pb-1 inline-block ${
                      isActive ? 'border-b-2 border-orange-600' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className={`text-lg hover:text-orange-600 transition-colors pb-1 inline-block ${
                  activeSection === '#contact' ? 'border-b-2 border-orange-600' : ''
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

