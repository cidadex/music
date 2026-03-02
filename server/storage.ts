import { type Artist, type InsertArtist, type ContactMessage, type InsertContact, type News, type InsertNews, artists, contactMessages, news } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getArtists(): Promise<Artist[]>;
  getArtistBySlug(slug: string): Promise<Artist | undefined>;
  createArtist(artist: InsertArtist): Promise<Artist>;
  clearArtists(): Promise<void>;
  getNews(): Promise<News[]>;
  createNews(item: InsertNews): Promise<News>;
  clearNews(): Promise<void>;
  createContactMessage(msg: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async getArtists(): Promise<Artist[]> {
    return db.select().from(artists).orderBy(artists.id);
  }

  async getArtistBySlug(slug: string): Promise<Artist | undefined> {
    const [artist] = await db.select().from(artists).where(eq(artists.slug, slug));
    return artist;
  }

  async createArtist(artist: InsertArtist): Promise<Artist> {
    const [created] = await db.insert(artists).values(artist).returning();
    return created;
  }

  async clearArtists(): Promise<void> {
    await db.delete(artists);
  }

  async getNews(): Promise<News[]> {
    return db.select().from(news);
  }

  async createNews(item: InsertNews): Promise<News> {
    const [created] = await db.insert(news).values(item).returning();
    return created;
  }

  async clearNews(): Promise<void> {
    await db.delete(news);
  }

  async createContactMessage(msg: InsertContact): Promise<ContactMessage> {
    const [created] = await db.insert(contactMessages).values(msg).returning();
    return created;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return db.select().from(contactMessages);
  }
}

export const storage = new DatabaseStorage();
