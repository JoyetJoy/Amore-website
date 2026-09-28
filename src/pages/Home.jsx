import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Compass, 
  Users, 
  Award, 
  Smile, 
  Globe 
} from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Home() {
  const services = [
    {
      title: "Customized Holiday Packages",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      items: [
        "Family Vacations",
        "Honeymoon Packages",
        "Solo Adventure Packages",
        "Group/College Tours"
      ]
    },
    {
      title: "International Tours",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      items: [
        "Adventure Destinations Across Continents",
        "Luxury and All-Inclusive Resort Packages",
        "City and Cultural Tours in Major Destinations"
      ]
    },
    {
      title: "Weekend Getaways",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      items: [
        "Quick and Affordable Weekend Packages",
        "Camping Trips and Bonfire Nights",
        "Short Adventure Escapes",
        "Wellness Retreats (Yoga & Spa)"
      ]
    },
    {
      title: "Luxury & Glamping Experiences",
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
      items: [
        "High-end Glamping Tents in Remote Destinations",
        "Personalized Itineraries for VIP Guests"
      ]
    },
    {
      title: "Wellness & Relaxation Retreats",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      items: [
        "Spa and Wellness Packages",
        "Yoga, Meditation, and Mindfulness Retreats",
        "Ayurvedic and Natural Therapy Experiences",
        "Beachside and Mountain Retreats"
      ]
    },
    {
      title: "Travel & Visa Assistance",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      items: [
        "Visa Processing Services",
        "Travel Insurance Assistance",
        "Flight and Accommodation Bookings",
        "Personalized Travel Concierge Services"
      ]
    }
  ];

  const stats = [
    { label: "Happy Travellers", count: "5489+", icon: Users },
    { label: "Positive Reviews", count: "99.9%", icon: Smile },
    { label: "Tours Completed", count: "190+", icon: Award },
    { label: "Global Destinations", count: "45+", icon: Globe }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white pt-24 pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=80"
            alt="Kerala Backwaters Travel"
            className="w-full h-full object-cover opacity-45 scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-pink-500 font-normal font-yes text-3xl md:text-4xl mb-4 tracking-normal">
              Explore the world
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase mb-6">
              TOUR TRAVEL & <br className="hidden sm:inline" />
              <span className="text-pink-500">ADVENTURE</span> CAMPING
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide mb-8 uppercase">
              EXPLORE THE WORLD AT YOUR FINGERTIPS
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/about-us"
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-pink-600/30 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Let's get started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about-us"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300"
              >
                <span>Who we are</span>
                <Compass className="w-5 h-5 text-pink-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Match Screenshot 1 Exact Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Main Image/Video + Overlaid Bottom-Left Badge + Torn Paper Banner */}
          <div className="relative pb-8 pl-4 pr-4">
            <div className="relative rounded-3xl overflow-hidden bg-black aspect-[16/11] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
                alt="Great Opportunity For Adventure"
                className="w-full h-full object-cover"
              />

              {/* Torn Paper Banner Overlay: "Enjoy Travel" */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <div className="relative bg-white px-8 py-3 shadow-2xl rounded-sm rotate-[-1deg] border border-gray-100">
                  <div className="absolute -top-1.5 inset-x-0 h-2 bg-[radial-gradient(circle,transparent_70%,#ffffff_70%)] bg-[length:12px_12px]"></div>
                  <span className="text-sky-500 font-yes text-3xl font-extrabold tracking-wide whitespace-nowrap block drop-shadow-sm">
                    Enjoy Travel
                  </span>
                  <div className="absolute -bottom-1.5 inset-x-0 h-2 bg-[radial-gradient(circle,transparent_70%,#ffffff_70%)] bg-[length:12px_12px]"></div>
                </div>
              </div>
            </div>

            {/* Bottom-Left Overlaid Thumbnail Image */}
            <div className="absolute -bottom-2 left-0 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-30">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80"
                alt="Valley Trail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Title, Paragraph, Icons, Link */}
          <div className="lg:pl-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
              Great Opportunity For <br />
              <span className="font-yes text-slate-400 font-normal text-4xl md:text-5xl capitalize mr-2">Adventure</span>
              <span className="font-black text-slate-900">&amp; Travels</span>
            </h2>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Sreeragam Holidays is an innovative and customer-centric online travel agency, specializing in creating unique and personalized travel experiences. Our team is dedicated to making your dream vacation a reality by providing excellent customer service and customized travel packages at affordable prices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              {/* Feature 1 */}
              <div>
                <div className="text-pink-600 mb-3">
                  <svg width="45" height="45" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.5511 9.06618C37.5511 5.77106 34.8703 3.09027 31.5752 3.09027C28.2801 3.09027 25.5993 5.77106 25.5993 9.06618C25.5993 12.3613 28.2801 15.0421 31.5752 15.0421C34.8703 15.0421 37.5511 12.3613 37.5511 9.06618ZM31.5752 12.0541C29.9277 12.0541 28.5873 10.7137 28.5873 9.06618C28.5873 7.41862 29.9277 6.07823 31.5752 6.07823C33.2228 6.07823 34.5632 7.41862 34.5632 9.06618C34.5632 10.7137 33.2228 12.0541 31.5752 12.0541Z" fill="currentColor"/>
                    <path d="M50.2947 10.8487C49.0667 8.96556 46.5591 8.33461 44.586 9.41226L34.279 15.0416C33.3084 15.0416 16.1894 15.0416 15.1914 15.0416V1.49617C15.1914 0.671101 14.5225 0.00219727 13.6974 0.00219727H1.49398C0.668903 0.00219727 0 0.671101 0 1.49617V10.5596C0 11.3847 0.668903 12.0536 1.49398 12.0536H12.2033V49.5026C12.2033 50.3277 12.8722 50.9966 13.6973 50.9966C14.5224 50.9966 15.1913 50.3277 15.1913 49.5026V24.0054H24.1551V46.5147C24.1551 50.399 28.7646 52.4156 31.625 49.8526C34.4825 52.4131 39.0949 50.4048 39.0949 46.5147V23.3212L49.0299 16.8488C51.038 15.5407 51.6042 12.8565 50.2947 10.8487ZM2.98795 9.06556V2.99005H12.2033V9.06556H2.98795ZM34.613 48.0086C33.7892 48.0086 33.119 47.3384 33.119 46.5146C33.119 45.3559 33.119 38.5353 33.119 37.4511C33.119 36.626 32.4501 35.9571 31.625 35.9571C30.7999 35.9571 30.131 36.626 30.131 37.4511V46.5146C30.131 47.3384 29.4608 48.0086 28.637 48.0086C27.8133 48.0086 27.1431 47.3384 27.1431 46.5146V32.9692H36.1069V46.5146C36.1069 47.3384 35.4367 48.0086 34.613 48.0086ZM47.399 14.3452L36.7854 21.2596C36.3622 21.5354 36.1069 22.0063 36.1069 22.5114V29.9812H27.1431V22.5114C27.1431 21.6863 26.4742 21.0174 25.6491 21.0174H15.1913V18.0294C35.5362 17.9654 34.7563 18.1854 35.3764 17.8467L46.0182 12.0346C46.6312 11.6997 47.4104 11.8957 47.7919 12.4809C48.1988 13.1046 48.0231 13.9387 47.399 14.3452Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5 hover:text-pink-600 transition-colors cursor-pointer">
                  Trusted Travel Guide
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Expert guides ensuring a safe, informative, and unforgettable journey.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="text-pink-600 mb-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 23.125V38.8281H38.8281V12.2656H34.1406" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.85938 12.2656H1.17188V38.8281H20V23.2031" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26.9598 9.14062H34.1406V34.1406H26.5035C23.5528 34.1406 20.933 36.0287 20 38.8281" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.0402 9.14062H5.85938V34.1406H13.4965C16.4472 34.1406 19.067 36.0287 20 38.8281" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 1.17188C14.6974 1.17188 11.3111 6.82758 13.8151 11.5017L20 23.0469L26.1849 11.5017C28.6889 6.82758 25.3027 1.17188 20 1.17188Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22.3438 8.20312C22.3438 9.4975 21.2944 10.5469 20 10.5469C18.7056 10.5469 17.6562 9.4975 17.6562 8.20312C17.6562 6.90875 18.7056 5.85937 20 5.85937C21.2944 5.85937 22.3438 6.90875 22.3438 8.20312Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base mb-1.5 hover:text-pink-600 transition-colors cursor-pointer">
                  Personalized Trips
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Customized itineraries tailored perfectly to your unique preferences.
                </p>
              </div>
            </div>

            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 text-pink-600 font-extrabold text-xs tracking-wider uppercase hover:text-pink-700 transition-colors"
            >
              <span>MORE ABOUT US</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-pink-600 font-yes text-3xl block mb-1">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                      {service.title}
                    </h3>
                    <ul className="space-y-2.5 text-sm text-gray-600">
                      {service.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Counter Section */}
      <CTASection />

      {/* Customer Reviews Section */}
      <section className="pt-8 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-pink-600 font-yes text-3xl block mb-1">Explore the world</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              What Our Happy Travelers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative">
              <div className="mb-6">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "Sreeragam Holidays arranged our Munnar & Alleppey trip flawlessly! The vehicle was immaculate, driver was extremely polite, and accommodation was top class. Highly recommended!"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 font-bold flex items-center justify-center text-lg shrink-0">
                  AF
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Anand &amp; Family</h4>
                  <span className="text-xs text-gray-500">Chennai • Kerala Tour</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative">
              <div className="mb-6">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "Best travel agency in Kochi! They customized our Bali honeymoon package within our budget without compromising on luxury resorts. Will definitely book again."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 font-bold flex items-center justify-center text-lg shrink-0">
                  RS
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Rahul &amp; Sneha</h4>
                  <span className="text-xs text-gray-500">Bangalore • Bali Honeymoon</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative">
              <div className="mb-6">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {"★".repeat(5)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "Exceptional 24/7 customer support throughout our Wayanad &amp; Coorg tour. Every small detail was taken care of seamlessly. Thank you Sreeragam Holidays!"
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-lg shrink-0">
                  PN
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Priya Nair</h4>
                  <span className="text-xs text-gray-500">Dubai • Wayanad Escapes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Adventure Section (Matching attached image) */}
      <section className="pt-6 pb-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Upper Row: Text & Train Street Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <div>
              <span className="text-pink-600 font-yes text-3xl md:text-4xl block mb-3">
                Explore the world
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
                Ready To Travel With Real <br className="hidden sm:inline" />
                Adventure &amp; Enjoy Natural
              </h2>
              <div className="flex items-center gap-5">
                {/* Pink Play Video Button */}
                <button 
                  onClick={() => window.open('https://www.youtube.com/watch?v=JXMWOmuR1hU', '_blank')}
                  className="w-14 h-14 rounded-full bg-[#D81B60] hover:bg-[#b0134b] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all shrink-0"
                  aria-label="Play Travel Video"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                {/* Contact Us Pill Button */}
                <Link
                  to="/contact-us"
                  className="px-8 py-3.5 rounded-full border border-slate-700 text-slate-900 font-bold text-sm hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column: Train Street Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80"
                alt="Scenic Train Street Destination"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Lower Pink Banner (Matching Image Bottom Banner) */}
          <div 
            className="bg-[#D81B60] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl"
            style={{
              backgroundImage: "url('/assets/images/page/bg-counter.png')",
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-20">
              <div className="flex items-center gap-6">
                {/* Mountain Icon Image */}
                <div className="shrink-0">
                  <img
                    src="/assets/images/page/ready.png"
                    alt="Ready Icon"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                    Ready To Adventure And Enjoy Nature?
                  </h3>
                  <p className="text-pink-100 text-xs md:text-sm font-medium max-w-xl">
                    Join Sreeragam Holidays For An Unforgettable Journey To The World's Most Breathtaking Destinations.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to="/contact-us"
                className="bg-white text-[#D81B60] hover:bg-gray-50 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all shrink-0 whitespace-nowrap"
              >
                LET'S GET STARTED
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

