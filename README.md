# VA Claims AI

Marketing site for VA Claims AI consulting services.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Google Material Symbols

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | TypeScript check + production build |
| `npm run lint` | ESLint check |
| `npm run preview` | Preview production build |

## Deployment

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting  # public: dist, SPA: yes
npm run build
firebase deploy
```

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Page sections (Hero, Demo, etc.)
│   ├── ui/         # Reusable primitives (Button, Card, Modal)
│   └── demo/       # Demo-specific components
├── App.tsx
├── main.tsx
└── index.css
```
