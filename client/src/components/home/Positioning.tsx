import { motion } from "framer-motion";

export function Positioning() {
  return (
    <section id="quem-somos" className="py-24 md:py-40 bg-[#0b0c10] text-white border-y border-gray-900 relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#63c7ff]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[#ff4bd8]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Huge Impact Typography & Text */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-12 pr-0 lg:pr-8">
             <div className="relative">
               <div className="absolute -left-12 top-0 w-1 h-full bg-gradient-to-b from-[#63c7ff] via-[#ff4bd8] to-[#a1f65e] hidden lg:block opacity-50" />
               <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight uppercase leading-[1.2] text-white"
              >
                Acreditamos <br className="hidden md:block"/>
                no artista <br className="hidden md:block"/>
                antes do <br className="hidden md:block"/>
                <span className="text-[#a1f65e]">algoritmo.</span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8"
            >
              <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-4">
                A música começa na identidade.<br className="hidden md:block"/> Os números vêm depois.
              </p>
              <p className="text-lg md:text-xl text-gray-300 font-normal leading-relaxed text-justify">
                A IGAPÓ MUSIC é um selo de distribuição que coloca o artista no centro. Mais do que subir faixas, estruturamos trajetórias.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Spaced Text Blocks */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-12 lg:pl-12 mt-12 lg:mt-0">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l-2 border-[#ff4bd8] pl-6"
            >
              <p className="text-xl md:text-3xl text-white font-medium leading-relaxed mb-4">
                Distribuímos sua música nas principais plataformas de streaming. <br className="hidden md:block"/>
                <span className="text-[#63c7ff]">Desenvolvemos sua carreira com estratégia.</span>
              </p>
              <p className="text-base md:text-xl text-gray-400 font-normal leading-relaxed text-justify">
                <span className="font-semibold text-gray-200">Spotify, Apple Music, Deezer, YouTube, TikTok</span> e muito mais — com planejamento, transparência e visão de longo prazo.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-2xl text-gray-400 font-normal leading-relaxed text-justify">
                Na IGAPÓ MUSIC, cada lançamento é tratado como um projeto estratégico. Cada artista é acompanhado de perto. Cada passo é pensado para construir algo duradouro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff4bd8] via-[#63c7ff] to-[#a1f65e] tracking-tight">
                Distribuição é só o começo.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}