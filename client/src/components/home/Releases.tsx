import { Play } from "lucide-react";
import { ARTISTS } from "@/data/artists";

export function Releases() {
  return (
    <section id="novidades" className="py-24 md:py-32 bg-[#0b0c10] text-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Latest Releases */}
          <div className="flex flex-col h-full">
            <h3 className="text-4xl md:text-6xl font-black mb-12 text-[#63c7ff] tracking-tight uppercase leading-none drop-shadow-md">
              Últimos<br/>Lançamentos
            </h3>
            
            <div className="flex flex-col gap-6">
              <button className="self-start flex items-center justify-center gap-2 px-8 py-3 md:py-4 bg-[#8cff5a] text-[#0b0c10] text-sm md:text-base font-black uppercase tracking-widest hover:bg-[#a1f65e] hover:scale-105 transition-all shadow-[0_0_20px_rgba(140,255,90,0.4)]">
                <Play size={18} fill="currentColor" /> Play
              </button>
              
              <div className="w-full aspect-square md:aspect-[4/4] bg-[#111] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800/50 relative group rounded-sm mt-4">
                <img 
                  src={ARTISTS[0].image} 
                  alt="Release Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" 
                />
                
                {/* Album Cover Styling specific to match the reference look */}
                <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none p-6">
                   <h4 className="text-4xl md:text-6xl lg:text-7xl font-serif italic font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-center leading-none">
                     {ARTISTS[0].latestRelease.split(' ').map((word, i) => (
                       <span key={i} className="block">{word}</span>
                     ))}
                   </h4>
                   <div className="absolute bottom-10 w-full text-center">
                     <p className="text-white/90 font-medium tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-md">
                       {ARTISTS[0].name}
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div className="flex flex-col h-full lg:pl-10">
            <h3 className="text-4xl md:text-6xl font-black mb-12 text-[#ff4bd8] tracking-tight uppercase leading-none drop-shadow-md">
              Últimas<br/>Notícias
            </h3>
            
            <div className="flex flex-col gap-6 pt-2">
              <h4 className="text-base md:text-lg font-bold tracking-widest uppercase mb-6 text-white border-b border-gray-800 pb-4">
                Posts recentes
              </h4>
              {[
                { date: "5 de fevereiro de 2024", title: "Com clima de verão e energia feminina, novo talento lança single 'Solteira'" },
                { date: "31 de janeiro de 2024", title: "'Casais Trocados': Artista ultrapassa 5 milhões de streams no Spotify e se destaca nos rankings nacionais" },
                { date: "24 de janeiro de 2024", title: "Gravadora promove evento de gravação de DVD em apresentação gratuita no Pelourinho" },
                { date: "10 de outubro de 2023", title: "Cena trap do nordeste: conheça o novo artista do time IGAPÓ" },
                { date: "27 de setembro de 2023", title: "Com ela tudo é mais 'gostoso' no pagode: conheça nossa nova aposta" }
              ].map((news, i) => (
                <a key={i} href="#" className="block border-b border-gray-800 pb-6 group">
                  <h5 className="text-base md:text-lg font-medium text-gray-300 group-hover:text-[#63c7ff] transition-colors mb-3 leading-relaxed pr-4">
                    {news.title}
                  </h5>
                  <span className="text-xs md:text-sm font-medium text-gray-500 block tracking-wide uppercase">
                    {news.date}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}