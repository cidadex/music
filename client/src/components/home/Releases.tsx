import { Play } from "lucide-react";
import { useArtists } from "@/hooks/useArtists";
import { useNews } from "@/hooks/useNews";

export function Releases() {
  const { data: artists = [] } = useArtists();
  const { data: newsItems = [] } = useNews();
  const featuredArtist = artists[0];

  return (
    <section id="novidades" className="py-24 md:py-32 bg-[#0b0c10] text-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="flex flex-col h-full">
            <h3 className="text-4xl md:text-6xl font-black mb-12 text-[#63c7ff] tracking-tight uppercase leading-none drop-shadow-md">
              Últimos<br/>Lançamentos
            </h3>
            
            <div className="flex flex-col gap-6">
              <button className="self-start flex items-center justify-center gap-2 px-8 py-3 md:py-4 bg-[#8cff5a] text-[#0b0c10] text-sm md:text-base font-black uppercase tracking-widest hover:bg-[#a1f65e] hover:scale-105 transition-all shadow-[0_0_20px_rgba(140,255,90,0.4)]" data-testid="button-play-release">
                <Play size={18} fill="currentColor" /> Play
              </button>
              
              {featuredArtist && (
                <div className="w-full aspect-square md:aspect-[4/4] bg-[#111] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800/50 relative group rounded-sm mt-4">
                  <img 
                    src={featuredArtist.image} 
                    alt="Release Cover" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" 
                  />
                  
                  <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none p-6">
                     <h4 className="text-4xl md:text-6xl lg:text-7xl font-serif italic font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-center leading-none">
                       {(featuredArtist.latestRelease || '').split(' ').map((word: string, i: number) => (
                         <span key={i} className="block">{word}</span>
                       ))}
                     </h4>
                     <div className="absolute bottom-10 w-full text-center">
                       <p className="text-white/90 font-medium tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-md">
                         {featuredArtist.name}
                       </p>
                     </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col h-full lg:pl-10">
            <h3 className="text-4xl md:text-6xl font-black mb-12 text-[#ff4bd8] tracking-tight uppercase leading-none drop-shadow-md">
              Últimas<br/>Notícias
            </h3>
            
            <div className="flex flex-col gap-6 pt-2">
              <h4 className="text-base md:text-lg font-bold tracking-widest uppercase mb-6 text-white border-b border-gray-800 pb-4">
                Posts recentes
              </h4>
              {newsItems.map((news, i) => (
                <a key={news.id} href="#" className="block border-b border-gray-800 pb-6 group" data-testid={`link-news-${i}`}>
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
