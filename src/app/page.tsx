import { Container, Section } from "@/components/ui";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section with Animated Stats */}
      <About />

      {/* Experience Timeline */}
      <Experience />

      {/* Testimonials Section */}
      <Section id="testimonials" spacing="lg" className="bg-muted/30">
        <Container size="lg">
          <h2 className="mb-12">What People Say</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Exceptional developer with great attention to detail. Delivered our project ahead of schedule.",
                author: "Jane Doe",
                role: "CEO, Tech Startup",
              },
              {
                quote:
                  "A true professional who brings creativity and technical expertise to every project.",
                author: "John Smith",
                role: "Product Manager",
              },
              {
                quote:
                  "Outstanding work ethic and communication skills. Would highly recommend!",
                author: "Sarah Johnson",
                role: "Design Lead",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="border-border bg-card rounded-xl border p-6 transition-all hover:shadow-lg"
              >
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-border border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

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
                href="mailto:your.email@example.com"
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
