import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

export default function AboutUs() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Breadcrumb Header Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-950 to-indigo-950 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">About Us</h1>
          <nav className="flex justify-center items-center gap-2 text-sm text-gray-300">
            <Link to="/" className="hover:text-pink-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-pink-400 font-semibold">About Us</span>
          </nav>
        </div>
      </section>

      {/* Main About Section matching exact reference design */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Images + Vertical Ribbon + Experience Badge */}
          <div className="relative pt-4 pb-12 pl-2 sm:pl-6 pr-2 sm:pr-6 max-w-lg lg:max-w-none mx-auto w-full">
            {/* Top Left Main Image */}
            <div className="relative w-[85%] rounded-3xl overflow-hidden shadow-xl aspect-[4/3] z-10">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
                alt="25,000+ Customers Worldwide"
                className="w-full h-full object-cover"
              />
              
              {/* Pink Vertical Ribbon on Left Side */}
              <div className="absolute top-0 bottom-0 left-0 bg-[#D81B60] text-white px-3 py-6 flex items-center justify-center z-20 shadow-md">
                <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
                  25,000 + Customers Worldwide
                </span>
              </div>
            </div>

            {/* Bottom Right Overlapping Image */}
            <div className="absolute bottom-0 right-0 w-[72%] rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] z-20 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Tropical Island Vacation"
                className="w-full h-full object-cover"
              />

              {/* Overlaid Badge: 6 years of experience */}
              <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-dashed border-pink-200 z-30 max-w-[150px] text-center">
                <div className="text-4xl sm:text-5xl font-black text-[#D81B60] leading-none mb-1">
                  6
                </div>
                <div className="text-xs font-bold text-slate-700 leading-tight">
                  years of experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Description, and Features */}
          <div className="lg:pl-4">
            <span className="text-pink-600 font-yes text-3xl md:text-4xl block mb-2">
              Explore the world
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
              Great Opportunity For <br />
              <span className="font-yes text-slate-400 font-normal text-4xl md:text-5xl capitalize mr-2">Adventure</span>
              <span className="font-black text-slate-900">&amp; Travels</span>
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Sreeragam Holidays is an innovative and customer-centric travel agency based in Kochi, Kerala, specializing in creating unique and personalized travel experiences. Our team is dedicated to making your dream vacation a reality by providing excellent customer service and customized travel packages at affordable prices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1: Trusted Travel Guide */}
              <div>
                <div className="relative text-[#D81B60] mb-3 inline-block">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500 absolute -top-1 right-1 z-10 border-2 border-white"></div>
                  <svg width="42" height="42" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5511 9.06618C37.5511 5.77106 34.8703 3.09027 31.5752 3.09027C28.2801 3.09027 25.5993 5.77106 25.5993 9.06618C25.5993 12.3613 28.2801 15.0421 31.5752 15.0421C34.8703 15.0421 37.5511 12.3613 37.5511 9.06618Z" fill="currentColor"/>
                    <path d="M50.2947 10.8487C49.0667 8.96556 46.5591 8.33461 44.586 9.41226L34.279 15.0416C33.3084 15.0416 16.1894 15.0416 15.1914 15.0416V1.49617C15.1914 0.671101 14.5225 0.00219727 13.6974 0.00219727H1.49398C0.668903 0.00219727 0 0.671101 0 1.49617V10.5596C0 11.3847 0.668903 12.0536 1.49398 12.0536H12.2033V49.5026C12.2033 50.3277 12.8722 50.9966 13.6973 50.9966C14.5224 50.9966 15.1913 50.3277 15.1913 49.5026V24.0054H24.1551V46.5147C24.1551 50.399 28.7646 52.4156 31.625 49.8526C34.4825 52.4131 39.0949 50.4048 39.0949 46.5147V23.3212L49.0299 16.8488C51.038 15.5407 51.6042 12.8565 50.2947 10.8487Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5">
                  Trusted Travel Guide
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Our experienced guides ensure your journey is safe, enjoyable, and truly unforgettable.
                </p>
              </div>

              {/* Feature 2: Personalized Trips */}
              <div>
                <div className="relative text-[#D81B60] mb-3 inline-block">
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500 absolute -top-1 right-1 z-10 border-2 border-white"></div>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 23.125V38.8281H38.8281V12.2656H34.1406" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.85938 12.2656H1.17188V38.8281H20V23.2031" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26.9598 9.14062H34.1406V34.1406H26.5035C23.5528 34.1406 20.933 36.0287 20 38.8281" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.0402 9.14062H5.85938V34.1406H13.4965C16.4472 34.1406 19.067 36.0287 20 38.8281" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 1.17188C14.6974 1.17188 11.3111 6.82758 13.8151 11.5017L20 23.0469L26.1849 11.5017C28.6889 6.82758 25.3027 1.17188 20 1.17188Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5">
                  Personalized Trips
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  We craft custom itineraries tailored to your unique travel desires and preferences.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
