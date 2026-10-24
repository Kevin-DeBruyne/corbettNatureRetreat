import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accommodations', href: '#accommodations' },
    { label: 'Safari & Trails', href: '#safaris' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Camp Life', href: '#camp-life' },
    { label: 'Wildlife Calendar', href: '#wildlife' },
    { label: 'Location & FAQs', href: '#location-faq' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled 
          ? 'bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-sm' 
          : 'bg-stone-950/70 backdrop-blur-sm border-b border-white/10 text-stone-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <a 
            href="#" 
            className="text-2xl font-bold tracking-tight text-white font-display hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
          >
            Corbett Nature Retreat
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-emerald-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a 
              href="tel:+918449506167" 
              className="flex items-center gap-2 text-xs text-stone-300 hover:text-white transition-colors whitespace-nowrap shrink-0 px-2 py-1"
              title="Camp Concierge Direct"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 84495 06167</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-md whitespace-nowrap shrink-0 shadow-sm"
            >
              Book Your Stay
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-stone-950 border-b border-stone-800 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-300 hover:text-emerald-400 text-sm font-medium py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
            <a 
              href="tel:+918449506167" 
              className="flex items-center gap-2 text-xs text-stone-400"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>+91 84495 06167 · Kyari, Corbett</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-md text-center"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
