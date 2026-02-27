import { motion } from "framer-motion";
import { Link } from "wouter";
import { ARTISTS } from "@/data/artists";

export function ArtistsPreview() {
  return (
    <section id="artistas" className="py-24 bg-primary relative overflow-hidden z-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-background mb-4">Nossos artistas</h2>
            <p className="text-background/80 text-xl max-w-lg font-medium">
              Conheça os talentos que fazem parte do nosso selo e crescem com estratégia.
            </p>
          </div>
          <Link href="/artists">
            <span className="inline-flex px-6 py-3 rounded-lg bg-background text-primary font-bold hover:scale-105 transition-transform shadow-xl cursor-pointer">
              Conheça todos
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISTS.slice(0, 4).map((artist, i) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link href={`/artists/${artist.id}`}>
                <div className="group relative aspect-[3/4] bg-card rounded-xl overflow-hidden cursor-pointer shadow-2xl border-4 border-transparent hover:border-background transition-all">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 mix-blend-luminosity opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-primary transition-colors drop-shadow-md">{artist.name}</h3>
                    <p className="text-white/80 text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Ver perfil →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}