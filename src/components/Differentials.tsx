import React from "react";
import { DIFFERENTIALS } from "../config/siteData";

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] text-[#B8955A] uppercase">
              <span className="w-5 h-[1px] bg-[#B8955A]" aria-hidden="true" />
              <span>Padrão de Atendimento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#F4F0E8] leading-tight">
              A experiência da cadeira,<br />
              elevada aos detalhes.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#77736D] leading-relaxed">
              Não acreditamos em cortes padronizados ou atendimentos mecânicos. Nossa proposta se baseia em cinco pilares fundamentais de cuidado e consistência.
            </p>
          </div>
        </div>

        {/* Editorial Numbered List with dividers */}
        <div className="border-t border-[#242424]">
          {DIFFERENTIALS.map((item, index) => (
            <div
              key={item.number}
              className="py-8 sm:py-10 border-b border-[#242424] grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group hover:bg-[#181818]/50 transition-colors px-4 -mx-4 rounded-lg"
            >
              {/* Number Index */}
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="font-serif-title text-2xl sm:text-3xl font-bold text-[#B8955A] group-hover:scale-105 transition-transform inline-block">
                  {item.number}
                </span>
                <span className="w-8 h-[1px] bg-[#242424] group-hover:bg-[#B8955A]/50 transition-colors" />
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-[#F4F0E8] group-hover:text-[#B8955A] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-[#77736D] leading-relaxed group-hover:text-[#F4F0E8]/80 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
