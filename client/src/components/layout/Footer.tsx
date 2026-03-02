import { Instagram, Linkedin, Music2, Disc, Youtube, Facebook } from "lucide-react";
import { useInstagram } from "@/hooks/useInstagram";
import { useArtists } from "@/hooks/useArtists";

export function Footer() {
  const { data: instagramData } = useInstagram();
  const { data: artists = [] } = useArtists();

  const instaPosts = instagramData?.posts ?? [];
  const fallbackImages = artists.slice(0, 6).map(a => ({
    id: String(a.id),
    media_url: a.image,
    permalink: "https://instagram.com/igapomusic",
    caption: a.name,
  }));

  const feedItems = instaPosts.length > 0 ? instaPosts : fallbackImages;

  return (
    <footer id="contato" className="bg-[#0b0c10] pt-16 pb-8 border-t border-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-[#ff4bd8] text-2xl md:text-3xl font-black uppercase tracking-widest mb-2">
          Siga a gente
        </h3>
        <a href="https://instagram.com/igapomusic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors mb-12 block font-medium tracking-wider">
          @igapomusic
        </a>

        {feedItems.length > 0 && (
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-16 max-w-5xl mx-auto">
            {feedItems.slice(0, 6).map((item, i) => (
              <a
                key={item.id}
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square group overflow-hidden rounded-lg bg-gray-900 block"
                data-testid={`link-feed-image-${i}`}
              >
                <img
                  src={item.media_url}
                  alt={item.caption || "Instagram post"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#ff4bd8]/80 backdrop-blur-sm flex items-center justify-center">
                    <Instagram className="text-white w-6 h-6" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-20 max-w-2xl mx-auto">
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110" data-testid="link-instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110" data-testid="link-linkedin">
            <Linkedin size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110" data-testid="link-spotify">
            <Music2 size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110" data-testid="link-deezer">
            <Disc size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110" data-testid="link-youtube">
            <Youtube size={20} />
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center text-[#ff4bd8] border-2 border-[#ff4bd8] rounded-xl hover:bg-[#ff4bd8] hover:text-white transition-all transform hover:scale-110" data-testid="link-facebook">
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
