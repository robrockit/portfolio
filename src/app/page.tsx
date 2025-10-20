import { Container, Section } from "@/components/ui";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Testimonials } from "@/components/sections/Testimonials";

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

      {/* Contact Section */}
      <Section id="contact" spacing="lg">
        <Container size="lg">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8 text-xl">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:rrobinson022@gmail.com"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Email
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background hover:bg-muted inline-flex items-center justify-center rounded-lg border px-6 py-3 font-medium transition-all"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
