import { Link } from "wouter";
import { ARTISTS } from "@/data/artists";

export function ArtistsPreview() {
  return (
    <section id="artistas" className="py-20 bg-[#a1f65e] relative overflow-hidden">
      {/* Background massive text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[25vw] font-black text-black/5 whitespace-nowrap uppercase tracking-tighter leading-none">
          Artistas
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-md mb-6">
            Artistas que crescem com a IGAPÓ MUSIC
          </h2>
          <p className="text-lg md:text-2xl text-black font-bold uppercase tracking-widest bg-[#a1f65e] inline-block px-4 py-2 mt-4 shadow-lg">
            Cada projeto é único. Cada trajetória é construída com acompanhamento real.
          </p>
        </div>

        {/* Dense Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-white p-[2px] gap-[2px] mx-auto max-w-6xl mb-12 shadow-2xl">
          {ARTISTS.concat(ARTISTS).concat(ARTISTS).slice(0, 10).map((artist, i) => (
            <div key={i} className="relative aspect-square sm:aspect-[4/5] bg-black overflow-hidden group cursor-pointer">
              
              {/* Image that zooms on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* White background triangle graphic from reference */}
              <div className="absolute bottom-0 right-0 w-[150%] h-[50%] bg-white transform origin-bottom-left -rotate-12 translate-y-full group-hover:translate-y-[150%] transition-transform duration-500 z-10 opacity-90"></div>
              
              {/* Pink accent triangle graphic from reference */}
              <div className="absolute bottom-0 right-0 w-[150%] h-[50%] bg-[#ff4bd8] transform origin-bottom-left -rotate-12 translate-y-full group-hover:translate-y-[150%] transition-transform duration-500 delay-75 z-10 opacity-90"></div>

              {/* Hover Overlay that slides up */}
              <div className="absolute inset-0 bg-black/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-20 flex flex-col justify-between p-6">
                <p className="text-white/90 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                  {artist.shortBio || artist.bio.substring(0, 80) + '...'}
                </p>
                <div>
                  <h3 className="text-white font-bold text-lg tracking-wider uppercase mb-1">{artist.name}</h3>
                  <span className="text-[#a1f65e] text-xs font-bold tracking-widest uppercase">{artist.genre || 'ARTISTA'}</span>
                </div>
              </div>

              {/* Default Name label (visible when NOT hovered, like the reference) */}
              <div className="absolute bottom-0 left-0 p-4 z-10 group-hover:opacity-0 transition-opacity duration-300 w-full text-left">
                <h3 className="text-white font-bold text-base md:text-lg tracking-wider uppercase drop-shadow-lg">{artist.name}</h3>
                <span className="text-[#a1f65e] text-[10px] font-bold tracking-widest uppercase drop-shadow-md">{artist.genre || 'ARTISTA'}</span>
              </div>
            </div>
          ))}
        </div>

        <Link href="/artists">
          <span className="inline-block px-10 py-4 bg-white text-[#0b0c10] font-black text-sm tracking-widest uppercase hover:bg-black hover:text-[#a1f65e] transition-colors cursor-pointer shadow-lg">
            Conheça todos
          </span>
        </Link>
      </div>
    </section>
  );
}