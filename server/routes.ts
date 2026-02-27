import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, type InsertArtist, type InsertNews } from "@shared/schema";

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

const seedArtists: InsertArtist[] = [
  {
    slug: "aldair-playboy",
    name: "Aldair Playboy",
    genre: "BREGAFUNK",
    shortBio: "Dono do hit 'Amor Falso' e um dos principais nomes do Brega Funk",
    image: "/images/artist_1.jpg",
    bio: "Aldair Playboy é natural da Paraíba. O cantor de 26 anos iniciou sua carreira musical em 2010. Apesar de todas as dificuldades enfrentadas no início, o artista conseguiu se destacar no movimento que ficou conhecido como 'Batidão'.",
    latestRelease: "Pra Ouvir No Paredão",
    contact: "johnproducoes@hotmail.com",
  },
  {
    slug: "raffa-torres",
    name: "Raffa Torres",
    genre: "SERTANEJO",
    shortBio: "Um dos maiores compositores do Brasil e hitmaker.",
    image: "/images/artist_2.jpg",
    bio: "Raffa Torres é um dos maiores compositores do Brasil, dono de hits gigantes na voz de vários artistas e com carreira solo em ascensão.",
    latestRelease: "Casais Trocados",
    contact: "contato@raffatorres.com.br",
  },
  {
    slug: "karenzinha",
    name: "Karenzinha",
    genre: "PAGODE",
    shortBio: "A nova voz do pagode com energia lá em cima.",
    image: "/images/artist_3.jpg",
    bio: "Com ela tudo é mais gostoso no pagode, conheça Karenzinha.",
    latestRelease: "Single Novo",
    contact: "contato@karenzinha.com.br",
  },
  {
    slug: "cena-trap",
    name: "Cena Trap",
    genre: "TRAP",
    shortBio: "A força e a rima do trap nordestino.",
    image: "/images/artist_4.jpg",
    bio: "Cena trap do nordeste ganha destaque com os novos sons.",
    latestRelease: "Trap Vol 1",
    contact: "trap@igapo.com.br",
  },
];

const seedNews: InsertNews[] = [
  { date: "5 de fevereiro de 2024", title: "Com clima de verão e energia feminina, novo talento lança single 'Solteira'" },
  { date: "31 de janeiro de 2024", title: "'Casais Trocados': Artista ultrapassa 5 milhões de streams no Spotify e se destaca nos rankings nacionais" },
  { date: "24 de janeiro de 2024", title: "Gravadora promove evento de gravação de DVD em apresentação gratuita no Pelourinho" },
  { date: "10 de outubro de 2023", title: "Cena trap do nordeste: conheça o novo artista do time IGAPÓ" },
  { date: "27 de setembro de 2023", title: "Com ela tudo é mais 'gostoso' no pagode: conheça nossa nova aposta" },
];

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

  app.get("/api/news", async (_req, res) => {
    const items = await storage.getNews();
    res.json(items);
  });

  app.post("/api/contact", async (req, res) => {
    const parsed = insertContactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Dados inválidos", errors: parsed.error.errors });
    }
    const msg = await storage.createContactMessage(parsed.data);
    res.status(201).json(msg);
  });

  app.post("/api/admin/seed", async (_req, res) => {
    try {
      await storage.clearArtists();
      await storage.clearNews();
      const results: string[] = [];

      for (const artist of seedArtists) {
        await storage.createArtist(artist);
      }
      results.push(`${seedArtists.length} artistas`);

      for (const item of seedNews) {
        await storage.createNews(item);
      }
      results.push(`${seedNews.length} notícias`);

      res.json({ message: `Seed completo: ${results.join(", ")}.` });
    } catch (err: any) {
      res.status(500).json({ message: err.message || "Erro ao popular banco" });
    }
  });

  app.post("/api/admin/clear", async (_req, res) => {
    try {
      await storage.clearArtists();
      await storage.clearNews();
      res.json({ message: "Todos os artistas e notícias foram removidos." });
    } catch (err: any) {
      res.status(500).json({ message: err.message || "Erro ao limpar banco" });
    }
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
