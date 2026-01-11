# Huh - Productivity App Landing Page

A modern, animated landing page for **Huh** - a productivity application that helps users reflect, strategize, and monitor their tasks effectively.

## Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Interactive Elements** - Draggable background elements with physics-based animations
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI** - Built with shadcn/ui components and Radix primitives
- **Optimized Performance** - Next.js Image optimization and lazy loading

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.5.3 | React framework with App Router |
| [React](https://react.dev/) | 19.1.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations & gestures |
| [shadcn/ui](https://ui.shadcn.com/) | - | Component library |
| [Radix UI](https://www.radix-ui.com/) | - | Accessible primitives |
| [Lucide React](https://lucide.dev/) | 0.544.0 | Icon library |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page composition
│   ├── globals.css         # Global styles & Tailwind config
│   └── favicon.ico
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section with typewriter effect
│   │   ├── Demo.tsx        # App demo showcase
│   │   ├── Features.tsx    # Features grid
│   │   ├── Pricing.tsx     # Pricing plans
│   │   └── Footer.tsx      # Site footer
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── separator.tsx
│   │   └── carousel.tsx
│   ├── svg/                # SVG components
│   ├── BackgroundElements.tsx  # Interactive draggable elements
│   ├── TypeWriter.tsx      # Typewriter animation
│   └── MaxWidthWrapper.tsx # Responsive container
├── lib/
│   └── utils.ts            # Utility functions (cn)
└── hooks/                  # Custom React hooks
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm, npm, or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/huh-landing.git
cd huh-landing
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run Biome linter |
| `npm run format` | Format code with Biome |

## Sections

### Hero
- Full-viewport hero with grid pattern background
- Typewriter animation for tagline
- App Store and Google Play download buttons
- Interactive draggable background elements (desktop only)

### Demo
- Large app screenshot showcase
- Fade-in animations on scroll

### Features
- 2x3 grid layout (mobile) / 3x2 grid (desktop)
- Four feature cards:
  - Advanced Task Tracking
  - Time Management Tools
  - AI Integration
  - Template Gallery

### Pricing
- Three pricing tiers: Free, Premium, Pro
- Feature comparison with checkmarks
- Animated card appearance

### Footer
- Navigation links
- Social media links
- Copyright information

## Customization

### Colors
Edit the CSS variables in `src/app/globals.css` to customize the color scheme:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}
```

### Components
The project uses shadcn/ui. Add new components with:

```bash
npx shadcn@latest add [component-name]
```

## Performance

- **Image Optimization**: Next.js Image component with priority loading for LCP
- **Code Splitting**: Automatic with Next.js App Router
- **Animation Performance**: GPU-accelerated Framer Motion animations
- **Font Loading**: Next.js font optimization with Inter

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

---

Built with Next.js and Framer Motion
