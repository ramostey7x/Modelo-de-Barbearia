import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SocialProofPhilosophy } from "./components/SocialProofPhilosophy";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Differentials } from "./components/Differentials";
import { Gallery } from "./components/Gallery";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { StickyMobileWhatsApp } from "./components/StickyMobileWhatsApp";
import { WhatsAppModal } from "./components/WhatsAppModal";
import { SITE_CONFIG, buildWhatsAppLink } from "./config/siteData";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleBooking = (serviceName?: string) => {
    // If a real WhatsApp number is configured in SITE_CONFIG:
    if (SITE_CONFIG.whatsappNumber && SITE_CONFIG.whatsappNumber.trim() !== "") {
      const message = serviceName
        ? `Olá! Gostaria de consultar os horários disponíveis para o serviço *${serviceName}* na Bravo Barber Club.`
        : SITE_CONFIG.defaultWhatsAppMessage;
      const link = buildWhatsAppLink(SITE_CONFIG.whatsappNumber, message);
      if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
        return;
      }
    }

    // Otherwise, open the transparent agency demonstration modal:
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F4F0E8] font-sans selection:bg-[#B8955A]/30 selection:text-[#F4F0E8]">
      {/* Navigation Header */}
      <Header onOpenBooking={handleBooking} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenBooking={handleBooking} />
        <SocialProofPhilosophy />
        <About onOpenBooking={() => handleBooking()} />
        <Services onSelectService={handleBooking} />
        <Differentials />
        <Gallery />
        <HowItWorks onOpenBooking={() => handleBooking()} />
        <FAQ onOpenBooking={() => handleBooking()} />
        <FinalCTA onOpenBooking={() => handleBooking()} />
        <ContactSection onOpenBooking={() => handleBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky WhatsApp Action */}
      <StickyMobileWhatsApp onOpenBooking={() => handleBooking()} />

      {/* Commercial Demo / Direct WhatsApp Dialog */}
      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService}
      />
    </div>
  );
}
