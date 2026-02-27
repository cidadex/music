import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useArtists } from "@/hooks/useArtists";
import { Database, RefreshCw, CheckCircle, AlertCircle, Trash2 } from "lucide-react";

export default function Admin() {
  const queryClient = useQueryClient();
  const { data: artists = [], isLoading } = useArtists();
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
    },
    onError: (err: Error) => {
      setMessage({ type: "error", text: err.message });
    },
  });

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 font-['Outfit']">Admin</h1>
        <p className="text-gray-400 mb-8">Gerenciamento do banco de dados</p>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-[#ff4bd8]" size={24} />
            <h2 className="text-xl font-semibold">Artistas no banco</h2>
            <span className="ml-auto bg-[#ff4bd8]/20 text-[#ff4bd8] px-3 py-1 rounded-full text-sm font-bold">
              {isLoading ? "..." : artists.length}
            </span>
          </div>

          {artists.length > 0 && (
            <div className="space-y-2 mb-6">
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
          )}

          <div className="flex gap-3">
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
              Popular Banco
            </button>

            <button
              onClick={() => {
                if (confirm("Tem certeza que deseja limpar todos os artistas?")) {
                  clearMutation.mutate();
                }
              }}
              disabled={clearMutation.isPending || artists.length === 0}
              className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/40 border border-red-600/50 disabled:opacity-30 text-red-400 font-bold px-6 py-3 rounded-lg transition-all"
              data-testid="button-clear-database"
            >
              {clearMutation.isPending ? (
                <RefreshCw size={18} className="animate-spin" />
              ) : (
                <Trash2 size={18} />
              )}
              Limpar Banco
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
