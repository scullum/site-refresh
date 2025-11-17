# Scott Cullum - Portfolio Site

A modern, performant portfolio website built with Next.js 14, showcasing professional services in creative technology, design, engineering, and AI-native product development.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (via next/font)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 🏗️ Project Structure

```
scullum.com/
├── app/
│   ├── components/       # React components
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── work/[slug]/      # Dynamic project pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── data/
│   └── content.ts        # All site content (single source of truth)
├── public/
│   └── images/           # Static assets (photos, etc.)
└── CLAUDE.md            # Developer documentation
```

## 📝 Content Management

All site content lives in `data/content.ts`. Update this file to:
- Change copy and messaging
- Add/remove services
- Add/remove projects
- Update contact information

No component code changes needed for content updates!

## 🛠️ Available Scripts

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Type check without building
```

## 🌐 Site Structure

- **Main Page** (`/`): Single-page scroll with sections:
  - Home (hero section with orange background)
  - "How I help" (full-width orange section)
  - Work (project previews)
  - Contact

- **About Page** (`/about`): Professional background and experience
  - Bio and approach
  - Interactive career timeline with scroll animations
  - Photo and personal details

- **Services Page** (`/services`): Detailed service offerings
  - Service descriptions
  - What's included
  - Good for sections

- **Project Pages** (`/work/[slug]`): Individual case studies
  - Ignition Zero & Project AIR
  - WWF Together
  - Verizon Express Store
  - AudiUSA.com

## 🎨 Design Features

- Mobile-first responsive design
- Orange accent color system (orange-600 for section headers and CTAs)
- Smooth scroll navigation with Intersection Observer
- Page transitions with Framer Motion (300ms fade)
- Interactive timeline with scroll-based animations
- Optimized font loading (next/font)
- SEO optimized (JSON-LD, Open Graph, Twitter Cards)
- Accessible (ARIA labels, keyboard navigation)

## 📱 Performance

- Static generation for optimal performance
- Minimal JavaScript bundle
- Server components by default
- Dynamic routes pre-rendered at build time

## 🔧 Environment Variables

Copy `.env.local.example` to `.env.local` and add your environment variables.

## 📄 License

All rights reserved © 2025 Scott Cullum
