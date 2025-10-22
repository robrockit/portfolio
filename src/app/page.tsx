"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { useScrollDepth } from "@/hooks/useScrollDepth";

export default function Home() {
  // Track scroll depth for analytics
  useScrollDepth();

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section with Animated Stats */}
      <About />

      {/* Experience Timeline */}
      <Experience />

      {/* Skills & Technologies */}
      <Skills />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Form */}
      <Contact />
    </div>
  );
}
