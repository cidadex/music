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
    slug: "embaixadoras-do-brega",
    name: "Embaixadoras do Brega",
    genre: "BREGA",
    shortBio: "A dupla feminina que é referência no brega nacional.",
    image: "/images/artists/embaixadoras-do-brega.png",
    bio: "Embaixadoras do Brega são a dupla que representa a força feminina no brega brasileiro. Com energia contagiante e repertório que mistura tradição e modernidade, elas conquistam palcos por todo o Brasil.",
    latestRelease: null,
    contact: null,
  },
  {
    slug: "os-homens-do-forro",
    name: "Os Homens do Forró",
    genre: "FORRÓ",
    shortBio: "A potência do forró com tradição e energia no palco.",
    image: "/images/artists/os-homens-do-forro.png",
    bio: "Os Homens do Forró trazem a autenticidade e a energia do forró raiz com arranjos modernos. Uma banda que é referência no gênero e arrasta multidões por onde passa.",
    latestRelease: null,
    contact: null,
  },
  {
    slug: "forro-pra-curtir",
    name: "Forró Pra Curtir",
    genre: "FORRÓ",
    shortBio: "Forró animado pra curtir e dançar sem parar.",
    image: "/images/artists/forro-pra-curtir.png",
    bio: "Forró Pra Curtir entrega exatamente o que o nome promete: forró de qualidade, com músicas envolventes e energia que não deixa ninguém parado. Um projeto feito pra festa.",
    latestRelease: null,
    contact: null,
  },
  {
    slug: "pau-no-xote",
    name: "Pau No Xote",
    genre: "FORRÓ",
    shortBio: "Xote raiz com a pegada que só eles têm.",
    image: "/images/artists/pau-no-xote.png",
    bio: "Pau No Xote é sinônimo de xote autêntico e animado. Com estilo próprio e presença de palco marcante, a banda leva alegria e tradição nordestina por onde passa.",
    latestRelease: null,
    contact: null,
  },
  {
    slug: "daniel-mello",
    name: "Daniel Mello",
    genre: "FORRÓ",
    shortBio: "Voz marcante e presença de palco inconfundível.",
    image: "/images/artists/daniel-mello.png",
    bio: "Daniel Mello é um artista que une talento vocal e carisma no palco. Com um repertório que transita entre o forró e ritmos populares, ele conquista o público com sua autenticidade.",
    latestRelease: null,
    contact: null,
  },
  {
    slug: "ricardo-franca",
    name: "Ricardo França",
    genre: "FORRÓ",
    shortBio: "Carisma e voz potente que encantam o público.",
    image: "/images/artists/ricardo-franca.png",
    bio: "Ricardo França é um dos nomes em ascensão no cenário musical. Com voz potente e estilo único, ele leva sua música a cada vez mais fãs em todo o Brasil.",
    latestRelease: null,
    contact: null,
  },
  {
    slug: "bruninho-diferente",
    name: "Bruninho Diferente",
    genre: "FORRÓ",
    shortBio: "O diferente que faz a diferença no forró.",
    image: "/images/artists/bruninho-diferente.png",
    bio: "Bruninho Diferente faz jus ao nome: um artista que traz uma pegada única ao forró, com sua sanfona e energia incomparável. Talento que se destaca em cada apresentação.",
    latestRelease: null,
    contact: null,
  },
  {
    slug: "banda-flor-da-pele",
    name: "Banda Flor da Pele",
    genre: "FORRÓ",
    shortBio: "Em breve com novidades. Fique ligado!",
    image: "/images/artists/banda-flor-da-pele.png",
    bio: "Banda Flor da Pele está em fase de preparação para novos projetos. Em breve, mais novidades sobre este talento do time IGAPÓ MUSIC.",
    latestRelease: null,
    contact: null,
  },
  {
    slug: "ze-lord",
    name: "Zé Lord",
    genre: "FORRÓ",
    shortBio: "Ritmo, percussão e alma nordestina.",
    image: "/images/artists/ze-lord.png",
    bio: "Zé Lord é um artista que carrega a essência do nordeste em cada batida. Com talento na percussão e presença marcante, ele é uma das apostas do time IGAPÓ MUSIC.",
    latestRelease: null,
    contact: null,
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

  app.post("/api/admin/seed", async (req, res) => {
    const adminKey = process.env.ADMIN_SECRET;
    const providedKey = req.headers["x-admin-key"] || req.body?.adminKey;
    if (!adminKey || providedKey !== adminKey) {
      return res.status(401).json({ message: "Não autorizado" });
    }
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

  app.post("/api/admin/clear", async (req, res) => {
    const adminKey = process.env.ADMIN_SECRET;
    const providedKey = req.headers["x-admin-key"] || req.body?.adminKey;
    if (!adminKey || providedKey !== adminKey) {
      return res.status(401).json({ message: "Não autorizado" });
    }
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
