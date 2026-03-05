import { Play } from "lucide-react";
import { useNews } from "@/hooks/useNews";

const newsContent = `A música nordestina ganha mais um lançamento especial nesta sexta-feira com a chegada do single "Dançando na Poeira", interpretado por Ricardo França e Bruninho, que estará disponível em todas as principais plataformas digitais através da Igapo Music.

Com uma proposta musical que valoriza as raízes do forró e a identidade cultural do Nordeste, a canção traz uma sonoridade envolvente marcada pela presença do acordeon, ritmo contagiante e uma interpretação que promete conquistar o público logo nos primeiros acordes. O lançamento reforça a autenticidade dos artistas e a conexão com a música popular nordestina.

"Dançando na Poeira" chega com uma atmosfera que remete às festas tradicionais do interior, às celebrações culturais e à energia das pistas de dança que fazem parte do universo do forró. A faixa combina tradição e modernidade, apostando em uma produção atual sem perder a essência do gênero.

O single estará disponível nas principais plataformas de streaming, incluindo Spotify, Deezer, YouTube, Amazon Music e Apple Music, ampliando o alcance da música para ouvintes de todo o Brasil e também do exterior.

Com esse lançamento, Ricardo França e Bruninho seguem fortalecendo sua trajetória na música regional e levando o forró a novos públicos, mantendo viva uma tradição que atravessa gerações.

O pré-save da faixa já está disponível e os fãs podem se preparar para conferir "Dançando na Poeira" a partir desta sexta-feira nas plataformas digitais.`;

export function Releases() {
  const { data: newsItems = [] } = useNews();

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
            <div className="lg:col-span-5">
              <div className="w-full aspect-square bg-[#111] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800/50 relative group rounded-sm">
                <img 
                  src="/dancando-na-poeira.png" 
                  alt="Release Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" 
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col gap-8">
                {newsItems.map((news, i) => (
                  <div key={news.id} className="block" data-testid={`text-news-${i}`}>
                    <h5 className="text-xl md:text-2xl font-bold text-[#ff4bd8] mb-6 leading-tight uppercase tracking-wide border-b border-gray-800 pb-4">
                      {news.title}
                    </h5>
                    <div className="text-xs md:text-sm text-gray-400 leading-relaxed space-y-3 columns-1 md:columns-2 gap-8 text-justify">
                      {newsContent.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
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
