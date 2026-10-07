import React, { useState, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import { GalleryItem } from '../types';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { gallery, lang, t } = useSchool();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Campus', 'Science & ICT', 'Sports', 'Events'];

  const filteredItems = gallery.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1.5">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>{t('विद्यालय तस्बिर ग्यालरी', 'Photo Gallery & Glimpses')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {t('विद्यालय जीवनका जीवन्त झलकहरू', 'Memories & Campus Moments')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1">
              {t('कक्षाकोठा, विज्ञान-कम्प्युटर प्रयोगशाला, खेलकुद तथा सांस्कृतिक कार्यक्रमका तस्बिरहरू।', 'Visual archives of academic sessions, sports meets, and cultural festivals.')}
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? t('सबै', 'All') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl overflow-hidden bg-slate-900 aspect-video sm:aspect-[4/3] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title[lang]}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                <div className="self-end">
                  <span className="p-2 rounded-lg bg-slate-950/60 text-white/90 group-hover:text-amber-400 backdrop-blur-sm transition-colors inline-block">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {item.title[lang]}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 animate-in fade-in select-none">
            {/* Top Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Image Container */}
            <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title[lang]}
                className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-4 text-white max-w-xl">
                <div className="text-xs text-amber-400 font-semibold mb-1">
                  {filteredItems[lightboxIndex].category} · {lightboxIndex + 1} / {filteredItems.length}
                </div>
                <h3 className="text-base sm:text-lg font-bold">
                  {filteredItems[lightboxIndex].title[lang]}
                </h3>
                {filteredItems[lightboxIndex].caption && (
                  <p className="text-xs text-slate-300 mt-1">
                    {filteredItems[lightboxIndex].caption}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
