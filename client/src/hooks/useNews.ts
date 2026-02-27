import { useQuery } from "@tanstack/react-query";
import type { News } from "@shared/schema";

export function useNews() {
  return useQuery<News[]>({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error("Failed to fetch news");
      return res.json();
    },
  });
}
