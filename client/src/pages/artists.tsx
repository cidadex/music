import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useArtists } from "@/hooks/useArtists";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Artists() {
  const [search, setSearch] = useState("");
  const { data: artists = [], isLoading } = useArtists();

  const filteredArtists = artists.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight"
            >
              Artistas
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Conheça o time que faz a IGAPÓ MUSIC acontecer.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 max-w-md mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input 
              type="text" 
              placeholder="Buscar artista..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-4 text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-foreground shadow-lg"
              data-testid="input-search-artist"
            />
          </motion.div>

          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground text-lg">Carregando artistas...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredArtists.map((artist, i) => (
                <motion.div
                  key={artist.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link href={`/artists/${artist.slug}`}>
                    <div className="group relative aspect-[3/4] bg-card rounded-xl overflow-hidden cursor-pointer shadow-xl border border-border hover:border-primary transition-all duration-300" data-testid={`card-artist-${artist.slug}`}>
                      <img 
                        src={artist.image} 
                        alt={artist.name} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 artist-hover-overlay opacity-80 group-hover:opacity-90 transition-opacity"></div>
                      
                      <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors">{artist.name}</h3>
                        <p className="text-white/80 text-sm font-medium uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          Ver perfil <span className="text-primary">→</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
              
              {filteredArtists.length === 0 && !isLoading && (
                <div className="col-span-full py-12 text-center text-muted-foreground text-lg">
                  Nenhum artista encontrado com "{search}"
                </div>
              )}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
