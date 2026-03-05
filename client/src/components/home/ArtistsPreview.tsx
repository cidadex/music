import { Link } from "wouter";
import { useArtists } from "@/hooks/useArtists";
import logoUrl from "@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_-_Editado_1772214168034.png";

export function ArtistsPreview() {
  const { data: artists = [] } = useArtists();

  const displayArtists = artists.length > 0
    ? artists.slice(0, 10)
    : [];

  return (
    <section id="artistas" className="py-24 bg-[#a1f65e] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#000000_2px,transparent_2px)] [background-size:24px_24px] opacity-[0.08] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-left relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 max-w-[90rem] mx-auto">
          
          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0b0c10] uppercase tracking-tighter leading-[0.9]">
              Artistas <br/> que crescem <br/> com a
            </h2>
            <div className="flex gap-2 mb-2">
               <span className="w-4 h-4 rounded-full bg-[#ff4bd8]"></span>
               <span className="w-4 h-4 rounded-full bg-[#63c7ff]"></span>
               <span className="w-4 h-4 rounded-full bg-[#0b0c10]"></span>
            </div>
            <p className="text-lg md:text-xl text-[#0b0c10] font-bold uppercase tracking-widest border-l-4 border-[#ff4bd8] pl-6 py-2">
              Cada projeto é único. Cada trajetória é construída com acompanhamento real.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-10">
            <img 
              src={logoUrl} 
              alt="IGAPÓ MUSIC" 
              className="w-full max-w-md lg:max-w-2xl object-contain drop-shadow-2xl mix-blend-color-burn" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-[#0b0c10] p-[2px] gap-[2px] mx-auto max-w-7xl mb-16 shadow-2xl relative">
          
          <div className="absolute -inset-4 border-2 border-[#0b0c10] -z-10 hidden md:block"></div>
          {displayArtists.map((artist, i) => (
            <Link key={i} href={`/artists/${artist.slug}`}>
              <div className="relative aspect-square bg-black overflow-hidden group cursor-pointer" data-testid={`card-artist-preview-${i}`}>
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white font-bold text-sm md:text-lg tracking-wider uppercase text-center px-4">{artist.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/artists">
          <span className="inline-block px-10 py-4 bg-white text-[#0b0c10] font-black text-sm tracking-widest uppercase hover:bg-black hover:text-[#a1f65e] transition-colors cursor-pointer shadow-lg" data-testid="link-all-artists">
            Conheça todos
          </span>
        </Link>
      </div>
    </section>
  );
}
