"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../ui";

export function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="from-background via-background to-muted/20 relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container size="lg" className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 py-20 md:grid-cols-2 md:items-center md:gap-16"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                Robert Robinson
              </h1>
              <p className="text-primary text-2xl font-semibold sm:text-3xl">
                Engineering Manager
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed md:mx-0 md:text-xl"
            >
              Building high-performing teams and delivering innovative solutions
              that drive business impact through technical excellence and
              strategic leadership.
            </motion.p>

            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start"
            >
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold transition-all hover:scale-105 hover:shadow-lg"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View GitHub
              </a>

              <button
                onClick={handleScrollToContact}
                className="border-border bg-background hover:bg-muted inline-flex items-center justify-center gap-2 rounded-lg border px-8 py-4 font-semibold transition-all hover:scale-105 hover:shadow-md"
              >
                Get in Touch
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={imageVariants}
            transition={{ duration: 0.6 }}
            className="relative mx-auto flex justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="bg-primary/10 absolute -inset-4 rounded-full blur-3xl" />
              <div className="border-primary/20 from-muted to-muted/50 relative h-64 w-64 overflow-hidden rounded-full border-4 bg-gradient-to-br shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/images/profile.jpg"
                  alt="Professional headshot of Robert Robinson, Engineering Manager"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-sm font-medium">
            Scroll to explore
          </span>
          <svg
            className="text-primary h-6 w-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
