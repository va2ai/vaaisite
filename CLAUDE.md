# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # TypeScript check + production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## Architecture

This is a React 18 + TypeScript + Vite marketing site for VA Claims AI consulting services.

### Tech Stack
- **Vite** for build tooling
- **Tailwind CSS** for styling (with custom fonts: Inter for body, Merriweather for headings)
- **Google Material Symbols** for icons (loaded via CDN in index.html)

### Component Organization

Components follow a section-based architecture in `src/components/`:

- **`layout/`** - Navbar and Footer (app shell)
- **`sections/`** - Full-page sections composed in App.tsx (Hero, Demo, SocialProof, etc.)
- **`ui/`** - Reusable primitives (Button, Card, Modal)
- **`demo/`** - Complex demo-specific components (DocumentViewer, AnalysisPanel)

### State Management

No global state library. State flows through:

1. **Modal state** - Managed by `useModal` hook in App.tsx, passed down via `onOpenModal` prop
2. **Demo state** - Self-contained in Demo.tsx with local useState for tabs, scanning animation, and results display

### Key Patterns

**Modal System**: Components that trigger modals receive `onOpenModal: (type: 'consultation' | 'assessment') => void` prop. The Modal component renders conditionally at the App level.

**Demo Animation**: The Demo section has a scanning animation that cycles through document tabs, controlled by `setInterval` with cleanup in `runDemo()`.

**Mobile Optimizations** (2026-01-30):
- **Testimonial Carousel** (SocialProof.tsx) - Horizontal swipe on mobile, grid on desktop
- **Engagement Models Horizontal Scroll** (EngagementModels.tsx) - Snap scrolling with peek effect on mobile
- **Capabilities Accordion** (Capabilities.tsx) - Collapsible on mobile, expanded grid on desktop
- **Sticky CTA** (StickyCTA.tsx) - Mobile-only fixed bottom CTA appearing after 300px scroll
- **Stats Grid** - 2×2 grid layout on mobile instead of vertical stack
- **Touch Targets** - All interactive elements meet 44px minimum height on mobile

**Custom CSS Classes** (in `src/index.css`):
- `.tab-btn` / `.tab-content` - Tab switching with underline animation
- `.scanner-line` - Animated scanning effect
- `.highlight-text` / `.highlight-active` - Document citation highlighting
- `.pdf-scroll` - Custom scrollbar for document viewer
- `.scrollbar-hide` - Hide scrollbar while maintaining scroll functionality
- `.snap-x` / `.snap-center` - Smooth snap scrolling for horizontal containers
- `.accordion-content` - Smooth max-height transitions for accordions

### External Resources

Fonts and icons are loaded via CDN in `index.html`. Static images are hosted at `r2.vaclaims.net`.

## Deployment History

### 2026-01-30 - Mobile UX Optimizations
- Implemented comprehensive mobile improvements to reduce scroll fatigue
- Added horizontal interactions (carousels, scrolling containers)
- Implemented accordions for dense content sections
- Added sticky CTA for improved mobile conversion
- Optimized touch targets and hero section copy
- Deployed to: https://genai-472223.web.app
- Commit: 0fd62b4
