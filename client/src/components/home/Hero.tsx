import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with abstract noise/gradient instead of video for mockup */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Marquee Background Text */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden opacity-5 pointer-events-none select-none">
        <div className="whitespace-nowrap flex" style={{ width: '200%' }}>
          <div className="animate-[marquee_25s_linear_infinite] flex space-x-10 text-[10vw] font-display font-black leading-none uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px white' }}>
            <span>IGAPÓ MUSIC • DISTRIBUIÇÃO • LANÇAMENTOS •</span>
            <span>IGAPÓ MUSIC • DISTRIBUIÇÃO • LANÇAMENTOS •</span>
          </div>
        </div>
        <div className="whitespace-nowrap flex mt-4" style={{ width: '200%' }}>
          <div className="animate-[marquee_30s_linear_infinite_reverse] flex space-x-10 text-[10vw] font-display font-black leading-none uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px white' }}>
            <span>ESTRATÉGIA • CARREIRA • IGAPÓ MUSIC •</span>
            <span>ESTRATÉGIA • CARREIRA • IGAPÓ MUSIC •</span>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border mb-8 shadow-2xl"
        >
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(99,199,255,0.8)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,75,216,0.8)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,233,90,0.8)]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#8cff5a] shadow-[0_0_10px_rgba(140,255,90,0.8)]"></span>
          </div>
          <span className="text-sm font-medium tracking-wide ml-2 uppercase">Distribuição + estratégia</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black max-w-5xl tracking-tight leading-[1.1] mb-6"
        >
          Distribuímos sua música nas principais plataformas. <br />
          <span className="gradient-text italic font-bold">E desenvolvemos sua carreira.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-medium"
        >
          A IGAPÓ MUSIC trabalha com visão de longo prazo: identidade, planejamento de lançamento, 
          acompanhamento e transparência.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#contato" className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,75,216,0.3)]">
            Fale conosco
          </a>
          <Link href="/artists">
            <span className="px-8 py-4 rounded-lg bg-card border border-border text-foreground font-bold text-lg hover:bg-card/80 transition-colors cursor-pointer block text-center">
              Ver artistas
            </span>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-8 border-t border-border/50 w-full max-w-3xl flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base font-bold text-muted-foreground/60 uppercase tracking-widest"
        >
          <span>Spotify</span>
          <span>Apple Music</span>
          <span>Deezer</span>
          <span>YouTube</span>
          <span>TikTok</span>
        </motion.div>

        <motion.a 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          href="#servicos" 
          className="absolute bottom-10 animate-bounce flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
          <ChevronDown size={24} />
        </motion.a>
      </div>
    </section>
  );
}