import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { ARTISTS } from "@/data/artists";

export function Releases() {
  return (
    <section id="novidades" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Latest Releases */}
          <div>
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
              <span className="w-4 h-4 bg-primary rounded-sm block"></span>
              Últimos Lançamentos
            </h3>
            
            <div className="bg-card border border-border p-6 rounded-2xl group hover:border-primary transition-colors">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-full sm:w-48 aspect-square rounded-xl overflow-hidden relative shadow-lg">
                  <img src={ARTISTS[0].image} alt="Release Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black pl-1 shadow-[0_0_20px_rgba(255,75,216,0.6)] opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <Play size={20} fill="currentColor" />
                  </button>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    Em destaque
                  </span>
                  <h4 className="text-2xl font-bold mb-2">{ARTISTS[0].latestRelease}</h4>
                  <p className="text-muted-foreground mb-4">{ARTISTS[0].name}</p>
                  <p className="text-sm text-muted-foreground/80 border-t border-border pt-4">
                    Ouça agora no Spotify, Deezer, Apple Music e mais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
              <span className="w-4 h-4 bg-secondary rounded-sm block"></span>
              Últimas Notícias
            </h3>
            
            <div className="flex flex-col gap-4">
              {[
                { date: "Hoje", title: "Cena trap do nordeste ganha destaque com novo projeto", tag: "Lançamento" },
                { date: "Ontem", title: "Raffa Torres ultrapassa 5 milhões de streams no Spotify", tag: "Conquista" },
                { date: "24 Jan", title: "Aldair Playboy grava novo DVD em apresentação gratuita", tag: "Agenda" }
              ].map((news, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between p-6 bg-card border border-border rounded-xl hover:border-secondary transition-colors group"
                >
                  <div className="flex-1">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-2 block">
                      {news.tag}
                    </span>
                    <h4 className="text-lg font-bold group-hover:text-secondary transition-colors">
                      {news.title}
                    </h4>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-background px-3 py-1 rounded-md">
                    {news.date}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}