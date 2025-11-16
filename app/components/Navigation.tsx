'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { nav, siteMeta } from '@/data/content';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="text-lg font-medium tracking-tight hover:text-orange-600 transition-colors">
          {siteMeta.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm tracking-wide">
          {nav.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-orange-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="hover:text-orange-600 transition-colors"
          >
            Contact
          </Link>
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col gap-4">
            {nav.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg hover:text-orange-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={handleLinkClick}
              className="text-lg hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

