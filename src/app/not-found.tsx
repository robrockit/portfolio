"use client";

import Link from "next/link";
import { Container } from "@/components/ui";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container size="md">
        <div className="text-center">
          {/* 404 Number */}
          <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-9xl font-bold text-transparent">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-foreground mb-4 text-3xl font-bold">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all hover:scale-105"
            >
              <Home className="h-5 w-5" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border-border bg-background hover:bg-muted inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-semibold transition-all hover:scale-105"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="text-muted-foreground mt-12">
            <p className="mb-4 text-sm">Or explore these sections:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#about"
                className="hover:text-primary text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="hover:text-primary text-sm transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#skills"
                className="hover:text-primary text-sm transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-primary text-sm transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="hover:text-primary text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
