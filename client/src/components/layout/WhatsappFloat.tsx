import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/5581982157661"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} className="fill-current" />
      <span className="absolute right-full mr-4 bg-white text-[#0b0c10] px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Fale conosco!
      </span>
    </a>
  );
}
