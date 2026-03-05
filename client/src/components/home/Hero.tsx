import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0c10]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          key="hero-video"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/50 via-transparent to-[#0b0c10]/80" />
      </div>

      {/* Modern Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      {/* Abstract Animated Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0.5, height: "100vh" }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#ff4bd8] to-transparent left-[20%]"
        />
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0.3, height: "100vh" }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#63c7ff] to-transparent left-[40%]"
        />
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 0.4, height: "100vh" }}
          transition={{ duration: 2, delay: 1.1, ease: "easeOut" }}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#a1f65e] to-transparent right-[30%]"
        />
      </div>

      {/* Marquee Background Text */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden opacity-10 pointer-events-none select-none mix-blend-overlay">
        <div className="whitespace-nowrap flex" style={{ width: '200%' }}>
          <div className="animate-[marquee_20s_linear_infinite] flex space-x-10 text-[12vw] font-black leading-none uppercase tracking-tighter text-white">
            <span>IGAPÓ MUSIC • DISTRIBUIÇÃO • LANÇAMENTOS •</span>
            <span>IGAPÓ MUSIC • DISTRIBUIÇÃO • LANÇAMENTOS •</span>
          </div>
        </div>
        <div className="whitespace-nowrap flex mt-4" style={{ width: '200%' }}>
          <div className="animate-[marquee_25s_linear_infinite_reverse] flex space-x-10 text-[12vw] font-black leading-none uppercase tracking-tighter text-white" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)', color: 'transparent' }}>
            <span>ESTRATÉGIA • CARREIRA • IGAPÓ MUSIC •</span>
            <span>ESTRATÉGIA • CARREIRA • IGAPÓ MUSIC •</span>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center justify-center text-center h-full mt-10">
        
        {/* Modern Abstract Typography instead of Logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff4bd8] via-[#63c7ff] to-[#a1f65e] tracking-tighter leading-none mb-6 drop-shadow-[0_0_40px_rgba(255,75,216,0.3)] filter">
            IGAPÓ
          </h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "anticipate" }}
            className="h-1 w-full bg-white/20 rounded-full mb-6 origin-left overflow-hidden relative"
          >
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-1/3 bg-white"
            />
          </motion.div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] uppercase text-white/90 font-sans">
            Music & Strategy
          </h2>
        </motion.div>

        {/* Floating Abstract Element */}
        <motion.div
           animate={{ 
             rotate: [0, 90, 180, 270, 360],
             borderRadius: ["20%", "30%", "50%", "30%", "20%"]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/4 right-10 md:right-32 w-20 h-20 md:w-32 md:h-32 border-2 border-[#63c7ff]/30 mix-blend-screen pointer-events-none hidden md:block"
        />
        <motion.div
           animate={{ 
             rotate: [360, 270, 180, 90, 0],
             borderRadius: ["50%", "30%", "20%", "30%", "50%"]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-1/4 left-10 md:left-32 w-16 h-16 md:w-24 md:h-24 border border-[#a1f65e]/40 mix-blend-screen pointer-events-none hidden md:block"
        />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-6 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => {
            const el = document.getElementById('servicos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/50 group-hover:text-white transition-colors">Scroll</span>
          <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative mt-1">
            <motion.div 
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#ff4bd8] to-[#ff4bd8] shadow-[0_0_10px_#ff4bd8]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}