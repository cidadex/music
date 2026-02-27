import { Play } from "lucide-react";
import { ARTISTS } from "@/data/artists";

export function Releases() {
  return (
    <section id="novidades" className="py-24 bg-[#0b0c10] text-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Latest Releases */}
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-10 text-[#ff4bd8] leading-tight">
              Últimos<br/>Lançamentos
            </h3>
            
            <div className="mb-4">
              <button className="flex items-center gap-2 px-6 py-2 bg-[#ff4bd8] text-white text-xs font-bold uppercase tracking-wider mb-8 hover:bg-[#e53bc0] transition-colors">
                <Play size={14} fill="currentColor" /> Play
              </button>
              <div className="w-full aspect-square md:aspect-[4/3] bg-[#111] overflow-hidden shadow-2xl relative group">
                <img src={ARTISTS[0].image} alt="Release Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
                   <h4 className="text-3xl md:text-5xl font-serif italic font-bold text-white drop-shadow-xl text-center px-4 leading-tight">{ARTISTS[0].latestRelease}</h4>
                   <p className="text-white/80 font-medium tracking-widest uppercase mt-4 text-sm">{ARTISTS[0].name}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-10 text-[#ff4bd8] leading-tight">
              Últimas<br/>Notícias
            </h3>
            
            <div className="flex flex-col gap-6 pt-2">
              <h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-white">Posts recentes</h4>
              {[
                { date: "5 de fevereiro de 2024", title: "Com clima de verão e energia feminina, novo talento lança single 'Solteira'" },
                { date: "31 de janeiro de 2024", title: "'Casais Trocados': Artista ultrapassa 5 milhões de streams no Spotify e se destaca nos rankings nacionais" },
                { date: "24 de janeiro de 2024", title: "Gravadora promove evento de gravação de DVD em apresentação gratuita no Pelourinho" },
                { date: "10 de outubro de 2023", title: "Cena trap do nordeste: conheça o novo artista do time IGAPÓ" },
                { date: "27 de setembro de 2023", title: "Com ela tudo é mais 'gostoso' no pagode: conheça nossa nova aposta" }
              ].map((news, i) => (
                <a key={i} href="#" className="block border-b border-gray-800 pb-5 group">
                  <h5 className="text-sm md:text-base font-medium text-gray-300 group-hover:text-[#ff4bd8] transition-colors mb-2 leading-relaxed">
                    {news.title}
                  </h5>
                  <span className="text-xs font-medium text-gray-500 block">
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