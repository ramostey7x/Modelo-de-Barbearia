import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_ITEMS } from "../config/siteData";

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#181818] border-t border-[#242424] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-[#B8955A] uppercase border border-[#B8955A]/30 rounded-full mb-4">
            Dúvidas Comuns
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#F4F0E8] leading-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#77736D] max-w-xl mx-auto">
            Tire suas principais dúvidas sobre nossos serviços, agendamento e política de atendimento.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "bg-[#111111] border-[#B8955A]/50 shadow-md"
                    : "bg-[#111111]/70 border-[#242424] hover:border-[#333333]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8955A] rounded-xl"
                >
                  <span className="text-base sm:text-lg font-serif-title font-medium text-[#F4F0E8] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#B8955A] bg-[#181818]" : "text-[#77736D] bg-[#181818]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 pt-1 text-sm text-[#77736D] leading-relaxed border-t border-[#242424]/60 animate-fade-in"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 p-6 rounded-xl bg-[#111111] border border-[#242424] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-serif-title font-bold text-[#F4F0E8]">
              Tem alguma outra pergunta específica?
            </h4>
            <p className="text-xs text-[#77736D]">
              Nossa equipe tira suas dúvidas diretamente pelo WhatsApp sem compromisso.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#B8955A] hover:bg-[#9E7D44] rounded-md transition-colors shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar Conosco</span>
          </button>
        </div>
      </div>
    </section>
  );
};
