import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_1772211384696.jpeg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "/artists", label: "Artistas" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer mix-blend-lighten">
            <img src={logoUrl} alt="IGAPÓ MUSIC" className="h-12 w-auto object-contain mix-blend-lighten" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary cursor-pointer ${location === link.href ? "text-primary" : "text-foreground"}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border py-4 px-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span 
                className="text-lg font-medium uppercase py-2 block border-b border-border/50 text-foreground cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}