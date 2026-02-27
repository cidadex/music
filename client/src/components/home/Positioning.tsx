import { motion } from "framer-motion";

export function Positioning() {
  return (
    <section id="quem-somos" className="py-24 md:py-40 bg-[#0b0c10] text-white border-y border-gray-900 relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#63c7ff]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[#ff4bd8]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Huge Impact Typography */}
          <div className="lg:col-span-6 relative pr-0 lg:pr-8">
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

          {/* Right Column: Spaced Text Blocks */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-12 pl-0 lg:pl-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl md:text-3xl font-bold text-[#63c7ff] mb-4 uppercase tracking-widest">A fundação</h3>
              <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                A música começa na identidade. Os números vêm depois.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pl-0 lg:pl-12 border-l-0 lg:border-l border-gray-800"
            >
               <h3 className="text-xl md:text-3xl font-bold text-[#ff4bd8] mb-4 uppercase tracking-widest">O processo</h3>
              <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
                Na IGAPÓ MUSIC, cada lançamento é tratado como um projeto estratégico.
                Cada artista é acompanhado de perto.
                Cada passo é pensado para construir algo duradouro.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <p className="text-2xl md:text-4xl font-black text-white italic tracking-tight">
                "Distribuição é só o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4bd8] to-[#63c7ff]">começo.</span>"
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}