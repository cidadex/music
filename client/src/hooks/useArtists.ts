import { useQuery } from "@tanstack/react-query";
import type { Artist } from "@shared/schema";

export function useArtists() {
  return useQuery<Artist[]>({
    queryKey: ["/api/artists"],
  });
}

export function useArtist(slug: string) {
  return useQuery<Artist>({
    queryKey: ["/api/artists", slug],
    queryFn: async () => {
      const res = await fetch(`/api/artists/${slug}`);
      if (!res.ok) throw new Error("Artist not found");
      return res.json();
    },
  });
}
