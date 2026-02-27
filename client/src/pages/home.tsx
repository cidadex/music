import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { ArtistsPreview } from "@/components/home/ArtistsPreview";
import { Releases } from "@/components/home/Releases";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Music2, Youtube, Disc } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ArtistsPreview />
        <Releases />
        
        {/* Playlists Strip */}
        <section className="relative py-24 bg-black overflow-hidden flex flex-col items-center justify-center">
          {/* Background image placeholder */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
            <img src="https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=2070&auto=format&fit=crop" alt="Concert" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-[#0b0c10] z-0"></div>
          
          <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white m-0">
              Escute nossas playlists
            </h2>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#ff4bd8] hover:text-white transition-colors">
                <Music2 size={24} />
              </a>
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#ff4bd8] hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#ff4bd8] hover:text-white transition-colors">
                <Disc size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}