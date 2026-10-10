import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

interface StickyMobileWhatsAppProps {
  onOpenBooking: () => void;
}

export const StickyMobileWhatsApp: React.FC<StickyMobileWhatsAppProps> = ({
  onOpenBooking,
}) => {
  return (
    <aside
      aria-label="Barra de agendamento rápido mobile"
      className="fixed bottom-0 left-0 right-0 z-30 p-3 sm:hidden bg-[#111111]/95 backdrop-blur-md border-t border-[#242424] shadow-2xl"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <button
          onClick={onOpenBooking}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#B8955A] active:bg-[#9E7D44] text-[#111111] font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Agendar no WhatsApp</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
