import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { Services } from "@/components/home/Services";
import { ArtistsPreview } from "@/components/home/ArtistsPreview";
import { Releases } from "@/components/home/Releases";
import { Cta } from "@/components/home/Cta";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <Services />
        <ArtistsPreview />
        <Releases />
        
        {/* Playlists Strip with Video Background */}
        <section className="relative h-[400px] bg-black overflow-hidden flex flex-col items-center justify-center border-y border-gray-900">
          
          {/* YouTube Video iframe acting as background */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <iframe 
              src="https://www.youtube.com/embed/V2M1Xx50arE?autoplay=1&mute=1&loop=1&playlist=V2M1Xx50arE&controls=0&showinfo=0&modestbranding=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-[120%] min-h-[120%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
            ></iframe>
          </div>
          
          {/* Dark overlays to ensure text readability */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-[#0b0c10] z-0 opacity-70"></div>
          
          <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white m-0 drop-shadow-xl">
              Escute nossas playlists
            </h2>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#ff4bd8] hover:text-white transition-colors shadow-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-7.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </a>
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#ff4bd8] hover:text-white transition-colors shadow-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                  <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
                </svg>
              </a>
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#ff4bd8] hover:text-white transition-colors shadow-xl">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-11.5v7l6-3.5-6-3.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        <Cta />
      </main>
      <Footer />
    </div>
  );
}