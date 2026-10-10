import React from "react";
import { MessageCircle, MapPin, Clock, Instagram, Mail, Phone, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteData";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#181818] border-t border-[#242424] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & WhatsApp CTA (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-[0.2em] text-[#B8955A] uppercase">
              <span className="w-5 h-[1px] bg-[#B8955A]" aria-hidden="true" />
              <span>Canais de Atendimento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#F4F0E8] leading-tight mb-6">
              Entre em contato direto com a barbearia
            </h2>

            <p className="text-base sm:text-lg text-[#F4F0E8]/75 leading-relaxed font-light mb-8">
              Para consultar disponibilidades, tirar dúvidas sobre cortes específicos ou agendar seu horário, o canal oficial e prioritário é o WhatsApp.
            </p>

            <div className="p-6 rounded-xl bg-[#111111] border border-[#242424] mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#181818] border border-[#B8955A]/30 flex items-center justify-center text-[#B8955A] shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif-title font-bold text-[#F4F0E8] mb-1">
                    Atendimento via WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-[#77736D] leading-relaxed mb-4">
                    Tire dúvidas sobre serviços, envie referências de corte e combine o melhor dia e horário para a sua visita.
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#B8955A] hover:bg-[#9E7D44] rounded-md transition-colors cursor-pointer"
                  >
                    <span>Iniciar Conversa</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information card with honest placeholders (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-xl bg-[#111111] border border-[#242424]">
            <h3 className="text-lg font-serif-title font-bold text-[#F4F0E8] pb-4 mb-6 border-b border-[#242424]">
              Informações da Unidade
            </h3>

            <div className="space-y-6">
              {/* Horários */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-[#181818] text-[#B8955A] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#F4F0E8] uppercase tracking-wider block mb-1">
                    Horário de Funcionamento
                  </span>
                  <p className="text-xs text-[#77736D]">
                    {SITE_CONFIG.openingHoursDisplay}
                  </p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-[#181818] text-[#B8955A] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#F4F0E8] uppercase tracking-wider block mb-1">
                    Localização & Endereço
                  </span>
                  <p className="text-xs text-[#77736D]">
                    {SITE_CONFIG.addressDisplay}
                  </p>
                  <span className="text-[11px] text-[#77736D]/70 italic mt-0.5 block">
                    (Definido na personalização do cliente real)
                  </span>
                </div>
              </div>

              {/* Telefone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-[#181818] text-[#B8955A] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#F4F0E8] uppercase tracking-wider block mb-1">
                    Contato Telefônico
                  </span>
                  <p className="text-xs text-[#77736D]">
                    {SITE_CONFIG.phoneDisplay}
                  </p>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded bg-[#181818] text-[#B8955A] shrink-0 mt-0.5">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#F4F0E8] uppercase tracking-wider block mb-1">
                    Instagram Oficial
                  </span>
                  <p className="text-xs text-[#77736D]">
                    {SITE_CONFIG.instagramHandle}
                  </p>
                </div>
              </div>
            </div>

            {/* Commercial Demo Disclaimer */}
            <div className="mt-8 pt-6 border-t border-[#242424] text-[11px] text-[#77736D] leading-relaxed">
              <strong className="text-[#B8955A] font-semibold block mb-1">
                Estrutura Demonstrativa AGON:
              </strong>
              Todos os campos acima estão centralizados no arquivo de configurações do projeto para substituição rápida pelos dados cadastrais da barbearia contratante.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
