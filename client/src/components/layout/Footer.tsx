import { Instagram, Linkedin, Music2, Disc, Youtube, Menu, Facebook } from "lucide-react";
import { ARTISTS } from "@/data/artists";

export function Footer() {
  // Using artist images for the mock Instagram feed
  const feedImages = ARTISTS.slice(0, 6).map(a => a.image);

  return (
    <footer id="contato" className="bg-[#0b0c10] pt-16 pb-8 border-t border-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-[#ff4bd8] text-2xl md:text-3xl font-black uppercase tracking-widest mb-2">
          Siga a gente
        </h3>
        <a href="https://instagram.com/igapomusic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors mb-12 block font-medium tracking-wider">
          @igapomusic
        </a>

        {/* Mock Instagram Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-16 max-w-6xl mx-auto">
          {feedImages.map((img, i) => (
            <a key={i} href="https://instagram.com/igapomusic" target="_blank" rel="noopener noreferrer" className="relative aspect-square group overflow-hidden bg-gray-900 block">
              <img src={img} alt="Instagram feed" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal" />
              <div className="absolute inset-0 bg-[#ff4bd8]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-20 max-w-2xl mx-auto">
          {/* Social Icons in outline rounded rectangles/circles */}
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110">
            <Linkedin size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110">
            <Music2 size={20} /> {/* Spotify alt */}
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110">
            <Disc size={20} /> {/* Deezer alt */}
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110">
            <Youtube size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110">
            <Facebook size={20} />
          </a>
        </div>

        <div className="pt-8 flex flex-col items-center">
           <div className="w-1 h-1 rounded-full bg-gray-700 mb-6"></div>
           <p className="text-gray-600 text-xs tracking-wider uppercase">© Copyright {new Date().getFullYear()} - Powered by IGAPÓ MUSIC</p>
        </div>
      </div>
    </footer>
  );
}