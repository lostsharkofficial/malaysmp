/**
 * ╔══════════════════════════════════════════╗
 * ║         MalaySMP — Site Config           ║
 * ╚══════════════════════════════════════════╝
 *
 * ▸ BACKGROUND PHOTO
 *   To use a LOCAL photo:
 *     background: "assets/images/your-photo.jpg"
 *   To use an online URL:
 *     background: "https://example.com/photo.jpg"
 *   Free atmospheric photos: https://unsplash.com/s/photos/mountain-night
 *
 * ▸ BACKGROUND MUSIC
 *   To use a LOCAL file:
 *     music: "assets/music/your-track.mp3"
 *   To use an online URL:
 *     music: "https://example.com/track.mp3"
 *   Recommended: soft ambient/orchestral tracks at low volume
 *
 * ▸ VOLUME  (0.0 = silent, 1.0 = full blast)
 */

const CONFIG = {

  /* ── Background image ──────────────────────── */
  background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",

  /* ── Fallback if background fails to load ──── */
  backgroundFallback: "#0a0a0a",

  /* ── Background music ──────────────────────── */
  music: "assets/music/ambient.mp3",       // ← drop your .mp3 here

  /* ── Music volume ──────────────────────────── */
  volume: 0.30,

  /* ── Site metadata ──────────────────────────── */
  siteName:    "MalaySMP",
  siteTagline: "A Community Beyond the Horizon",
  version:     "v 1.0",

};
