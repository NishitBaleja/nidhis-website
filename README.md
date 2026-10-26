# Jackie Zhang Portfolio Clone (jackiezhang.co.za)

100% same-to-same, pixel-perfect replica of [Jackie Zhang's portfolio](https://jackiezhang.co.za/) featuring the exact layout, interactive sketchbook structure, dynamic animations, stickers, cutting mat showcase, and case studies.

---

## 🌟 Features Included

- **Exact Visual Hierarchy & Aesthetic**:
  - **Sketchbook / Notebook Concept**: Realistic leather texture, binder rings, bookmark ribbons, and rim lighting.
  - **Interactive Doodles & Stickers**: Juicebox, Godzilla, Noodle bowl, Lucky Cat, Hornbill, Aeropress, flowers, and fish stickers.
  - **Animated Navigation**: Dynamic interactive face avatar and doodle hover reveals on "About", "Work", and "Connect".
  - **Values Block**: 3 core design principles with interactive 3D perspective pop-out cards.
  - **Cutting Mat Showcase**: Pinned polaroids, metric grid ruler (11–18), self-healing mat texture, and handwritten notes ("Everything you do, do it with care").
  - **Interactive Checklist & Contact**: Custom checkboxes, "let's chat!" call card, and email link (`lapsun.j.zhang@gmail.com`).
  - **Easter Egg**: Hidden John Denver "Country Roads" lyrics banner.

- **Complete Pages & Routes**:
  - `/` — Main interactive portfolio (Home)
  - `/about` — About Jackie (Personal story, principles, what fuels his soul)
  - `/work` — Work showcase (Bash, Pulse, Heygo, Dotslash, TF2048, Who's Speaking, Triple Time, ResQued)
  - `/case-studies/heygo-creator` — In-depth Heygo case study
  - `/case-studies/pulse-event` — Pulse Event case study
  - `/case-studies/balwin-fibre` — Balwin Fibre case study
  - `/case-studies/resqued` — Resqued case study

---

## 🚀 How to Run Locally

You can run the site using Node.js without needing to install any external dependencies:

```bash
# Option 1: Start with npm
npm start

# Option 2: Start with dev command
npm run dev

# Option 3: Direct node command
node server.js
```

Then open your browser at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Directory Structure

```
├── index.html                           # Home Page (Interactive Sketchbook)
├── server.js                            # Clean-URL & SPA dev server (zero dependencies)
├── package.json                         # Project configuration and run scripts
├── about/
│   └── index.html                       # About Page
├── about.html                           # Standalone About Page
├── work/
│   └── index.html                       # Work Showcase Page
├── work.html                            # Standalone Work Page
├── case-studies/
│   ├── heygo-creator/index.html         # Heygo Creator Case Study
│   ├── pulse-event/index.html           # Pulse Event Case Study
│   ├── balwin-fibre/index.html          # Balwin Fibre Case Study
│   └── resqued/index.html               # Resqued Case Study
└── README.md                            # Documentation
```

---

## 🎨 Typography & Design Tokens
- **Fonts**: *Awesome Serif*, *DM Sans*, *IBM Plex Sans*, *Lilita One*, *Delicious Handrawn*, *Gochi Hand*, *Inter*, *JetBrains Mono*, *Departure Mono*.
- **Palette**: Sleek dark aesthetic (`rgb(33, 33, 33)`), warm cream paper tones (`#f0e5cc`, `#f2e3cf`), vibrant primary accents (blue `#2754a9`, coral red `#f86c69`, yellow `#edbe24`).
