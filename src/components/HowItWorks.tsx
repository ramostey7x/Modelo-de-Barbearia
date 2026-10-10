import React from "react";
import { MessageSquare, CalendarClock, Scissors, CheckCircle, ArrowUpRight } from "lucide-react";
import { HOW_IT_WORKS } from "../config/siteData";

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-[#B8955A]" />,
    <Scissors className="w-5 h-5 text-[#B8955A]" />,
    <CalendarClock className="w-5 h-5 text-[#B8955A]" />,
    <CheckCircle className="w-5 h-5 text-[#B8955A]" />,
  ];

  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-[#B8955A] uppercase border border-[#B8955A]/30 rounded-full mb-4">
            Passo a Passo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#F4F0E8] leading-tight mb-5">
            Como agendar seu horário
          </h2>
          <p className="text-base sm:text-lg text-[#F4F0E8]/70 leading-relaxed font-light">
            Sem burocracias, formulários demorados ou cadastros. Toda a comunicação e alinhamento de agenda acontecem diretamente pelo WhatsApp.
          </p>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOW_IT_WORKS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-7 rounded-xl bg-[#181818] border border-[#242424] hover:border-[#B8955A]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#111111] border border-[#B8955A]/30 flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#B8955A] tracking-widest">
                    ETAPA {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-serif-title font-bold text-[#F4F0E8] mb-3 group-hover:text-[#B8955A] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#77736D] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-[#242424] flex items-center justify-between text-[11px] text-[#77736D]">
                <span>Processo 100% humanizado</span>
                <span className="text-[#B8955A]">WhatsApp</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#111111] bg-[#B8955A] hover:bg-[#9E7D44] active:scale-[0.98] rounded-md transition-all shadow-lg shadow-[#B8955A]/10 cursor-pointer"
          >
            <span>Iniciar Contato pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
