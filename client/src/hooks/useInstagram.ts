import { useQuery } from "@tanstack/react-query";

export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: string;
  thumbnail_url?: string;
}

interface InstagramResponse {
  posts: InstagramPost[];
  hasToken: boolean;
}

export function useInstagram() {
  return useQuery<InstagramResponse>({
    queryKey: ["instagram"],
    queryFn: async () => {
      const res = await fetch("/api/instagram");
      if (!res.ok) throw new Error("Failed to fetch Instagram posts");
      return res.json();
    },
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
}
