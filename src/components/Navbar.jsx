import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact-us' }
  ];

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1400px] z-50 transition-all duration-300">
        <div 
          className={`bg-white rounded-full px-5 py-2.5 shadow-lg flex items-center justify-between border border-gray-100 transition-all duration-300 ${
            isScrolled ? 'shadow-xl backdrop-blur-md bg-white/95 py-2' : ''
          }`}
        >
          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-pink-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Graphical Logo Image from reference site */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img 
              src="/assets/images/logo.png" 
              alt="Sreeragam Holidays Logo" 
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Navigation Pill */}
          <nav className="hidden md:flex items-center bg-gray-100/80 p-1.5 rounded-full border border-gray-200/50 mx-2">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? 'bg-white text-gray-900 shadow-sm font-bold'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919895407174"
              className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-indigo-200 flex items-center gap-2 transition-all duration-200 shadow-sm"
            >
              <Phone className="w-4 h-4 text-pink-600 fill-pink-600" />
              <span className="hidden sm:inline">24/7 Helpline</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-white">
          <div className="p-4 flex items-center justify-between border-b">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src="/assets/images/logo2.png" 
                alt="Sreeragam Holidays Logo" 
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 p-6 flex flex-col gap-3 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl text-base font-semibold border ${
                  location.pathname === link.path
                    ? 'bg-pink-50 text-pink-600 border-pink-200'
                    : 'text-gray-700 border-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="tel:+919895407174"
                className="w-full text-center bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> 24/7 Helpline (+91 98954 07174)
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

