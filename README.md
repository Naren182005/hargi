# HarGi Agro Products — Interactive Scrollytelling Web Experience

> **Natural Agro Products, Sourced with Care.**  
> An Awwwards-inspired scrollytelling web platform for **HarGi Agro Products Private Limited**, showcasing South India's premium agricultural exports (coconut derivatives, traditional jaggery, aromatic spices, and superfoods) through 60 FPS HTML5 canvas frame scrubbing, interactive physics-based card spreads, and dynamic scroll interactions.

---

## 🌟 Key Highlights & Features

- 🎞️ **60 FPS Canvas Scrollytelling**: 51 high-resolution 2K sequence frames rendered seamlessly onto an HTML5 Canvas with buttery spring inertia (`useSpring`) and hardware-accelerated device pixel ratio scaling.
- 🌾 **Interactive Stack-Spread Showcase**: Physics-driven spreading card stack spotlighting harvest essentials (Green Cardamom, Specialty Coffee, Malabar Black Pepper, Turmeric, Coconuts, Coco Peat, Cashews, and Ceylon Cinnamon) with touch and desktop responsive adapters.
- ⚡ **Dual Velocity Marquee Ribbons**: Infinite scroll-velocity typography banners with direction reversals and momentum-accelerated typography.
- 📦 **Stably Aligned 3D Product Catalog Grid**: Responsive 3-column agro export catalog featuring Indian Spices, Coconut Derivatives, Jaggery, and Superfoods with smooth staggered reveals and interactive card elevation states.
- 🚢 **Global Maritime Trade Desk**: Direct inquiry terminal and business contact portal integrated with APEDA, FSSAI, Spices Board India, and Coconut Development Board export credentials.
- 🌊 **Lenis Momentum Scrolling**: Ultra-smooth inertia scroll synchronization across all section layers.
- 📱 **Fully Responsive**: Pixel-perfect layout tailored for 4K desktop screens, laptops, tablets, and mobile smartphones.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Design Tokens (`--accent-green: #0f5132`, `--accent-emerald: #15803d`)
- **Animation & Physics**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Canvas Rendering**: Native HTML5 Canvas 2D with requestAnimationFrame sync

---

## 📂 Project Structure

```text
Personal-portfolio-main/
├── public/
│   ├── sequence/               # 51 high-resolution scrollytelling frame images (frame_0001.jpg - frame_0051.jpg)
│   └── products/               # High-res agro product imagery
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind directives, CSS variables, and glassmorphism styling
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   └── page.tsx            # Main scrollytelling page flow
│   ├── components/
│   │   ├── 3D/
│   │   │   ├── Contact3D.tsx         # Trade desk contact form & business hours
│   │   │   ├── HeroSplit3D.tsx       # 3D interactive split accordion pillars
│   │   │   └── ProductShowcase3D.tsx # 3-column product catalog showcase
│   │   ├── CanvasScroller/
│   │   │   ├── HarGiOverlay.tsx      # Scrollytelling text & badge overlay
│   │   │   └── ScrollyCanvas.tsx     # 51-frame canvas rendering engine
│   │   ├── Navigation/
│   │   │   ├── Navbar.tsx            # Sticky frosted-glass navigation bar
│   │   │   └── Footer3D.tsx          # Brand footer with corporate links
│   │   ├── UI/
│   │   │   ├── ScrollVelocity.tsx    # Marquee velocity ribbon component
│   │   │   ├── SmoothScrollProvider.tsx # Lenis smooth scroll provider
│   │   │   └── stack-spread.tsx      # Interactive scatter-spread card component
│   │   └── lightswind/
│   │       └── cinematic-scroll.tsx  # Progressive scroll blur layer
│   └── data/
│       ├── hargiData.ts         # Company certifications, stats, and pillar items
│       └── hargiProductsData.ts # Catalog items, specifications, and categories
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.17 or higher recommended) installed.

### Installation

1. Clone or open the repository:
```bash
cd Personal-portfolio-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the local development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```text
http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## 🌾 Featured Agro Products

| Category | Products | Primary Origins |
| :--- | :--- | :--- |
| **Coconut Derivatives** | Virgin Coconut Oil, Desiccated Flakes, Coco Peat Blocks, Shell Charcoal | Pollachi, Tamil Nadu & Western Ghats |
| **Traditional Jaggery** | Pure Cane Cubes, Organic Jaggery Powder, Palm Karupatti | Erode & Salem Agricultural Belt |
| **Indian Spices** | Green Cardamom, Malabar Black Pepper, Pure Turmeric, Mustard Seeds, Cumin | Idukki, Western Ghats & Guntur |
| **Nuts & Dried Fruits** | Export Grade Cashew Nuts, Golden Raisins | Panruti & Sangli |

---

## 📬 Corporate & Trade Desk Contact

- **Company**: HarGi Agro Products Private Limited
- **Brand**: HarGi Agro
- **Headquarters**: South India Agricultural Corridor, Tamil Nadu, India
- **Phone / WhatsApp**: +91 77799 55393
- **Email**: info@hagitechsol.com
- **Website**: [hagitechsol.com](https://hagitechsol.com/)
- **Export Seaports**: Tuticorin Port (V.O. Chidambaranar), Cochin Seaport, Chennai Port
