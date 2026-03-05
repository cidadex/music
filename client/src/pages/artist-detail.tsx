import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Instagram } from "lucide-react";
import { useArtist } from "@/hooks/useArtists";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ArtistDetail() {
  const [, params] = useRoute("/artists/:id");
  const slug = params?.id || "";
  
  const { data: artist, isLoading } = useArtist(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0b0c10] text-white flex items-center justify-center">
        <p className="text-xl text-gray-400">Carregando...</p>
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-[#0b0c10] text-white flex items-center justify-center flex-col gap-6">
        <h1 className="text-4xl font-black">Artista não encontrado</h1>
        <Link href="/artists">
          <span className="px-6 py-3 bg-[#a1f65e] text-[#0b0c10] font-bold rounded-lg cursor-pointer" data-testid="link-back-artists">Voltar para artistas</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/artists">
            <span className="inline-flex items-center gap-2 text-gray-400 hover:text-[#a1f65e] transition-colors mb-12 font-medium cursor-pointer text-sm uppercase tracking-wider">
              <ArrowLeft size={16} /> Voltar aos artistas
            </span>
          </Link>

          <div className="flex flex-col items-center gap-10 max-w-2xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md aspect-square overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-black tracking-tight"
              data-testid="text-artist-name"
            >
              {artist.name}
            </motion.h1>

            {artist.contact && artist.contact.includes('instagram') && (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href={artist.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                data-testid="link-instagram"
              >
                <Instagram size={22} /> Instagram
              </motion.a>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
