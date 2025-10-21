import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
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
