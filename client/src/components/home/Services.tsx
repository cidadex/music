import { motion } from "framer-motion";
import { Play, Heart, Music, Volume2 } from "lucide-react";

export function Services() {
  const features = [
    {
      icon: <Play size={48} className="text-[#ff4bd8]" fill="currentColor" />,
      desc: "Distribuição e monetização de áudio e vídeo em todas as plataformas digitais."
    },
    {
      icon: <Heart size={48} className="text-[#ff4bd8]" fill="currentColor" />,
      desc: "Suporte em marketing e desenvolvimento artístico."
    },
    {
      icon: <Music size={48} className="text-[#ff4bd8]" fill="currentColor" />,
      desc: "Divisão de royalties de forma prática e transparente."
    },
    {
      icon: <Volume2 size={48} className="text-[#ff4bd8]" fill="currentColor" />,
      desc: "Atendimento personalizado com time altamente qualificado."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-[#0b0c10] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">Potencializando carreiras musicais</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 h-16 flex items-center justify-center">
                {f.icon}
              </div>
              <p className="text-sm md:text-base text-gray-300 max-w-[250px] mx-auto leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}