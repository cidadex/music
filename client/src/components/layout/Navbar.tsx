import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import logoUrl from "@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_-_Editado_1772214168034.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    // Trigger initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/artists", label: "Artistas" },
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#novidades", label: "Novidades" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? "bg-[#0b0c10] py-4 shadow-xl border-b border-gray-900" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Dynamic Logo Sizing */}
        <Link href="/">
          <div className="cursor-pointer relative flex items-center h-full">
            <img 
              src={logoUrl} 
              alt="IGAPÓ MUSIC" 
              className={`object-contain transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left mix-blend-lighten drop-shadow-xl ${
                scrolled 
                  ? "h-10 md:h-12 w-auto scale-100" 
                  : "h-12 md:h-16 lg:h-20 w-auto scale-100"
              }`} 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <div className="relative group flex items-center cursor-pointer px-2 py-1 overflow-hidden">
                <Sparkles className="w-3 h-3 text-[#ff4bd8] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute left-0 top-0" />
                <span className={`text-sm md:text-base font-bold tracking-widest uppercase transition-colors relative z-10 ${location === link.href ? "text-[#ff4bd8]" : "text-white group-hover:text-white"}`}>
                  {link.label}
                </span>
                {/* Shimmer Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none skew-x-12 z-0" />
              </div>
            </Link>
          ))}
          <button className="text-white hover:text-[#ff4bd8] ml-4 transition-colors"><Menu size={24}/></button>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className={`lg:hidden text-white hover:text-[#ff4bd8] transition-colors ${!scrolled && "absolute top-8 right-6"}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0b0c10] border-t border-gray-800 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span className="text-base font-bold tracking-widest uppercase text-white hover:text-[#ff4bd8] py-3 block border-b border-gray-800 transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}