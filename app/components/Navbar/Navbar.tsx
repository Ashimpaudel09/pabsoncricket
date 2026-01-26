'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import pabLogo from '../../Logo/pablogo.png';

interface NavLink {
  name: string;
  href: string; // section ID
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const router = useRouter();
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: 'Home', href: 'hero' },
    { name: 'Teams', href: 'teams' },
    { name: 'Fixtures', href: 'schedule' },
    { name: 'Result', href: 'results' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Contact', href: 'contact' },
  ];

  // Smooth scroll handler (mobile-friendly + hides hash)
  const handleScrollTo = useCallback(
    (id: string) => {
      setIsOpen(false); // close mobile menu

      // Replace URL without hash
      router.replace('/', { scroll: false });

      // Delay scroll to wait for menu collapse animation
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150); // matches mobile menu animation
    },
    [router]
  );

  // Scroll listener for navbar background & active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Detect active section
      for (let i = 0; i < navLinks.length; i++) {
        const section = document.getElementById(navLinks[i].href);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        // 80px offset for navbar height
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActiveSection(navLinks[i].href);
          break; // stop loop once active section found
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial state on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleScrollTo('hero')}
          >
            <Image
              src={pabLogo}
              alt="PABSON Cricket League Logo"
              width={scrolled ? 48 : 64}
              height={scrolled ? 48 : 64}
              className="transition-all duration-300 w-auto"
              priority
            />

            <div
              className={`flex flex-col transition-opacity duration-300 ${
                scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'
              }`}
            >
              <span className="text-lg font-black tracking-tight text-slate-900 leading-none">
                PABSON <span className="text-red-600">U-15</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                Cricket League
              </span>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.href)}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  activeSection === link.href
                    ? 'text-red-600'
                    : 'text-slate-600 hover:text-red-600'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 hover:text-red-600 transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className={`block w-full text-left text-lg font-bold px-4 py-3 rounded-xl transition-all ${
                    activeSection === link.href
                      ? 'text-red-600'
                      : 'text-slate-700 hover:text-red-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
