import { Instagram, Youtube, Twitter, Music } from "lucide-react";
import logoUrl from "@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_1772211384696.jpeg";

export function Footer() {
  return (
    <footer id="contato" className="bg-card pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          <div className="flex flex-col">
            <img src={logoUrl} alt="IGAPÓ MUSIC" className="h-16 w-auto object-contain mix-blend-lighten self-start mb-6" />
            <h3 className="text-2xl font-bold mb-4 font-display">Siga a gente</h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Acompanhe nossos lançamentos, bastidores e novidades dos nossos artistas nas redes sociais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors border border-primary/20 hover:border-primary shadow-[0_0_15px_rgba(255,75,216,0.1)] hover:shadow-[0_0_20px_rgba(255,75,216,0.4)]">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-background transition-colors border border-cyan-400/20 hover:border-cyan-400 shadow-[0_0_15px_rgba(99,199,255,0.1)] hover:shadow-[0_0_20px_rgba(99,199,255,0.4)]">
                <Music size={20} /> {/* TikTok Placeholder */}
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-background transition-colors border border-red-500/20 hover:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-background transition-colors border border-green-500/20 hover:border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <Music size={20} /> {/* Spotify Placeholder */}
              </a>
            </div>
          </div>

          <div className="bg-background p-8 rounded-2xl border border-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all"></div>
            
            <h3 className="text-2xl font-bold mb-6 font-display relative z-10">Envie seu material</h3>
            <form className="flex flex-col gap-4 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Seu nome" className="bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-foreground" />
                <input type="text" placeholder="WhatsApp" className="bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-foreground" />
              </div>
              <input type="text" placeholder="Link do seu som (Spotify/YouTube)" className="bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-foreground" />
              <input type="text" placeholder="Cidade" className="bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-foreground" />
              <textarea placeholder="Conta rapidinho sobre seu momento e objetivo…" rows={4} className="bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-foreground resize-none"></textarea>
              
              <button type="button" className="mt-2 bg-primary text-primary-foreground font-bold text-lg py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group/btn">
                Enviar material
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground text-sm font-medium">© {new Date().getFullYear()} IGAPÓ MUSIC. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}