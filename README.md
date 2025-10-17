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
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles & Tailwind config
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
├── .env.example         # Environment variables template
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization

### Theme Configuration

The custom theme is defined in `src/app/globals.css` using CSS variables:

- **Colors:** Primary, secondary, accent, muted, and semantic colors
- **Typography:** Custom font families (Geist Sans & Geist Mono)
- **Spacing:** Consistent section spacing
- **Animations:** Duration variables for smooth transitions
- **Dark Mode:** Automatic dark mode support based on system preferences

### Tailwind CSS

This project uses Tailwind CSS v4 with the new `@theme` directive. Customize the theme by modifying the CSS variables in `src/app/globals.css`.

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
