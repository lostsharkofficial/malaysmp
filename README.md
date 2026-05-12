# MalaySMP Website

A cinematic, atmospheric website for the MalaySMP Minecraft community — inspired by a game main-menu aesthetic with ember particles, a golden title, and ambient background music.

---

## 📁 File Structure

```
malaysmp/
├── index.html        ← Main menu / landing page
├── events.html       ← Events page
├── gallery.html      ← Screenshot gallery
├── media.html        ← Videos & social links
├── about.html        ← About the community
├── inner.css         ← Shared styles for inner pages
├── shell.js          ← Shared logic for inner pages
├── config.js         ← 🔧 CHANGE PHOTO & MUSIC HERE
├── README.md         ← This file
└── assets/
    ├── images/
    │   ├── gallery/  ← Drop gallery screenshots here
    │   └── team/     ← Drop team member photos here
    └── music/        ← Drop your .mp3 ambient track here
```

---

## 🔧 Changing the Background Photo

Open **`config.js`** and edit the `background` line:

```js
// Use a local photo (recommended):
background: "assets/images/my-mountain-photo.jpg",

// Or use a free Unsplash URL:
background: "https://images.unsplash.com/photo-XXXXXXX?w=1920&q=80",
```

**Free atmospheric photos:** https://unsplash.com/s/photos/mountain-night  
Download at **1920×1080** or higher. Save to `assets/images/` and update the path.

---

## 🎵 Changing the Background Music

1. Get an ambient/orchestral `.mp3` file (royalty-free sources below).
2. Drop it into `assets/music/`.
3. Open **`config.js`** and update:

```js
music: "assets/music/your-track.mp3",
volume: 0.30,  // 0.0 = silent, 1.0 = full
```

**Free royalty-free music sources:**
- https://pixabay.com/music/ (search "ambient" or "orchestral")
- https://freemusicarchive.org
- https://www.zapsplat.com

---

## 🚀 Publishing to GitHub Pages — Step by Step

### Step 1 — Create a GitHub account
Go to https://github.com and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** button (top-right) → **New repository**
2. Name it: `malaysmp` (or `malaysmp-website`)
3. Set it to **Public** ✅
4. **Do NOT** tick "Add README" (you already have one)
5. Click **Create repository**

### Step 3 — Install Git (if you haven't)
- **Windows:** https://git-scm.com/download/win
- **Mac:** Run `git --version` in Terminal; it'll prompt to install
- **Linux:** `sudo apt install git`

### Step 4 — Open Terminal / Command Prompt
Navigate to your project folder:
```bash
cd path/to/malaysmp
```

### Step 5 — Initialise and push
```bash
git init
git add .
git commit -m "Initial commit: MalaySMP website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/malaysmp.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your GitHub username.

### Step 6 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top tab)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Branch: **main** | Folder: **/ (root)**
6. Click **Save**

### Step 7 — Your site is live! 🎉
After ~1 minute, your site will be at:
```
https://YOUR_USERNAME.github.io/malaysmp/
```

### Updating the site later
Whenever you make changes, run:
```bash
git add .
git commit -m "Update: describe what you changed"
git push
```
GitHub Pages auto-deploys within seconds.

---

## ✏️ How to Customise Content

### Add Gallery Photos
1. Put your screenshot in `assets/images/gallery/spawn.jpg`
2. Open `gallery.html`, find the `<!-- EXAMPLE -->` comment, and uncomment it:
```html
<div class="gallery-item" onclick="openLightbox(this)">
  <img src="assets/images/gallery/spawn.jpg" alt="Spawn area" loading="lazy" />
  <span class="gallery-item-label">The Spawn — Season 2</span>
</div>
```

### Add YouTube Videos
Open `media.html`. Replace the placeholder div with an iframe:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allowfullscreen></iframe>
```
Get the ID from the YouTube URL: `watch?v=`**dQw4w9WgXcQ** → ID = `dQw4w9WgXcQ`

### Add Team Members
Open `about.html` and copy one `team-card` block:
```html
<div class="team-card">
  <div class="team-avatar">🎮</div>
  <p class="team-name">PlayerName</p>
  <p class="team-role">Their Role</p>
</div>
```

### Add Discord / Social Links
In `media.html` and `about.html`, find the `href="#"` links and replace `#` with your real URLs.

### Add Events
Open `events.html` and copy a `card` block — update the tag, icon, title, and description.

---

## 💡 Improvement Suggestions

### High Impact
- **Custom domain** — Buy `malaysmp.gg` or `malaysmp.com` (~$10–15/yr) and connect it to GitHub Pages for a professional URL.
- **Discord widget** — Embed a live Discord member count / online status widget from discordapp.com/widget.
- **Particle config** — Add a `particles` setting in `config.js` to let you control ember count, colors, and speed.
- **Season countdown** — Add a countdown timer on the homepage showing days until the next season launch.

### Medium Impact
- **Loading screen** — A fullscreen loader with the MalaySMP logo that fades out once the background image has loaded.
- **Scroll animations** — Use the Intersection Observer API to animate cards in as you scroll down on inner pages.
- **Search/filter on Events** — Add filter buttons (Upcoming / Ongoing / Past) to the events page.
- **Gallery categories** — Add tabs for Builds | PvP | Events in the gallery.

### Nice to Have
- **Dark / light toggle** — Swap to a lighter parchment theme for daytime aesthetics.
- **Multilingual support** — Add a 🇲🇾 / 🇬🇧 toggle for Bahasa Malaysia and English.
- **OG meta tags** — Add Open Graph tags so Discord / WhatsApp shows a preview card when someone shares the link.
- **Favicon** — Add a 32×32 pixel favicon (your logo or a flame icon).
- **Cookie-free analytics** — Use Plausible.io or Umami for privacy-friendly visitor counts.
- **PWA / installable** — Add a Web App Manifest so mobile users can install it like an app.

---

*Built with HTML, CSS & vanilla JS. No frameworks needed.*
