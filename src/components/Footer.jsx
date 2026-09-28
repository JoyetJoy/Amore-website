import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Column - About & Info */}
        <div>
          <Link to="/" className="inline-block mb-4">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Sreeragam <span className="text-pink-500">Holidays</span>
            </span>
          </Link>
          <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
            Welcome to Sreeragam Holidays! Your trusted travel partner for unforgettable tours, customized Kerala packages, and global holiday experiences.
          </p>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-pink-500 shrink-0" />
              <a href="mailto:booking.sreeragamholidays@gmail.com" className="hover:text-white transition-colors">
                booking.sreeragamholidays@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-pink-500 shrink-0" />
              <div>
                <a href="tel:+919895407174" className="hover:text-white transition-colors">
                  +91 98954 07174
                </a>
                <span className="mx-2 text-gray-600">|</span>
                <a href="tel:+914844510548" className="hover:text-white transition-colors">
                  Office: 0484 451 0548
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-1" />
              <p className="text-gray-400 leading-normal">
                Building No. 38/2996, Suite No. 24C, Second Floor, Fruitomans, Thripunithura Road, beside HDFC Bank, Edappally, Ernakulam, Kerala 682024, India
              </p>
            </li>
          </ul>
        </div>

        {/* Right Column - Quick Links & Social */}
        <div className="md:pl-12 flex flex-col justify-between">
          <div>
            <h5 className="text-lg font-bold text-white mb-4 tracking-wide">Quick Links</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-pink-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-pink-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-pink-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h6 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Connect With Us</h6>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1Ca27otN2m/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_sreeragamholidays_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-800/80 pt-6 text-center text-xs text-gray-500">
        <p>
          Copyright © 2026 <span className="text-pink-500 font-semibold">Sreeragam Holidays</span>. All Rights Reserved.
        </p>
        <p className="mt-1">
          Powered by{' '}
          <a 
            href="https://www.eayilaconsulting.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-pink-400 hover:underline font-medium"
          >
            Eayila
          </a>
        </p>
      </div>
    </footer>
  );
}
