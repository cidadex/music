import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { ArtistsPreview } from "@/components/home/ArtistsPreview";
import { Releases } from "@/components/home/Releases";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ArtistsPreview />
        <Releases />
        
        {/* Strip Playlist */}
        <section className="relative py-20 bg-card overflow-hidden border-y border-border">
          <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">Escute nossas playlists</h2>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-background border-2 border-border flex items-center justify-center text-primary hover:border-primary transition-colors cursor-pointer">SP</div>
              <div className="w-16 h-16 rounded-full bg-background border-2 border-border flex items-center justify-center text-red-500 hover:border-red-500 transition-colors cursor-pointer">YT</div>
              <div className="w-16 h-16 rounded-full bg-background border-2 border-border flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-colors cursor-pointer">DZ</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}