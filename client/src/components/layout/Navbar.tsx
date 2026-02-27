import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_1772211384696.jpeg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0b0c10] py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <div className="cursor-pointer">
            <img src={logoUrl} alt="IGAPÓ MUSIC" className="h-8 md:h-10 w-auto object-contain mix-blend-lighten" />
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

        <button className="lg:hidden text-white hover:text-[#ff4bd8] transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0b0c10] border-t border-gray-800 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#ff4bd8] py-3 block border-b border-gray-800 transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}