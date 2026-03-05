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
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h3 className="text-4xl md:text-6xl font-black text-[#63c7ff] tracking-tight uppercase leading-none drop-shadow-md">
              Últimos<br/>Lançamentos
            </h3>
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-[#8cff5a] text-[#0b0c10] text-sm font-black uppercase tracking-widest hover:bg-[#a1f65e] hover:scale-105 transition-all shadow-[0_0_20px_rgba(140,255,90,0.4)]" data-testid="button-play-release">
              <Play size={18} fill="currentColor" /> Play
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Coluna do Cartaz */}
            <div className="lg:col-span-5">
              {featuredArtist && (
                <div className="w-full aspect-square bg-[#111] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800/50 relative group rounded-sm">
                  <img 
                    src={featuredArtist.image} 
                    alt="Release Cover" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" 
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none p-6 bg-black/20">
                     <h4 className="text-4xl md:text-5xl lg:text-6xl italic font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-center leading-none">
                       {(featuredArtist.latestRelease || '').split(' ').map((word: string, i: number) => (
                         <span key={i} className="block">{word}</span>
                       ))}
                     </h4>
                  </div>
                </div>
              )}
            </div>

            {/* Coluna da Notícia */}
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-8">
                {newsItems.map((news, i) => (
                  <div key={news.id} className="block" data-testid={`text-news-${i}`}>
                    <h5 className="text-xl md:text-2xl font-bold text-[#ff4bd8] mb-6 leading-tight uppercase tracking-wide border-b border-gray-800 pb-4">
                      {news.title}
                    </h5>
                    <div className="text-xs md:text-sm text-gray-400 leading-relaxed space-y-3 columns-1 md:columns-2 gap-8">
                      {featuredArtist?.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="whitespace-pre-wrap">{paragraph}</p>
                      ))}
                    </div>
                    <span className="mt-6 text-[10px] font-medium text-gray-600 block tracking-widest uppercase italic">
                      Publicado em: {news.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
