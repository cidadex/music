import { motion } from "framer-motion";
import { Globe, Rocket, PieChart, TrendingUp } from "lucide-react";

export function Services() {
  const features = [
    {
      icon: <Globe className="w-16 h-16 sm:w-20 sm:h-20 text-[#ff4bd8] drop-shadow-[0_0_15px_rgba(255,75,216,0.3)]" strokeWidth={1.5} />,
      desc: (
        <span className="flex flex-col gap-2">
          <span className="font-bold text-white block mb-1">Distribuição Digital Completa</span>
          Colocamos sua música nas principais plataformas de streaming do mundo, com organização, agilidade e profissionalismo.
        </span>
      )
    },
    {
      icon: <Rocket className="w-16 h-16 sm:w-20 sm:h-20 text-[#ff4bd8] drop-shadow-[0_0_15px_rgba(255,75,216,0.3)]" strokeWidth={1.5} />,
      desc: (
        <span className="flex flex-col gap-2">
          <span className="font-bold text-white block mb-1">Planejamento de Lançamento</span>
          Estratégia antes, durante e depois do lançamento para maximizar alcance.
        </span>
      )
    },
    {
      icon: <PieChart className="w-16 h-16 sm:w-20 sm:h-20 text-[#ff4bd8] drop-shadow-[0_0_15px_rgba(255,75,216,0.3)]" strokeWidth={1.5} />,
      desc: (
        <span className="flex flex-col gap-2">
          <span className="font-bold text-white block mb-1">Gestão Transparente de Royalties</span>
          Relatórios claros, divisão simplificada e controle real sobre seus ganhos.
        </span>
      )
    },
    {
      icon: <TrendingUp className="w-16 h-16 sm:w-20 sm:h-20 text-[#ff4bd8] drop-shadow-[0_0_15px_rgba(255,75,216,0.3)]" strokeWidth={1.5} />,
      desc: (
        <span className="flex flex-col gap-2">
          <span className="font-bold text-white block mb-1">Desenvolvimento Artístico</span>
          Orientação estratégica para fortalecer posicionamento, marca e crescimento sustentável.
        </span>
      )
    }
  ];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-[#0b0c10] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-[#a1f65e]">O QUE FAZEMOS</h2>
          <h3 className="text-2xl md:text-4xl font-medium text-white tracking-tight">Estrutura completa para quem quer viver de música.</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-start group"
            >
              <div className="mb-8 h-20 flex items-center justify-start transform group-hover:scale-110 transition-transform duration-500 origin-left">
                {f.icon}
              </div>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium text-justify">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}