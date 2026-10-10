import React from "react";
import { ArrowUp, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "../config/siteData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Galeria", href: "#galeria" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-[#111111] border-t border-[#242424] pt-16 pb-24 lg:pb-16 text-[#F4F0E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#242424]">
          {/* Brand & Concept (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-[#181818] border border-[#B8955A]/50 flex items-center justify-center text-[#B8955A] font-serif-title font-bold text-base">
                  B
                </div>
                <span className="font-serif-title text-xl font-bold tracking-wider text-[#F4F0E8] uppercase">
                  {SITE_CONFIG.brandName}
                </span>
              </div>
              <p className="text-sm text-[#77736D] leading-relaxed max-w-md font-light mb-6">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Commercial Demo Badge */}
            <div className="inline-flex items-center gap-2 text-xs text-[#B8955A] font-mono bg-[#181818] border border-[#B8955A]/20 px-3 py-1.5 rounded-md max-w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Demonstração comercial desenvolvida por {SITE_CONFIG.agency.name}</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B8955A] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#77736D]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F4F0E8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency & Architecture info (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B8955A] mb-4">
                Estrutura do Projeto
              </h4>
              <p className="text-xs text-[#77736D] leading-relaxed mb-4">
                Site institucional estático de alta conversão, otimizado para carregamento instantâneo, compatível com Vercel e GitHub, sem dependência de banco de dados ou backend complexo.
              </p>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-[#77736D] hover:text-[#B8955A] transition-colors"
                aria-label="Voltar ao topo da página"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#77736D] gap-4">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. Todos os direitos reservados.
          </p>
          <p className="text-[11px]">
            Design & Tecnologia por{" "}
            <span className="text-[#F4F0E8] font-semibold">{SITE_CONFIG.agency.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
