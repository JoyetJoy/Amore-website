import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Camera, Eye } from 'lucide-react';
import CTASection from '../components/CTASection';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Kerala Backwaters', 'Mountains & Tea Gardens', 'Beaches', 'Culture'];

  const photos = [
    {
      id: 1,
      title: "Munnar Tea Gardens",
      category: "Mountains & Tea Gardens",
      url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Alleppey Houseboat Cruise",
      category: "Kerala Backwaters",
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Varkala Beach Sunset",
      category: "Beaches",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Kochi Kathakali & Heritage",
      category: "Culture",
      url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Wayanad Forest Trekking",
      category: "Mountains & Tea Gardens",
      url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Kumarakom Lagoon Resort",
      category: "Kerala Backwaters",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Breadcrumb Header */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-950 to-indigo-950 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Our Gallery</h1>
          <nav className="flex justify-center items-center gap-2 text-sm text-gray-300">
            <Link to="/" className="hover:text-pink-400">Home</Link>
            <span>/</span>
            <span className="text-pink-400 font-semibold">Our Gallery</span>
          </nav>
        </div>
      </section>

      {/* Gallery Main Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-pink-600 font-yes text-3xl block mb-1">Moments</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Photo Gallery</h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-600/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setLightboxImage(photo)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 cursor-pointer h-72"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-pink-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-white font-bold text-lg flex items-center justify-between">
                    <span>{photo.title}</span>
                    <Eye className="w-5 h-5 text-white/80" />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-transparent text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="max-h-[80vh] w-auto mx-auto rounded-2xl shadow-2xl object-contain border border-white/20"
            />
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{lightboxImage.title}</h3>
              <p className="text-pink-400 text-sm mt-1">{lightboxImage.category}</p>
            </div>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 text-3xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
