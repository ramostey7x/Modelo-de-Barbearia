import React from "react";
import { Sparkles, Scissors, Clock, ShieldCheck } from "lucide-react";

export const SocialProofPhilosophy: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#181818] border-y border-[#242424] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Lockup */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest text-[#B8955A] uppercase border border-[#B8955A]/30 rounded-full mb-4">
            Filosofia de Atendimento
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#F4F0E8] leading-tight mb-6">
            Cada detalhe faz diferença.
          </h2>
          <p className="text-base sm:text-lg text-[#F4F0E8]/70 leading-relaxed font-light">
            Cuidar da própria imagem não precisa ser uma tarefa apressada. Na cadeira da barbearia, cada corte e cada linha de barba recebem o tempo e a atenção que você merece.
          </p>
        </div>

        {/* 3 Editorial Pillars of Craft */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pillar 1 */}
          <div className="flex flex-col p-8 rounded-xl bg-[#111111] border border-[#242424] hover:border-[#B8955A]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#B8955A]/30 flex items-center justify-center text-[#B8955A] mb-6">
              <Scissors className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-title font-bold text-[#F4F0E8] mb-3">
              Consultoria Individual
            </h3>
            <p className="text-sm text-[#77736D] leading-relaxed">
              Ouvimos o que você busca e sugerimos adequações técnicas que valorizam o caimento real do seu cabelo e a simetria facial.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col p-8 rounded-xl bg-[#111111] border border-[#242424] hover:border-[#B8955A]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#B8955A]/30 flex items-center justify-center text-[#B8955A] mb-6">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-title font-bold text-[#F4F0E8] mb-3">
              Pontualidade e Respeito
            </h3>
            <p className="text-sm text-[#77736D] leading-relaxed">
              Trabalhamos com agendamento organizado para que você chegue sabendo que seu momento na cadeira é exclusivo e sem esperas desnecessárias.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col p-8 rounded-xl bg-[#111111] border border-[#242424] hover:border-[#B8955A]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#B8955A]/30 flex items-center justify-center text-[#B8955A] mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif-title font-bold text-[#F4F0E8] mb-3">
              Higiene e Instrumental
            </h3>
            <p className="text-sm text-[#77736D] leading-relaxed">
              Lâminas descartáveis individuais, esterilização contínua de ferramentas e toalhas limpas para garantir o máximo em bem-estar e segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
