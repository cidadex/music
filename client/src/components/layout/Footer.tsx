import { useEffect } from "react";

export function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const postUrls = [
    "https://www.instagram.com/p/DJNSvRWRGLM/",
    "https://www.instagram.com/p/DJHyeJ_Ri4c/",
    "https://www.instagram.com/p/DJFMt2MxTqR/",
    "https://www.instagram.com/p/DI-YPNkR7uc/",
    "https://www.instagram.com/p/DI73A8VxE5d/",
    "https://www.instagram.com/p/DI5Uo2WRvUX/",
  ];

  return (
    <footer id="contato" className="bg-[#0b0c10] pt-16 pb-8 border-t border-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-[#ff4bd8] text-2xl md:text-3xl font-black uppercase tracking-widest mb-2">
          Instagram
        </h3>
        <a href="https://instagram.com/igapomusic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors mb-10 block font-medium tracking-wider">
          @igapomusic
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
          {postUrls.map((url, i) => (
            <div key={i} className="instagram-embed-container overflow-hidden rounded-lg" data-testid={`instagram-embed-${i}`}>
              <blockquote
                className="instagram-media"
                data-instgrm-captioned={false}
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ 
                  background: "#111", 
                  border: 0, 
                  margin: 0, 
                  padding: 0, 
                  width: "100%",
                  maxWidth: "100%",
                  minWidth: "100%",
                }}
              />
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col items-center">
           <div className="w-1 h-1 rounded-full bg-gray-700 mb-6"></div>
           <p className="text-gray-600 text-xs tracking-wider uppercase">© Copyright {new Date().getFullYear()} - Powered by IGAPÓ MUSIC</p>
        </div>
      </div>
    </footer>
  );
}
