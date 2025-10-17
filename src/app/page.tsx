"use client";

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Container,
  Section,
  Badge,
} from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section spacing="lg">
        <Container size="lg">
          <div className="text-center">
            <Badge variant="primary" className="mb-4">
              Design System v1.0
            </Badge>
            <h1>Portfolio Design System</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              A comprehensive component library built with Next.js 15,
              TypeScript, Tailwind CSS, and Framer Motion.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="secondary" size="lg">
                View Components
              </Button>
              <Button variant="ghost" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Typography Section */}
      <Section spacing="lg" className="bg-muted/30">
        <Container size="lg">
          <h2 className="mb-8">Typography Scale</h2>
          <div className="space-y-6">
            <div>
              <h1>Heading 1 - Space Grotesk</h1>
              <p className="text-muted-foreground">
                Font size: clamp(2.5rem, 5vw, 4rem)
              </p>
            </div>
            <div>
              <h2>Heading 2 - Space Grotesk</h2>
              <p className="text-muted-foreground">
                Font size: clamp(2rem, 4vw, 3rem)
              </p>
            </div>
            <div>
              <h3>Heading 3 - Space Grotesk</h3>
              <p className="text-muted-foreground">
                Font size: clamp(1.5rem, 3vw, 2.25rem)
              </p>
            </div>
            <div>
              <p className="text-lg">
                Body text uses Inter font family with a comfortable line-height
                of 1.7 for optimal readability. This ensures your content is
                easy to read across all devices.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons Section */}
      <Section spacing="lg">
        <Container size="lg">
          <h2 className="mb-8">Button Variants & Sizes</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-4">Primary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
                <Button variant="primary" size="md" disabled>
                  Disabled
                </Button>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Secondary Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">
                  Small
                </Button>
                <Button variant="secondary" size="md">
                  Medium
                </Button>
                <Button variant="secondary" size="lg">
                  Large
                </Button>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Ghost Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost" size="sm">
                  Small
                </Button>
                <Button variant="ghost" size="md">
                  Medium
                </Button>
                <Button variant="ghost" size="lg">
                  Large
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cards Section */}
      <Section spacing="lg" className="bg-muted/30">
        <Container size="lg">
          <h2 className="mb-8">Card Components</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Badge variant="primary" size="sm" className="mb-2 w-fit">
                  Featured
                </Badge>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>
                  Cards with hover effects for enhanced interactivity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  This card includes a smooth hover animation with lift effect
                  and shadow. Perfect for project showcases and feature
                  highlights.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">
                  Learn More →
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="success" size="sm" className="mb-2 w-fit">
                  New
                </Badge>
                <CardTitle>Design System</CardTitle>
                <CardDescription>
                  Built with TypeScript and Tailwind CSS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A comprehensive set of reusable components following best
                  practices and accessibility standards.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm">
                  Explore
                </Button>
              </CardFooter>
            </Card>

            <Card hover={false}>
              <CardHeader>
                <Badge variant="secondary" size="sm" className="mb-2 w-fit">
                  Info
                </Badge>
                <CardTitle>Static Card</CardTitle>
                <CardDescription>
                  Cards can be static without hover effects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  This card has hover disabled, making it perfect for displaying
                  static information or content that doesn&apos;t require
                  interaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Badges Section */}
      <Section spacing="lg">
        <Container size="lg">
          <h2 className="mb-8">Badge Variants</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-4">Medium Size</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Small Size</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default" size="sm">
                  Default
                </Badge>
                <Badge variant="primary" size="sm">
                  Primary
                </Badge>
                <Badge variant="secondary" size="sm">
                  Secondary
                </Badge>
                <Badge variant="success" size="sm">
                  Success
                </Badge>
                <Badge variant="warning" size="sm">
                  Warning
                </Badge>
                <Badge variant="error" size="sm">
                  Error
                </Badge>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Container Sizes Section */}
      <Section spacing="lg" className="bg-muted/30">
        <div className="space-y-8">
          <Container size="sm">
            <div className="bg-primary/10 border-primary/20 rounded-lg border p-6">
              <h3 className="mb-2">Small Container</h3>
              <p className="text-muted-foreground">Max-width: 768px</p>
            </div>
          </Container>
          <Container size="md">
            <div className="bg-secondary/10 border-secondary/20 rounded-lg border p-6">
              <h3 className="mb-2">Medium Container</h3>
              <p className="text-muted-foreground">Max-width: 1024px</p>
            </div>
          </Container>
          <Container size="lg">
            <div className="bg-accent/10 border-accent/20 rounded-lg border p-6">
              <h3 className="mb-2">Large Container</h3>
              <p className="text-muted-foreground">Max-width: 1280px</p>
            </div>
          </Container>
        </div>
      </Section>

      {/* Footer */}
      <Section spacing="md">
        <Container size="lg">
          <div className="border-border border-t py-8 text-center">
            <p className="text-muted-foreground">
              Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <Badge variant="primary" size="sm">
                React 19
              </Badge>
              <Badge variant="primary" size="sm">
                TypeScript
              </Badge>
              <Badge variant="primary" size="sm">
                Tailwind CSS
              </Badge>
              <Badge variant="primary" size="sm">
                Framer Motion
              </Badge>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
