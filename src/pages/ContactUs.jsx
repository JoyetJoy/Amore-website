import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Breadcrumb Header */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-950 to-indigo-950 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
          <nav className="flex justify-center items-center gap-2 text-sm text-gray-300">
            <Link to="/" className="hover:text-pink-400">Home</Link>
            <span>/</span>
            <span className="text-pink-400 font-semibold">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top 3 Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                Building No. 38/2996, Suite No. 24C, Second Floor, Fruitomans, Thripunithura Road, beside HDFC Bank, Edappally, Ernakulam, Kerala 682024, India
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Phone Numbers</h3>
              <div className="space-y-1 text-sm font-semibold">
                <p>
                  <a href="tel:+919895407174" className="text-gray-700 hover:text-pink-600 transition-colors">
                    +91 98954 07174
                  </a>
                </p>
                <p>
                  <a href="tel:+914844510548" className="text-gray-700 hover:text-pink-600 transition-colors">
                    Office: 0484 451 0548
                  </a>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Email Address</h3>
              <p className="text-sm font-semibold">
                <a href="mailto:booking.sreeragamholidays@gmail.com" className="text-gray-700 hover:text-pink-600 transition-colors break-all">
                  booking.sreeragamholidays@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Form and Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Get in touch & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Get in touch</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:booking.sreeragamholidays@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold text-gray-400">Email</p>
                      <p className="font-bold text-gray-800 text-sm">booking.sreeragamholidays@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/share/1Ca27otN2m/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 fill-current text-blue-600" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold text-gray-400">Facebook</p>
                      <p className="font-bold text-gray-800 text-sm">Sreeragam Holidays</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/_sreeragamholidays_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 fill-current text-pink-600" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold text-gray-400">Instagram</p>
                      <p className="font-bold text-gray-800 text-sm">@_sreeragamholidays_</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-md h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3929.04!2d76.9982464!3d8.5131264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d858fab0261%3A0x626c393413561802!2sHeiley%20Office360%20Edapally!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sreeragam Holidays Location"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Fill Up The Form</h2>
              <p className="text-gray-500 text-sm mb-8">
                Your email address will not be published. Required fields are marked *
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-lg">Message Sent Successfully!</h4>
                  <p className="text-sm text-emerald-700">
                    Thank you for reaching out. The Sreeragam Holidays team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows="5"
                      required
                      placeholder="Enter your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-600/30 flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get In Touch</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
