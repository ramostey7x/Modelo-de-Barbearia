import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteData";

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Asset (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]">
              <img
                src="/images/barber-interior.jpg"
                alt="Ambiente sofisticado da barbearia com iluminação acolhedora e cadeiras de couro"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <span className="text-xs font-serif-title font-medium text-[#F4F0E8]">
                  Ambiente Contemporâneo & Exclusivo
                </span>
                <span className="text-[11px] font-mono text-[#B8955A] uppercase tracking-wider">
                  Espaço & Design
                </span>
              </div>
            </div>

            {/* Subtle hairline detail */}
            <div
              className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#B8955A]/50 pointer-events-none hidden sm:block"
              aria-hidden="true"
            />
          </div>

          {/* Text Editorial (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-[0.2em] text-[#B8955A] uppercase">
              <span className="w-5 h-[1px] bg-[#B8955A]" aria-hidden="true" />
              <span>Conceito & Posicionamento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#F4F0E8] leading-tight mb-6 text-balance">
              Mais do que cortar.<br />
              <span className="text-[#B8955A]">É sobre presença.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#F4F0E8]/75 leading-relaxed font-light mb-8">
              <p>
                Uma boa barbearia entende que estilo não é apenas aparência. É encontrar o corte que combina com você, cuidar dos detalhes e sair da cadeira sentindo que fez a escolha certa.
              </p>
              <p className="text-sm sm:text-base text-[#77736D] leading-relaxed">
                Aqui, cada atendimento combina técnica apurada, produtos de alta performance e um ambiente estruturado para ser uma pausa produtiva e confortável na sua rotina. Do degradê mais complexo ao corte clássico na tesoura, tudo é executado com critério.
              </p>
            </div>

            {/* Quick Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#242424] mb-8">
              <div className="flex items-start gap-3">
                <span className="text-[#B8955A] font-serif-title font-bold text-base leading-none">
                  ✓
                </span>
                <span className="text-sm text-[#F4F0E8]">
                  Atendimento com hora marcada e sem pressa
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#B8955A] font-serif-title font-bold text-base leading-none">
                  ✓
                </span>
                <span className="text-sm text-[#F4F0E8]">
                  Navalha descartável e lâminas novas a cada cliente
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#B8955A] font-serif-title font-bold text-base leading-none">
                  ✓
                </span>
                <span className="text-sm text-[#F4F0E8]">
                  Produtos profissionais de finalização e barba
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#B8955A] font-serif-title font-bold text-base leading-none">
                  ✓
                </span>
                <span className="text-sm text-[#F4F0E8]">
                  Ambiente climatizado e confortável
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#111111] bg-[#B8955A] hover:bg-[#9E7D44] rounded-md transition-colors shadow-md shadow-[#B8955A]/10 cursor-pointer"
              >
                <span>Conversar pelo WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
