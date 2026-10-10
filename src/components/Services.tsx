import React from "react";
import { ArrowUpRight, Scissors, Sparkles, UserCheck } from "lucide-react";
import { SERVICES, ServiceItem } from "../config/siteData";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-[#181818] border-t border-[#242424] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] text-[#B8955A] uppercase">
            <span className="w-5 h-[1px] bg-[#B8955A]" aria-hidden="true" />
            <span>Cardápio de Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#F4F0E8] leading-tight mb-5">
            Seu próximo corte começa aqui.
          </h2>
          <p className="text-base sm:text-lg text-[#F4F0E8]/70 leading-relaxed font-light">
            Serviços focados na estética masculina, executados com paciência e precisão. Escolha o serviço desejado e consulte disponibilidade diretamente pelo WhatsApp.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between p-7 sm:p-8 rounded-xl bg-[#111111] border transition-all duration-300 group ${
                service.highlight
                  ? "border-[#B8955A]/50 shadow-xl shadow-black/40 hover:border-[#B8955A]"
                  : "border-[#242424] hover:border-[#B8955A]/40"
              }`}
            >
              {/* Highlight Tag */}
              {service.highlight && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 bg-[#B8955A] text-[#111111] text-[11px] font-bold tracking-wider uppercase rounded-full shadow-sm">
                  Mais Procurado
                </div>
              )}

              <div>
                {/* Category & Index */}
                <div className="flex items-center justify-between text-xs text-[#77736D] mb-4">
                  <span className="uppercase tracking-wider font-semibold text-[#B8955A]">
                    {service.category}
                  </span>
                  <span className="font-mono text-[11px]">0{index + 1}</span>
                </div>

                {/* Service Name */}
                <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-[#F4F0E8] mb-3 group-hover:text-[#B8955A] transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#F4F0E8]/75 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Concrete Benefit */}
                <div className="p-3 rounded-lg bg-[#181818] border border-white/5 mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B8955A] block mb-1">
                    Finalidade & Benefício
                  </span>
                  <p className="text-xs text-[#77736D] leading-normal">
                    {service.benefit}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#242424] flex items-center justify-between">
                <span className="text-xs text-[#77736D]">
                  Agendamento via WhatsApp
                </span>
                <button
                  type="button"
                  onClick={() => onSelectService(service.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B8955A] group-hover:text-[#F4F0E8] group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  <span>Consultar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note below services */}
        <div className="mt-12 p-6 rounded-xl bg-[#111111] border border-[#242424] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-[#77736D]">
            <strong className="text-[#F4F0E8] font-medium block sm:inline mr-2">
              Dúvidas sobre o melhor corte para você?
            </strong>
            Envie referências ou tire dúvidas com o barbeiro pelo WhatsApp antes de marcar.
          </div>
          <button
            onClick={() => onSelectService("Consultoria Geral")}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#B8955A] hover:bg-[#9E7D44] rounded-md transition-colors shrink-0 cursor-pointer"
          >
            Tirar Dúvida no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};
