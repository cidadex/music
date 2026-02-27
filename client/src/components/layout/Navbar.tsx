import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search } from "lucide-react";
import logoUrl from "@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_-_Editado_1772214168034.png";
import { useArtists } from "@/hooks/useArtists";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { data: artists = [] } = useArtists();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [searchOpen]);

  const filteredArtists = searchQuery.trim()
    ? artists.filter(a =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/artists", label: "Artistas" },
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#novidades", label: "Novidades" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "bg-[#0b0c10] py-4 shadow-xl border-b border-gray-900" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
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

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.label} href={link.href}>
                  <span className={`relative text-sm font-semibold tracking-widest uppercase transition-colors cursor-pointer py-5 group ${
                    isActive 
                      ? "text-[#ff4bd8]" 
                      : "text-white hover:text-[#ff4bd8]"
                  }`}>
                    {(isActive || true) && (
                      <span className={`absolute left-1/2 -translate-x-1/2 -top-6 w-[140%] h-[calc(100%+24px)] bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none rounded-b-lg transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                    )}
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <button
              className="text-white hover:text-[#ff4bd8] ml-2 transition-colors"
              onClick={() => setSearchOpen(true)}
              data-testid="button-open-search"
            >
              <Menu size={22} />
            </button>
          </nav>

          <button 
            className={`lg:hidden text-white hover:text-[#ff4bd8] transition-colors ${!scrolled && "absolute top-8 right-6"}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0b0c10] border-t border-gray-800 p-4 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <span className={`text-base font-semibold tracking-widest uppercase py-3 block border-b border-gray-800 transition-colors ${
                  location === link.href ? "text-[#ff4bd8]" : "text-white hover:text-[#ff4bd8]"
                }`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </span>
              </Link>
            ))}
            <button
              className="text-left text-base font-semibold tracking-widest uppercase text-white hover:text-[#ff4bd8] py-3 border-b border-gray-800 transition-colors flex items-center gap-2"
              onClick={() => { setIsOpen(false); setSearchOpen(true); }}
            >
              <Search size={18} /> Buscar
            </button>
          </div>
        )}
      </header>

      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex" data-testid="search-panel">
          <div
            className="flex-1 bg-black/60 backdrop-blur-sm"
            onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
          />

          <div className="w-full max-w-sm bg-[#0b0c10] border-l border-gray-800 h-full flex flex-col shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-end p-6">
              <button
                onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                className="text-white hover:text-[#ff4bd8] transition-colors"
                data-testid="button-close-search"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            <div className="px-6 pb-6">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-gray-600 focus:border-[#ff4bd8] text-white text-lg py-3 pr-10 outline-none placeholder-gray-500 transition-colors"
                  data-testid="input-search"
                />
                <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              </div>
            </div>

            {searchQuery.trim() && (
              <div className="px-6 flex-1 overflow-y-auto">
                {filteredArtists.length > 0 ? (
                  <div className="space-y-1">
                    {filteredArtists.map((artist) => (
                      <button
                        key={artist.id}
                        className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/60 transition-colors text-left"
                        onClick={() => {
                          navigate(`/artists/${artist.slug}`);
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        data-testid={`search-result-${artist.slug}`}
                      >
                        <img src={artist.image} alt={artist.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <p className="text-white font-medium">{artist.name}</p>
                          <p className="text-gray-500 text-sm">{artist.genre}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">Nenhum resultado encontrado.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
