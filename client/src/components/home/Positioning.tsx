import { motion } from "framer-motion";

export function Positioning() {
  return (
    <section id="quem-somos" className="py-24 md:py-32 bg-[#0b0c10] text-white border-y border-gray-900 relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#63c7ff]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[#ff4bd8]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-12 tracking-tight uppercase leading-tight text-white drop-shadow-md"
          >
            Acreditamos no artista <br className="hidden md:block"/> 
            <span className="text-[#a1f65e]">antes do algoritmo.</span>
          </motion.h2>

          <div className="space-y-8 text-lg md:text-2xl text-gray-300 font-medium leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A música começa na identidade. Os números vêm depois.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Na IGAPÓ MUSIC, cada lançamento é tratado como um projeto estratégico.
              Cada artista é acompanhado de perto.
              Cada passo é pensado para construir algo duradouro.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-4xl font-bold text-[#ff4bd8] mt-12 pt-12 border-t border-gray-800"
            >
              Distribuição é só o começo.
            </motion.p>
          </div>
          
        </div>
      </div>
    </section>
  );
}