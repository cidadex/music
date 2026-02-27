import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Instagram, Youtube, Music } from "lucide-react";
import { useArtist, useArtists } from "@/hooks/useArtists";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ArtistDetail() {
  const [, params] = useRoute("/artists/:id");
  const slug = params?.id || "";
  
  const { data: artist, isLoading } = useArtist(slug);
  const { data: allArtists = [] } = useArtists();

  const artistIndex = allArtists.findIndex(a => a.slug === slug);
  const prevArtist = artistIndex > 0 ? allArtists[artistIndex - 1] : allArtists[allArtists.length - 1];
  const nextArtist = artistIndex < allArtists.length - 1 ? allArtists[artistIndex + 1] : allArtists[0];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center flex-col gap-6">
        <h1 className="text-4xl font-black">Artista não encontrado</h1>
        <Link href="/artists">
          <span className="px-6 py-3 bg-primary text-black font-bold rounded-lg cursor-pointer" data-testid="link-back-artists">Voltar para artistas</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-24">
        <section className="relative py-20 lg:py-32 overflow-hidden border-b border-border">
          <div className="absolute inset-0 z-0">
            <img src={artist.image} alt="" className="w-full h-full object-cover opacity-20 blur-xl scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Link href="/artists">
              <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-medium cursor-pointer text-sm uppercase tracking-wider">
                <ArrowLeft size={16} /> Voltar aos artistas
              </span>
            </Link>

            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_rgba(255,75,216,0.3)] flex-shrink-0"
              >
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
              </motion.div>
              
              <div className="flex-1 text-center md:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-lg"
                  data-testid="text-artist-name"
                >
                  {artist.name}
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <a href="#" className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,75,216,0.4)] hover:shadow-[0_0_25px_rgba(255,75,216,0.6)]" data-testid="button-listen">
                    <Play size={18} fill="currentColor" /> Ouvir Lançamento
                  </a>
                  <div className="flex gap-3 justify-center">
                    <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:text-red-500 hover:border-red-500 transition-all">
                      <Youtube size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-foreground hover:text-green-500 hover:border-green-500 transition-all">
                      <Music size={20} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
              
              <div className="lg:col-span-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-3xl font-black mb-6 uppercase tracking-tight border-b border-border/50 pb-4 inline-block">Biografia</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line font-medium" data-testid="text-artist-bio">
                    {artist.bio}
                  </p>
                </motion.div>

                {artist.latestRelease && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16"
                  >
                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
                      <span className="w-3 h-3 bg-secondary rounded-sm block"></span>
                      Último Lançamento
                    </h3>
                    <div className="p-6 rounded-2xl bg-card border border-border flex items-center gap-6 group hover:border-secondary transition-colors cursor-pointer">
                      <div className="w-24 h-24 rounded-lg overflow-hidden relative shadow-lg">
                        <img src={artist.image} alt="Release" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Play size={24} className="text-white" fill="white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{artist.latestRelease}</h4>
                        <p className="text-muted-foreground">{artist.name}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-8"
              >
                {artist.contact && (
                  <div className="p-8 rounded-2xl bg-card border border-border shadow-xl">
                    <h3 className="text-xl font-black mb-4 uppercase tracking-wider">Contato / Shows</h3>
                    <div className="text-muted-foreground font-medium flex flex-col gap-2">
                      <a href={`mailto:${artist.contact}`} className="hover:text-primary transition-colors flex items-center gap-2">
                        ✉️ {artist.contact}
                      </a>
                    </div>
                  </div>
                )}

                <div className="rounded-2xl overflow-hidden shadow-xl border border-border group">
                  <img src={artist.image} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {prevArtist && nextArtist && (
          <section className="border-t border-border pt-12 mt-8">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <Link href={`/artists/${prevArtist.slug}`}>
                  <span className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                      <ArrowLeft size={18} />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">Anterior</span>
                      <span className="text-lg font-bold group-hover:text-primary transition-colors">{prevArtist.name}</span>
                    </div>
                  </span>
                </Link>

                <Link href={`/artists/${nextArtist.slug}`}>
                  <span className="flex items-center gap-4 group cursor-pointer text-right">
                    <div className="text-right">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-1">Próximo</span>
                      <span className="text-lg font-bold group-hover:text-primary transition-colors">{nextArtist.name}</span>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                      <ArrowLeft size={18} className="rotate-180" />
                    </div>
                  </span>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
