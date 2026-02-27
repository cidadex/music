import { Instagram, Linkedin, Music2, Disc, Youtube, Menu, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#0b0c10] pt-16 pb-8 border-t border-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-[#ff4bd8] text-2xl md:text-3xl font-black uppercase tracking-widest mb-12">
          Siga a gente
        </h3>
        
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