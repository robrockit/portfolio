# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, featuring smooth animations powered by Framer Motion.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Build Tool:** [Turbopack](https://turbo.build/pack)
- **Code Quality:** ESLint, Prettier

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

## 🛠️ Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your specific configuration values.

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit files in the `src/app` directory.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript compiler check

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with font configuration
│   │   ├── page.tsx      # Component showcase page
│   │   └── globals.css   # Global styles & Tailwind config
│   ├── components/       # React components
│   │   └── ui/          # Reusable UI component library
│   │       ├── Button.tsx      # Button component with variants
│   │       ├── Card.tsx        # Card component with subcomponents
│   │       ├── Container.tsx   # Layout container component
│   │       ├── Section.tsx     # Section wrapper component
│   │       ├── Badge.tsx       # Badge/tag component
│   │       └── index.ts        # Barrel export file
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── .env.example         # Environment variables template
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Design System

### Theme Configuration

The custom theme is defined in `src/app/globals.css` using CSS variables:

- **Colors:** Primary, secondary, accent, muted, and semantic colors
- **Typography:** Inter for body text, Space Grotesk for headings
- **Spacing:** Consistent section spacing with responsive adjustments
- **Animations:** Duration variables for smooth transitions (fast: 150ms, normal: 300ms, slow: 500ms)
- **Dark Mode:** Automatic dark mode support based on system preferences

### UI Component Library

A comprehensive set of reusable components built with TypeScript and Tailwind CSS:

#### Button

Flexible button component with multiple variants and sizes.

```tsx
import { Button } from "@/components/ui";

// Variants: primary, secondary, ghost
// Sizes: sm, md, lg
<Button variant="primary" size="md">Click me</Button>
<Button variant="secondary" size="lg">Secondary</Button>
<Button variant="ghost" disabled>Disabled</Button>
```

**Props:**

- `variant?: "primary" | "secondary" | "ghost"` - Visual style (default: "primary")
- `size?: "sm" | "md" | "lg"` - Button size (default: "md")
- All standard HTML button attributes

**Features:**

- Accessible with focus ring and keyboard navigation
- Active state with scale animation
- Disabled state support
- Smooth transitions using theme duration variables

---

#### Card

Versatile card component with optional hover effects and subcomponents.

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";

<Card hover={true}>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>;
```

**Props:**

- `hover?: boolean` - Enable hover effects (default: true)
- All standard HTML div attributes

**Features:**

- Hover lift effect with shadow
- Border highlight on hover
- Compositional design with subcomponents
- Works perfectly in both light and dark themes

---

#### Container & Section

Layout components for consistent spacing and max-width constraints.

```tsx
import { Container, Section } from "@/components/ui";

// Container with max-width
<Container size="lg">
  {/* Content */}
</Container>

// Section with vertical spacing
<Section spacing="lg">
  <Container>
    {/* Page section content */}
  </Container>
</Section>
```

**Container Props:**

- `size?: "sm" | "md" | "lg" | "xl" | "full"` - Max-width (default: "lg")
  - sm: 768px
  - md: 1024px
  - lg: 1280px
  - xl: 1536px
  - full: 100%

**Section Props:**

- `spacing?: "sm" | "md" | "lg" | "none"` - Vertical padding (default: "lg")

---

#### Badge

Compact component for labels, tags, and status indicators.

```tsx
import { Badge } from "@/components/ui";

// Variants: default, primary, secondary, success, warning, error
// Sizes: sm, md
<Badge variant="primary">Featured</Badge>
<Badge variant="success" size="sm">New</Badge>
<Badge variant="error">Error</Badge>
```

**Props:**

- `variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error"` - Visual style (default: "default")
- `size?: "sm" | "md"` - Badge size (default: "md")

**Features:**

- Multiple color variants for different contexts
- Semantic colors (success, warning, error)
- Consistent with theme color palette
- Works in light and dark modes

---

### Tailwind CSS

This project uses Tailwind CSS v4 with the new `@theme` directive. Customize the theme by modifying the CSS variables in `src/app/globals.css`.

### Typography Scale

Responsive typography using CSS `clamp()` for fluid sizing:

- **H1:** 2.5rem - 4rem (40px - 64px)
- **H2:** 2rem - 3rem (32px - 48px)
- **H3:** 1.5rem - 2.25rem (24px - 36px)
- **Body:** 1rem with 1.7 line-height

All headings use Space Grotesk (display font), body text uses Inter (sans-serif).

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be deployed with automatic deployments on every push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables

Don't forget to add your environment variables in the Vercel dashboard:

- Go to Project Settings → Environment Variables
- Add all variables from your `.env.local` file

## 🧪 Code Quality

This project uses:

- **ESLint** for code linting with Next.js and TypeScript rules
- **Prettier** for consistent code formatting with Tailwind CSS plugin
- **TypeScript** for type safety

Run checks before committing:

```bash
npm run lint:fix
npm run format
npm run type-check
```

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Next.js App Router](https://nextjs.org/docs/app) - Learn about the App Router
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

### Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js and modern web technologies
