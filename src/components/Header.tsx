import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteData";

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Galeria", href: "#galeria" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#242424] py-3.5 shadow-lg shadow-black/40"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="BRAVO BARBER CLUB - Página Inicial"
          >
            {/* Elegant Monogram Emblem */}
            <div className="w-9 h-9 rounded-md bg-[#181818] border border-[#B8955A]/40 flex items-center justify-center text-[#B8955A] font-serif-title font-bold text-lg group-hover:border-[#B8955A] transition-colors">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title text-base sm:text-lg font-bold tracking-widest text-[#F4F0E8] uppercase group-hover:text-[#B8955A] transition-colors leading-none">
                {SITE_CONFIG.brandName}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean single-line prose) */}
          <nav
            aria-label="Navegação Principal"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#F4F0E8]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#B8955A] transition-colors whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B8955A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#111111] bg-[#B8955A] hover:bg-[#9E7D44] active:scale-[0.98] rounded-md transition-all duration-200 shadow-md shadow-[#B8955A]/10 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Agendar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="lg:hidden p-2 text-[#F4F0E8] hover:text-[#B8955A] transition-colors focus:ring-1 focus:ring-[#B8955A] rounded-md"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/90 backdrop-blur-md pt-24 px-6 pb-8 lg:hidden flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-4">
            <div className="border-b border-[#242424] pb-4 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#B8955A] font-semibold">
                Navegação
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-serif-title font-medium text-[#F4F0E8] hover:text-[#B8955A] transition-colors py-2 border-b border-[#242424]/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#242424] space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold tracking-wider uppercase text-[#111111] bg-[#B8955A] hover:bg-[#9E7D44] rounded-md transition-colors shadow-lg"
            >
              <span>Agendar pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-center text-[#77736D]">
              Bravo Barber Club · Projeto Demonstrativo AGON
            </p>
          </div>
        </div>
      )}
    </>
  );
};
