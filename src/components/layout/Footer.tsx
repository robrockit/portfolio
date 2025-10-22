"use client";

import { useState, useEffect } from "react";
import { Container } from "../ui";
import { Github, Linkedin, Mail, Download, ArrowUp } from "lucide-react";
import {
  trackExternalLinkClick,
  trackResumeDownload,
} from "@/lib/analytics";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: process.env.NEXT_PUBLIC_GITHUB_URL || "#",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:rrobinson022@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="border-border bg-muted/30 relative border-t">
      <Container size="xl">
        <div className="py-8 md:py-12">
          {/* Main Footer Content */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Robert Robinson</h3>
              <p className="text-muted-foreground text-sm">
                Building exceptional digital experiences with modern web
                technologies.
              </p>
              {/* Resume Download Button */}
              <a
                href="/public/Robert_Robinson_Resume.pdf"
                download="Robert_Robinson_Resume.pdf"
                onClick={trackResumeDownload}
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    onClick={() => trackExternalLinkClick(link.name, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-border text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
            <p className="mb-2">
              © {currentYear} Robert Robinson • Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackExternalLinkClick("Next.js", "https://nextjs.org")}
                className="hover:text-primary transition-colors"
              >
                Next.js
              </a>
              ,{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackExternalLinkClick("Tailwind CSS", "https://tailwindcss.com")}
                className="hover:text-primary transition-colors"
              >
                Tailwind CSS
              </a>
              , and{" "}
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackExternalLinkClick("Framer Motion", "https://www.framer.com/motion/")}
                className="hover:text-primary transition-colors"
              >
                Framer Motion
              </a>
              .
            </p>
            <p className="text-xs">
              This site uses Google Analytics to improve user experience.{" "}
              <a
                href="#privacy"
                className="hover:text-primary underline transition-colors"
              >
                Privacy & Cookies
              </a>
            </p>
          </div>
        </div>
      </Container>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="bg-primary text-primary-foreground hover:bg-primary/90 fixed bottom-8 right-8 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
