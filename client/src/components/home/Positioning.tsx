import { motion } from "framer-motion";

export function Positioning() {
  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-[#0b0c10] text-white border-y border-gray-900 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#63c7ff]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[#ff4bd8]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 pr-0 lg:pr-6">
             <div className="relative">
               <div className="absolute -left-8 top-0 w-[2px] h-full bg-gradient-to-b from-[#63c7ff] via-[#ff4bd8] to-[#a1f65e] hidden lg:block opacity-40" />
               <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight uppercase leading-[1.3] text-white"
              >
                Acreditamos <br className="hidden md:block"/>
                no artista <br className="hidden md:block"/>
                antes do <br className="hidden md:block"/>
                <span className="text-[#a1f65e]">algoritmo.</span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base md:text-lg text-white font-medium leading-relaxed mb-3">
                A música começa na identidade.<br className="hidden md:block"/> Os números vêm depois.
              </p>
              <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed text-justify">
                A IGAPÓ MUSIC é um selo de distribuição que coloca o artista no centro. Mais do que subir faixas, estruturamos trajetórias.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 lg:pl-8 mt-6 lg:mt-0">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l-2 border-[#ff4bd8] pl-5"
            >
              <p className="text-base md:text-lg text-white font-medium leading-relaxed mb-3">
                Distribuímos sua música nas principais plataformas de streaming. <br className="hidden md:block"/>
                <span className="text-[#63c7ff]">Desenvolvemos sua carreira com estratégia.</span>
              </p>
              <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed text-justify">
                <span className="font-medium text-gray-300">Spotify, Apple Music, Deezer, YouTube, TikTok</span> e muito mais — com planejamento, transparência e visão de longo prazo.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-sm md:text-base text-gray-400 font-normal leading-relaxed text-justify">
                Na IGAPÓ MUSIC, cada lançamento é tratado como um projeto estratégico. Cada artista é acompanhado de perto. Cada passo é pensado para construir algo duradouro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-2"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4bd8] via-[#63c7ff] to-[#a1f65e] tracking-tight">
                Distribuição é só o começo.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
