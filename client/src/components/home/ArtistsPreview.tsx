import { Link } from "wouter";
import { ARTISTS } from "@/data/artists";

export function ArtistsPreview() {
  return (
    <section id="artistas" className="py-20 bg-[#ff4bd8]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12 uppercase tracking-tight">
          Nossos artistas
        </h2>

        {/* Dense Grid like the reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-white p-[2px] gap-[2px] mx-auto max-w-6xl mb-12 shadow-2xl">
          {ARTISTS.concat(ARTISTS).concat(ARTISTS).slice(0, 10).map((artist, i) => (
            <div key={i} className="relative aspect-square sm:aspect-[4/5] bg-[#111] overflow-hidden group cursor-pointer">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              {/* Stylized overlay mimicking the reference triangle cut */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 -translate-y-8 opacity-80 group-hover:opacity-100 transition-opacity z-10"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff4bd8] transform rotate-45 translate-x-9 -translate-y-9 opacity-80 group-hover:opacity-100 transition-opacity z-10"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                <span className="text-white font-bold text-sm tracking-wider uppercase">{artist.name}</span>
              </div>
            </div>
          ))}
        </div>

        <Link href="/artists">
          <span className="inline-block px-10 py-4 bg-white text-[#ff4bd8] font-bold text-sm tracking-widest uppercase hover:bg-gray-100 transition-colors cursor-pointer shadow-lg">
            Conheça todos
          </span>
        </Link>
      </div>
    </section>
  );
}