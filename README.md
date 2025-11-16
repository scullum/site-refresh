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

## 🏗️ Project Structure

```
scullum.com/
├── app/
│   ├── components/       # React components
│   ├── work/[slug]/      # Dynamic project pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── data/
│   └── content.ts        # All site content (single source of truth)
├── public/               # Static assets
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
  - Home (hero + "How I help")
  - About
  - Services
  - Work (project previews)
  - Contact

- **Project Pages** (`/work/[slug]`): Individual case studies
  - Ignition Zero & Project AIR
  - WWF Together
  - Verizon Express Store
  - AudiUSA.com

## 🎨 Design Features

- Mobile-first responsive design
- Smooth scroll navigation
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
