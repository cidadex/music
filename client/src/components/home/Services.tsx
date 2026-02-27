import { motion } from "framer-motion";

export function Services() {
  const features = [
    {
      // A more solid, modern Play icon resembling the reference
      icon: (
        <svg viewBox="0 0 24 24" fill="#e91e63" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_15px_rgba(233,30,99,0.3)]">
          <path d="M8 5v14l11-7z" />
        </svg>
      ),
      desc: "Distribuição e monetização de áudio e vídeo em todas as plataformas digitais."
    },
    {
      // A composite icon for marketing/development resembling the reference
      icon: (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-[#e91e63] drop-shadow-[0_0_15px_rgba(233,30,99,0.3)]">
           <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 absolute top-0 left-0">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
           </svg>
           <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 absolute bottom-0 right-0">
             <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
             <path d="M12 15l1.45-3.55L17 10l-3.55-1.45L12 5l-1.45 3.55L7 10l3.55 1.45z"/>
           </svg>
        </div>
      ),
      desc: "Suporte em marketing e desenvolvimento artístico."
    },
    {
      // A solid Music Note icon resembling the reference
      icon: (
        <svg viewBox="0 0 24 24" fill="#e91e63" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_15px_rgba(233,30,99,0.3)]">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
      desc: "Divisão de royalties de forma prática e transparente."
    },
    {
      // A solid Volume/Speaker icon resembling the reference
      icon: (
        <svg viewBox="0 0 24 24" fill="#e91e63" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_15px_rgba(233,30,99,0.3)]">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      ),
      desc: "Atendimento personalizado com time altamente qualificado."
    }
  ];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#0b0c10] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6 text-[#63c7ff]">O que fazemos</h2>
          <h3 className="text-2xl md:text-4xl font-medium text-gray-300">Estrutura completa para quem quer viver de música.</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center max-w-7xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center group"
            >
              <div className="mb-8 h-24 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                {f.icon}
              </div>
              <p className="text-sm md:text-base text-gray-200 max-w-[260px] mx-auto leading-relaxed font-medium">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}