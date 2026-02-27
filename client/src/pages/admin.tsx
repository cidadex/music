import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useArtists } from "@/hooks/useArtists";
import { useNews } from "@/hooks/useNews";
import { useInstagram } from "@/hooks/useInstagram";
import { Database, RefreshCw, CheckCircle, AlertCircle, Trash2, Newspaper, Instagram, ImageIcon } from "lucide-react";

export default function Admin() {
  const queryClient = useQueryClient();
  const { data: artists = [], isLoading: loadingArtists } = useArtists();
  const { data: newsItems = [], isLoading: loadingNews } = useNews();
  const { data: instagramData, isLoading: loadingInsta } = useInstagram();
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const seedMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Erro ao popular banco");
      }
      return res.json();
    },
    onSuccess: (data) => {
      setMessage({ type: "success", text: data.message });
      queryClient.invalidateQueries({ queryKey: ["artists"] });
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (err: Error) => {
      setMessage({ type: "error", text: err.message });
    },
  });

  const clearMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/admin/clear", { method: "POST" });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Erro ao limpar banco");
      }
      return res.json();
    },
    onSuccess: (data) => {
      setMessage({ type: "success", text: data.message });
      queryClient.invalidateQueries({ queryKey: ["artists"] });
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (err: Error) => {
      setMessage({ type: "error", text: err.message });
    },
  });

  const instaPosts = instagramData?.posts ?? [];
  const hasInstaToken = instagramData?.hasToken ?? false;

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Admin</h1>
        <p className="text-gray-400 mb-8">Gerenciamento do banco de dados</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#ff4bd8]/20 flex items-center justify-center">
              <ImageIcon className="text-[#ff4bd8]" size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold">{loadingArtists ? "..." : artists.length}</p>
              <p className="text-gray-400 text-sm">Artistas</p>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#63c7ff]/20 flex items-center justify-center">
              <Newspaper className="text-[#63c7ff]" size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold">{loadingNews ? "..." : newsItems.length}</p>
              <p className="text-gray-400 text-sm">Notícias</p>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#a1f65e]/20 flex items-center justify-center">
              <Instagram className="text-[#a1f65e]" size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold">{loadingInsta ? "..." : instaPosts.length}</p>
              <p className="text-gray-400 text-sm">
                {hasInstaToken ? "Posts Instagram" : "Sem token"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Database className="text-[#ff4bd8]" size={22} />
            Dados do Banco
          </h2>

          {artists.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Artistas</h3>
              <div className="space-y-2">
                {artists.map((a) => (
                  <div key={a.id} className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <img src={a.image} alt={a.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-medium text-sm">{a.name}</p>
                      <p className="text-xs text-gray-500">{a.genre} — {a.slug}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {newsItems.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Notícias</h3>
              <div className="space-y-2">
                {newsItems.map((n) => (
                  <div key={n.id} className="flex items-start gap-3 bg-gray-800/50 rounded-lg p-3">
                    <Newspaper size={16} className="text-[#63c7ff] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm leading-snug">{n.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{n.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!hasInstaToken && (
            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3 mb-4">
              <p className="text-yellow-400 text-sm">
                Instagram: Token não configurado. Adicione a variável INSTAGRAM_ACCESS_TOKEN nas secrets do Replit para puxar posts reais.
              </p>
            </div>
          )}

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => seedMutation.mutate()}
              disabled={seedMutation.isPending}
              className="flex items-center gap-2 bg-[#ff4bd8] hover:bg-[#ff4bd8]/80 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-lg transition-all"
              data-testid="button-seed-database"
            >
              {seedMutation.isPending ? (
                <RefreshCw size={18} className="animate-spin" />
              ) : (
                <Database size={18} />
              )}
              Popular Tudo
            </button>

            <button
              onClick={() => {
                if (confirm("Tem certeza que deseja limpar todos os dados?")) {
                  clearMutation.mutate();
                }
              }}
              disabled={clearMutation.isPending || (artists.length === 0 && newsItems.length === 0)}
              className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/40 border border-red-600/50 disabled:opacity-30 text-red-400 font-bold px-6 py-3 rounded-lg transition-all"
              data-testid="button-clear-database"
            >
              {clearMutation.isPending ? (
                <RefreshCw size={18} className="animate-spin" />
              ) : (
                <Trash2 size={18} />
              )}
              Limpar Tudo
            </button>
          </div>
        </div>

        {message && (
          <div
            className={`flex items-center gap-3 p-4 rounded-lg border ${
              message.type === "success"
                ? "bg-green-900/20 border-green-700 text-green-400"
                : "bg-red-900/20 border-red-700 text-red-400"
            }`}
            data-testid="text-admin-message"
          >
            {message.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <p>{message.text}</p>
          </div>
        )}

        <a href="/" className="inline-block mt-6 text-gray-500 hover:text-[#ff4bd8] text-sm transition-colors">
          ← Voltar ao site
        </a>
      </div>
    </div>
  );
}
