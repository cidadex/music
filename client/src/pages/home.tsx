import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { Services } from "@/components/home/Services";
import { ArtistsPreview } from "@/components/home/ArtistsPreview";
import { Releases } from "@/components/home/Releases";
import { Cta } from "@/components/home/Cta";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloat } from "@/components/layout/WhatsappFloat";

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
        
        <Cta />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}