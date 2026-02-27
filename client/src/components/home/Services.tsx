import { motion } from "framer-motion";
import { Play, Music, Sparkles, Disc } from "lucide-react";

export function Services() {
  const features = [
    {
      icon: <Play size={32} className="text-primary" />,
      title: "Distribuição digital",
      desc: "Entrega da sua música nas principais plataformas com organização e consistência.",
      color: "border-primary/50 group-hover:border-primary shadow-primary/20",
      bg: "bg-primary/10"
    },
    {
      icon: <Music size={32} className="text-secondary" />,
      title: "Planejamento de lançamento",
      desc: "Estratégia por etapa: cronograma, assets, narrativa e execução.",
      color: "border-secondary/50 group-hover:border-secondary shadow-secondary/20",
      bg: "bg-secondary/10"
    },
    {
      icon: <Sparkles size={32} className="text-accent" />,
      title: "Royalties transparentes",
      desc: "Gestão clara, acompanhamento e visão de performance sem mistério.",
      color: "border-accent/50 group-hover:border-accent shadow-accent/20",
      bg: "bg-accent/10"
    },
    {
      icon: <Disc size={32} className="text-[#8cff5a]" />,
      title: "Desenvolvimento artístico",
      desc: "Direção de carreira e construção de presença com identidade.",
      color: "border-[#8cff5a]/50 group-hover:border-[#8cff5a] shadow-[#8cff5a]/20",
      bg: "bg-[#8cff5a]/10"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-card relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Potencializando carreiras musicais</h2>
          <p className="text-xl text-muted-foreground">
            Acreditamos no artista antes do algoritmo. Na IGAPÓ MUSIC, cada lançamento é tratado como um projeto estratégico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group bg-background rounded-2xl p-8 border ${f.color} hover:shadow-[0_0_30px_var(--tw-shadow-color)] transition-all duration-300 relative overflow-hidden`}
            >
              <div className={`w-16 h-16 rounded-xl ${f.bg} flex items-center justify-center mb-6`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
              
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {f.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}