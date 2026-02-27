import { Instagram, Linkedin, Music2, Disc, Youtube, Menu, Facebook } from "lucide-react";
import logoUrl from "@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_1772211384696.jpeg";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer id="contato" className="bg-[#0b0c10] pt-0 pb-8 border-t border-gray-900 text-white">
      
      {/* Navigation bar from reference (Bottom Bar) */}
      <div className="bg-[#11131a] py-4 flex justify-center mb-16">
         <div className="container flex flex-col md:flex-row justify-between items-center px-4 gap-6 md:gap-0">
           <img src={logoUrl} alt="IGAPÓ MUSIC" className="h-8 object-contain mix-blend-lighten" />
           
           <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase">
             <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link>
             <Link href="/artists"><span className="hover:text-white cursor-pointer">Artistas</span></Link>
             <a href="#quem-somos" className="hover:text-white">Quem somos</a>
             <a href="#novidades" className="hover:text-white">Novidades</a>
             <a href="#contato" className="hover:text-white">Contato</a>
           </div>
           
           <button className="hidden md:block text-gray-400 hover:text-white transition-colors"><Menu size={24}/></button>
         </div>
      </div>

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