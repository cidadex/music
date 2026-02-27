# IGAPÓ MUSIC - Website

## Overview
Website institucional para a IGAPÓ MUSIC, selo de distribuição musical brasileiro. Construído com React + TypeScript + Vite + Tailwind CSS v4 no frontend e Express + Drizzle ORM + PostgreSQL no backend.

## Architecture
- **Frontend**: React 18 + Vite + Tailwind CSS v4 + Framer Motion + Wouter (routing) + TanStack Query
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL (Neon) via Drizzle ORM
- **Styling**: Dark aesthetic com paleta Magenta (#ff4bd8), Cyan (#63c7ff), Lime Green (#a1f65e), Dark BG (#0b0c10)
- **Fonts**: Space Grotesk (body) + Outfit (display/headings)

## Project Structure
```
client/src/
  components/
    home/         - Hero, ArtistsPreview, Services, Positioning, Releases, Playlists, Cta
    layout/       - Navbar, Footer
    ui/           - shadcn/ui components
  hooks/          - useArtists.ts, useInstagram.ts (API data fetching)
  pages/          - home.tsx, artists.tsx, artist-detail.tsx
server/
  db.ts           - PostgreSQL connection (node-postgres + Drizzle)
  routes.ts       - API routes (/api/artists, /api/contact)
  storage.ts      - Database storage interface
shared/
  schema.ts       - Drizzle schema (artists, contactMessages tables)
```

## API Routes
- `GET /api/artists` - List all artists
- `GET /api/artists/:slug` - Get single artist by slug
- `POST /api/contact` - Submit contact form message
- `GET /api/instagram` - Fetch latest 6 Instagram posts (requires INSTAGRAM_ACCESS_TOKEN env var)

## Database Tables
- `artists` - id, slug, name, genre, short_bio, image, bio, latest_release, contact
- `contact_messages` - id, name, email, message, created_at

## Key Features
- Animated hero with gradient orbs and marquee text
- Artists grid with hover overlay effects
- Two-column positioning/manifesto section
- Services section with Lucide icons
- YouTube-backed playlists strip
- Pulsing CTA button
- Real Instagram feed in footer (2x3 grid, large images) with fallback to artist images
- Shimmer hover effects on navbar links
- Responsive design with mobile menu

## Brand Assets
- Logo (transparent): `@assets/WhatsApp_Image_2026-02-27_at_13.43.31_(1)_-_Editado_1772214168034.png`
- Artist images: `/src/assets/images/artist_1.jpg` through `artist_4.jpg`
