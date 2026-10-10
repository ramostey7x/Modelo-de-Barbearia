import React from "react";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "../config/siteData";

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector("#servicos");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#111111]"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#B8955A]/5 rounded-full blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle Brand Kicker */}
            <div className="flex items-center gap-2.5 mb-6 text-xs font-semibold tracking-[0.2em] text-[#B8955A] uppercase">
              <span className="w-6 h-[1px] bg-[#B8955A]" aria-hidden="true" />
              <span>Barbearia Masculina Premium</span>
              <span className="text-[#77736D]" aria-hidden="true">·</span>
              <span className="text-[#77736D] font-normal normal-case tracking-normal">
                Atendimento com hora marcada
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif-title font-bold text-[#F4F0E8] leading-[1.08] tracking-tight mb-6 text-balance">
              SEU ESTILO.<br />
              <span className="text-[#B8955A]">SEM IMPROVISO.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#F4F0E8]/75 leading-relaxed max-w-2xl mb-8 font-light">
              Cortes precisos, barba bem cuidada e atenção aos detalhes para você sair com a aparência em dia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#111111] bg-[#B8955A] hover:bg-[#9E7D44] active:scale-[0.98] rounded-md transition-all duration-200 shadow-xl shadow-[#B8955A]/15 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#servicos"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#F4F0E8] hover:text-[#B8955A] bg-[#242424]/60 hover:bg-[#242424] border border-white/10 hover:border-[#B8955A]/40 rounded-md transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>Conhecer os Serviços</span>
              </a>
            </div>

            {/* Editorial Value Indicators (No fake stats, only qualitative crafts) */}
            <div className="pt-8 border-t border-[#242424] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xs font-semibold text-[#B8955A] uppercase tracking-wider mb-1">
                  Precisão
                </span>
                <span className="text-xs sm:text-sm text-[#77736D]">
                  Design alinhado ao seu perfil
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#B8955A] uppercase tracking-wider mb-1">
                  Tradição
                </span>
                <span className="text-xs sm:text-sm text-[#77736D]">
                  Navalha & toalha quente
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold text-[#B8955A] uppercase tracking-wider mb-1">
                  Conforto
                </span>
                <span className="text-xs sm:text-sm text-[#77736D]">
                  Ambiente exclusivo e pontual
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] group">
              <img
                src="/images/hero-barber.jpg"
                alt="Mestre barbeiro realizando acabamento com tesoura em cadeira clássica na Bravo Barber Club"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              
              {/* Subtle gradient vignette */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-serif-title font-bold text-[#F4F0E8] block">
                    Excelência na Cadeira
                  </span>
                  <span className="text-[11px] text-[#77736D]">
                    Acabamento com tesoura & navalha clássica
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#B8955A] tracking-wider uppercase">
                  Bravo Barber
                </span>
              </div>
            </div>

            {/* Decorative antique gold corner marker */}
            <div
              className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#B8955A]/60 pointer-events-none hidden sm:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
