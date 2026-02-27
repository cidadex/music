import { motion } from "framer-motion";
import logoUrl from "@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_1772211384696.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#ff4bd8]">
      {/* Solid pink to dark gradient to match the Potência reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff4bd8] via-[#e53bc0] to-[#0b0c10]"></div>

      {/* Marquee Background Text (Requested by user) */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden opacity-30 pointer-events-none select-none mix-blend-overlay">
        <div className="whitespace-nowrap flex" style={{ width: '200%' }}>
          <div className="animate-[marquee_20s_linear_infinite] flex space-x-10 text-[12vw] font-black leading-none uppercase tracking-tighter text-white">
            <span>IGAPÓ MUSIC • DISTRIBUIÇÃO • LANÇAMENTOS •</span>
            <span>IGAPÓ MUSIC • DISTRIBUIÇÃO • LANÇAMENTOS •</span>
          </div>
        </div>
        <div className="whitespace-nowrap flex mt-4" style={{ width: '200%' }}>
          <div className="animate-[marquee_25s_linear_infinite_reverse] flex space-x-10 text-[12vw] font-black leading-none uppercase tracking-tighter text-white">
            <span>ESTRATÉGIA • CARREIRA • IGAPÓ MUSIC •</span>
            <span>ESTRATÉGIA • CARREIRA • IGAPÓ MUSIC •</span>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center justify-center text-center h-full">
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={logoUrl} 
          alt="IGAPÓ MUSIC" 
          className="w-full max-w-sm md:max-w-lg lg:max-w-xl object-contain mix-blend-lighten drop-shadow-2xl" 
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/70"
        >
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
}