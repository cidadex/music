import { Instagram, Linkedin, Music2, Disc, Youtube, Menu, Facebook } from "lucide-react";
import logoUrl from "@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_-_Editado_1772214168034.png";
import { Link, useLocation } from "wouter";

export function Footer() {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/artists", label: "Artistas" },
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#novidades", label: "Novidades" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <footer id="contato" className="bg-[#0b0c10] pt-0 pb-8 border-t border-gray-900 text-white">
      
      {/* Navigation bar from reference (Bottom Bar) */}
      <div className="bg-[#0b0c10] py-6 shadow-xl border-b border-gray-900 mb-16">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <div className="cursor-pointer">
              <img src={logoUrl} alt="IGAPÓ MUSIC" className="h-10 md:h-12 w-auto object-contain mix-blend-lighten drop-shadow-xl" />
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span className={`text-xs font-bold tracking-widest uppercase hover:text-[#ff4bd8] transition-colors cursor-pointer ${location === link.href ? "text-[#ff4bd8]" : "text-white"}`}>
                  {link.label}
                </span>
              </Link>
            ))}
            <button className="text-white hover:text-[#ff4bd8] ml-4 transition-colors"><Menu size={24}/></button>
          </nav>
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