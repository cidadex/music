import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: string;
  thumbnail_url?: string;
}

let instagramCache: { posts: InstagramPost[]; fetchedAt: number } | null = null;
const CACHE_TTL = 10 * 60 * 1000;

async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) {
    return [];
  }

  if (instagramCache && Date.now() - instagramCache.fetchedAt < CACHE_TTL) {
    return instagramCache.posts;
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption,media_type,thumbnail_url&limit=6&access_token=${token}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Instagram API error:", errorData);
      return instagramCache?.posts ?? [];
    }

    const data = await response.json();
    const posts: InstagramPost[] = (data.data || []).map((post: any) => ({
      id: post.id,
      media_url: post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url,
      permalink: post.permalink,
      caption: post.caption || "",
      media_type: post.media_type,
      thumbnail_url: post.thumbnail_url,
    }));

    instagramCache = { posts, fetchedAt: Date.now() };
    return posts;
  } catch (err) {
    console.error("Failed to fetch Instagram posts:", err);
    return instagramCache?.posts ?? [];
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/artists", async (_req, res) => {
    const artists = await storage.getArtists();
    res.json(artists);
  });

  app.get("/api/artists/:slug", async (req, res) => {
    const artist = await storage.getArtistBySlug(req.params.slug);
    if (!artist) {
      return res.status(404).json({ message: "Artista não encontrado" });
    }
    res.json(artist);
  });

  app.post("/api/contact", async (req, res) => {
    const parsed = insertContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Dados inválidos", errors: parsed.error.errors });
    }
    const msg = await storage.createContactMessage(parsed.data);
    res.status(201).json(msg);
  });

  app.get("/api/instagram", async (_req, res) => {
    try {
      const posts = await fetchInstagramPosts();
      res.json({ posts, hasToken: !!process.env.INSTAGRAM_ACCESS_TOKEN });
    } catch (err) {
      res.status(500).json({ posts: [], hasToken: false, error: "Failed to fetch Instagram posts" });
    }
  });

  return httpServer;
}
