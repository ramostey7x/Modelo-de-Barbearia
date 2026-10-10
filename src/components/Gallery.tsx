import React, { useState, useEffect } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "../config/siteData";

export const Gallery: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
        );
      }
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-[#181818] border-t border-[#242424] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] text-[#B8955A] uppercase">
              <span className="w-5 h-[1px] bg-[#B8955A]" aria-hidden="true" />
              <span>Inspiração & Estética</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#F4F0E8] leading-tight">
              Galeria Visual
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#77736D] max-w-md">
            Referências visuais demonstrativas do padrão técnico de cortes, barboterapia e ambiente da barbearia contemporânea.
          </p>
        </div>

        {/* Asymmetrical Bento Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Item 1: Large Featured Landscape (col-span-8) */}
          <div
            onClick={() => setActiveImageIndex(0)}
            className="md:col-span-8 relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer aspect-[16/10] sm:aspect-[16/9] bg-[#111111]"
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#B8955A] uppercase tracking-wider block mb-1">
                  {GALLERY_ITEMS[0].category}
                </span>
                <h3 className="text-lg sm:text-xl font-serif-title font-bold text-[#F4F0E8]">
                  {GALLERY_ITEMS[0].title}
                </h3>
              </div>
              <span className="p-2 rounded-lg bg-black/60 text-[#F4F0E8] group-hover:text-[#B8955A] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Item 2: Vertical Portrait (col-span-4) */}
          <div
            onClick={() => setActiveImageIndex(2)}
            className="md:col-span-4 relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer aspect-[4/5] sm:aspect-[3/4] md:aspect-auto bg-[#111111]"
          >
            <img
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#B8955A] uppercase tracking-wider block mb-1">
                  {GALLERY_ITEMS[2].category}
                </span>
                <h3 className="text-lg font-serif-title font-bold text-[#F4F0E8]">
                  {GALLERY_ITEMS[2].title}
                </h3>
              </div>
              <span className="p-2 rounded-lg bg-black/60 text-[#F4F0E8] group-hover:text-[#B8955A] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Item 3: Square Detail (col-span-4) */}
          <div
            onClick={() => setActiveImageIndex(3)}
            className="md:col-span-4 relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer aspect-[4/3] bg-[#111111]"
          >
            <img
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#B8955A] uppercase tracking-wider block mb-1">
                  {GALLERY_ITEMS[3].category}
                </span>
                <h3 className="text-base font-serif-title font-bold text-[#F4F0E8]">
                  {GALLERY_ITEMS[3].title}
                </h3>
              </div>
              <span className="p-2 rounded-lg bg-black/60 text-[#F4F0E8] group-hover:text-[#B8955A] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Item 4: Tools Still Life (col-span-4) */}
          <div
            onClick={() => setActiveImageIndex(4)}
            className="md:col-span-4 relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer aspect-[4/3] bg-[#111111]"
          >
            <img
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#B8955A] uppercase tracking-wider block mb-1">
                  {GALLERY_ITEMS[4].category}
                </span>
                <h3 className="text-base font-serif-title font-bold text-[#F4F0E8]">
                  {GALLERY_ITEMS[4].title}
                </h3>
              </div>
              <span className="p-2 rounded-lg bg-black/60 text-[#F4F0E8] group-hover:text-[#B8955A] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Item 5: Barber Lounge (col-span-4) */}
          <div
            onClick={() => setActiveImageIndex(1)}
            className="md:col-span-4 relative rounded-xl overflow-hidden border border-white/10 group cursor-pointer aspect-[4/3] bg-[#111111]"
          >
            <img
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].alt}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#B8955A] uppercase tracking-wider block mb-1">
                  {GALLERY_ITEMS[1].category}
                </span>
                <h3 className="text-base font-serif-title font-bold text-[#F4F0E8]">
                  {GALLERY_ITEMS[1].title}
                </h3>
              </div>
              <span className="p-2 rounded-lg bg-black/60 text-[#F4F0E8] group-hover:text-[#B8955A] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Caption disclaimer */}
        <p className="mt-8 text-center text-xs text-[#77736D]">
          Todas as imagens exibidas são referências estéticas e fotográficas demonstrativas.
        </p>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            aria-label="Fechar foto ampliada"
            className="absolute top-6 right-6 p-2 text-[#F4F0E8] hover:text-[#B8955A] transition-colors rounded-full bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous / Next buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev === null ? null : (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
              );
            }}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-[#F4F0E8] hover:text-[#B8955A] transition-colors rounded-full bg-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((prev) =>
                prev === null ? null : (prev + 1) % GALLERY_ITEMS.length
              );
            }}
            aria-label="Próxima foto"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-[#F4F0E8] hover:text-[#B8955A] transition-colors rounded-full bg-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div
            className="max-w-4xl max-h-[85vh] p-2 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_ITEMS[activeImageIndex].image}
              alt={GALLERY_ITEMS[activeImageIndex].alt}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain border border-white/10 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-wider text-[#B8955A] font-mono">
                {GALLERY_ITEMS[activeImageIndex].category}
              </span>
              <p className="text-sm font-serif-title font-medium text-[#F4F0E8] mt-1">
                {GALLERY_ITEMS[activeImageIndex].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
