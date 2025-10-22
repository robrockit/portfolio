import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://robertrobinson.dev"
  ),
  title: "Robert Robinson | Engineering Manager",
  description:
    "Engineering Manager specializing in React, TypeScript, and modern web technologies. Building scalable applications and leading high-performing teams.",
  keywords: [
    "Robert Robinson",
    "Engineering Manager",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Frontend",
    "Full Stack",
    "Software Engineer",
  ],
  authors: [{ name: "Robert Robinson" }],
  creator: "Robert Robinson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Robert Robinson | Engineering Manager",
    description:
      "Engineering Manager specializing in React, TypeScript, and modern web technologies. Building scalable applications and leading high-performing teams.",
    siteName: "Robert Robinson Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Robert Robinson - Engineering Manager",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Robinson | Engineering Manager",
    description:
      "Engineering Manager specializing in React, TypeScript, and modern web technologies. Building scalable applications and leading high-performing teams.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Robert Robinson",
    jobTitle: "Engineering Manager",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://robertrobinson.dev",
    sameAs: [
      process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/robrockit",
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
        "https://www.linkedin.com/in/robert-robinson-engineering-manager/",
    ],
    email: "rrobinson022@gmail.com",
    description:
      "Engineering Manager specializing in React, TypeScript, and modern web technologies",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Skip to main content link for keyboard navigation */}
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          {/* Cookie Consent Banner */}
          <CookieConsent />
        </ThemeProvider>
        {/* Google Analytics 4 - Only loads in production with valid ID */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
            <GoogleAnalytics
              gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
            />
          )}
      </body>
    </html>
  );
}
