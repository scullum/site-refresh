# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based personal consultancy website (scullum.com) built with TypeScript, React, and Tailwind CSS. The site is a single-page application showcasing professional services in design, engineering, and AI-native product development.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with Inter font family (via next/font)
- **UI Library**: React 18 with lucide-react for icons
- **Package Manager**: npm (Node.js >= 18.17.0 required)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev

# Type checking (without emitting files)
npm run typecheck

# Lint the codebase
npm run lint

# Build for production
npm run build

# Start production server (runs on port 3000)
npm start
```

## Architecture

### App Structure

The application uses Next.js App Router with a single-page layout pattern:

- **app/layout.tsx**: Root layout with metadata, global styles, and JSON-LD structured data
- **app/page.tsx**: Main page component that composes all sections
- **app/globals.css**: Global styles including Tailwind directives and custom CSS
- **app/components/**: Individual section components
- **app/robots.ts**: Dynamic robots.txt generation
- **app/sitemap.ts**: Dynamic sitemap.xml generation
- **data/**: Content data and TypeScript interfaces

### Component Architecture

The site follows a section-based component architecture where each major section is an isolated component:

- **Navigation.tsx**: Top navigation bar with mobile menu (client component)
- **Home.tsx**: Hero section with main messaging
- **About.tsx**: About/background section
- **Services.tsx**: Services offered section (imports data from data/services.ts)
- **Work.tsx**: Portfolio/work examples section (imports data from data/projects.ts)
- **Footer.tsx**: Footer with contact information

All components are composed together in `app/page.tsx` in a single-page layout. Each component is a named export (not default export).

**Important**: Most components are server components by default. Only Navigation.tsx uses 'use client' directive for interactivity (mobile menu state).

### Data Management

Content data (services, projects) is stored separately from components:

- **data/types.ts**: TypeScript interfaces for Service and Project
- **data/services.ts**: Services content array
- **data/projects.ts**: Projects/work content array

This separation allows for easier content updates without modifying component code.

### Styling Approach

- Uses Tailwind CSS utility classes exclusively
- Custom font: Inter (loaded via next/font for optimal performance)
- Responsive breakpoints: md, lg variants used throughout
- Color palette: neutral grays with neutral-900 for primary text, orange-600 for accents
- Smooth scroll behavior enabled globally
- Mobile-first responsive design with hamburger menu on mobile

### Configuration

- **Path alias**: `@/*` maps to project root (configured in tsconfig.json)
- **TypeScript**: Strict mode enabled, targeting ES2017
- **Module resolution**: bundler mode for Next.js compatibility
- **ESLint**: Extends `next/core-web-vitals` configuration

## Port Configuration

Both development and production servers are explicitly configured to run on port 3000 (via `-p 3000` flag in package.json scripts).

## SEO & Metadata

- Structured data (JSON-LD) for Person schema in app/layout.tsx
- Open Graph and Twitter Card metadata configured
- Dynamic robots.txt via app/robots.ts
- Dynamic sitemap.xml via app/sitemap.ts
- metadataBase set to https://scullum.com

## Environment Variables

See `.env.local.example` for template. Environment variables should be stored in `.env.local` (gitignored).
