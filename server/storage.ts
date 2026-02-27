import { type Artist, type InsertArtist, type ContactMessage, type InsertContact, artists, contactMessages } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getArtists(): Promise<Artist[]>;
  getArtistBySlug(slug: string): Promise<Artist | undefined>;
  createArtist(artist: InsertArtist): Promise<Artist>;
  createContactMessage(msg: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class DatabaseStorage implements IStorage {
  async getArtists(): Promise<Artist[]> {
    return db.select().from(artists);
  }

  async getArtistBySlug(slug: string): Promise<Artist | undefined> {
    const [artist] = await db.select().from(artists).where(eq(artists.slug, slug));
    return artist;
  }

  async createArtist(artist: InsertArtist): Promise<Artist> {
    const [created] = await db.insert(artists).values(artist).returning();
    return created;
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
