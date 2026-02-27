import { motion } from "framer-motion";

export function Cta() {
  return (
    <section className="py-24 md:py-32 bg-[#ff4bd8] text-white relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter uppercase drop-shadow-xl"
        >
          Sua música merece estar nas maiores plataformas.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold mb-16 text-[#0b0c10]"
        >
          Sua carreira merece estratégia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase mb-6 text-white/80">O próximo passo começa agora.</span>
          <a href="#contato" className="inline-block px-12 py-5 bg-[#a1f65e] text-[#0b0c10] font-black text-lg md:text-xl uppercase tracking-widest rounded-sm hover:scale-110 hover:bg-white transition-all shadow-[0_0_40px_rgba(161,246,94,0.6)] animate-pulse hover:animate-none">
            Fale conosco!
          </a>
        </motion.div>
      </div>
    </section>
  );
}