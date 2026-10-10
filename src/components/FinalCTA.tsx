import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "../config/siteData";

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-28 lg:py-36 bg-[#111111] border-t border-[#242424] overflow-hidden text-center">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,149,90,0.12)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-[0.25em] text-[#B8955A] uppercase">
          <span className="w-6 h-[1px] bg-[#B8955A]" aria-hidden="true" />
          <span>Agendamento Direto</span>
          <span className="w-6 h-[1px] bg-[#B8955A]" aria-hidden="true" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-title font-bold text-[#F4F0E8] leading-[1.1] mb-6 text-balance">
          Seu estilo merece atenção.
        </h2>

        <p className="text-base sm:text-xl text-[#F4F0E8]/75 leading-relaxed font-light max-w-2xl mx-auto mb-10">
          Conheça os serviços e converse com a barbearia para encontrar a melhor opção para você.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#111111] bg-[#B8955A] hover:bg-[#9E7D44] active:scale-[0.98] rounded-md transition-all shadow-xl shadow-[#B8955A]/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#111111]" />
            <span>Falar pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <p className="mt-6 text-xs text-[#77736D]">
          Horários confirmados diretamente com a barbearia · Sem cadastro prévio
        </p>
      </div>
    </section>
  );
};
