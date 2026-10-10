import React, { useState } from "react";
import { X, MessageCircle, ExternalLink, ShieldCheck, ArrowRight } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppLink } from "../config/siteData";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  serviceName,
}) => {
  const [testNumber, setTestNumber] = useState("");
  const [testError, setTestError] = useState("");

  if (!isOpen) return null;

  const currentMessage = serviceName
    ? `Olá! Gostaria de consultar horários disponíveis para o serviço *${serviceName}* na Bravo Barber Club.`
    : SITE_CONFIG.defaultWhatsAppMessage;

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = testNumber.replace(/\D/g, "");
    if (clean.length < 10) {
      setTestError("Por favor, informe DDD + número (ex: 11999998888)");
      return;
    }
    setTestError("");
    const link = buildWhatsAppLink(clean, currentMessage);
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#181818] border border-[#B8955A]/30 rounded-xl p-6 sm:p-8 text-[#F4F0E8] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-5 right-5 text-[#77736D] hover:text-[#F4F0E8] transition-colors p-1 rounded-md focus:ring-1 focus:ring-[#B8955A]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Agency Tag */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#B8955A] tracking-wider uppercase mb-3">
          <ShieldCheck className="w-4 h-4 text-[#B8955A]" />
          <span>Projeto Demonstrativo · Agência {SITE_CONFIG.agency.name}</span>
        </div>

        <h3 id="modal-title" className="text-xl sm:text-2xl font-bold font-serif-title text-[#F4F0E8] mb-2">
          Agendamento Direto via WhatsApp
        </h3>

        <p className="text-sm text-[#77736D] leading-relaxed mb-5">
          Este site é uma demonstração de alta fidelidade desenvolvida para o segmento de barbearias.
          Em produção com um cliente real, este botão direciona imediatamente para o WhatsApp oficial com a mensagem pré-formatada abaixo.
        </p>

        {/* Preview of pre-filled text */}
        <div className="bg-[#111111] border border-[#242424] rounded-lg p-4 mb-6">
          <span className="text-xs uppercase tracking-wider text-[#77736D] block mb-1">
            Mensagem pré-configurada para o cliente:
          </span>
          <p className="text-sm text-[#F4F0E8] italic font-mono bg-[#1a1a1a] p-3 rounded border border-white/5">
            "{currentMessage}"
          </p>
        </div>

        {/* Test Simulator for the client / agency pitch */}
        <div className="border-t border-[#242424] pt-5">
          <span className="text-xs font-medium text-[#F4F0E8] block mb-2">
            Simulador Comercial: Teste a abertura no seu próprio WhatsApp
          </span>
          <form onSubmit={handleTestSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="tel"
                value={testNumber}
                onChange={(e) => {
                  setTestNumber(e.target.value);
                  if (testError) setTestError("");
                }}
                placeholder="Ex: 11 99999-8888"
                className="flex-1 bg-[#111111] border border-[#333333] focus:border-[#B8955A] text-[#F4F0E8] placeholder-[#77736D] text-sm px-4 py-2.5 rounded-lg outline-none transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B8955A] hover:bg-[#9E7D44] text-[#111111] text-sm font-semibold rounded-lg transition-colors shrink-0"
              >
                <span>Testar Link</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {testError && <p className="text-xs text-rose-400">{testError}</p>}
          </form>
        </div>

        {/* Modal footer action */}
        <div className="mt-6 pt-4 border-t border-[#242424] flex items-center justify-between text-xs text-[#77736D]">
          <span>Pronto para publicar em clientes reais</span>
          <button
            onClick={onClose}
            className="text-[#F4F0E8] hover:text-[#B8955A] transition-colors font-medium"
          >
            Entendido, fechar
          </button>
        </div>
      </div>
    </div>
  );
};
