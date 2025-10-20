"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container } from "../ui";
import { bio, stats } from "@/data/about";

// Counter animation hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animate = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutExpo)
      const easeOut = 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOut);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return { count, animate, hasAnimated };
}

// Stat Card Component
function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { count, animate } = useCountUp(stat.value);

  useEffect(() => {
    if (isInView) {
      // Small delay based on index for stagger effect
      const timer = setTimeout(() => {
        animate();
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, animate, index]);

  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border-border hover:border-primary/50 group relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
    >
      {/* Background gradient on hover */}
      <div className="from-primary/5 to-primary/0 absolute inset-0 translate-y-full bg-gradient-to-t opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="bg-primary/10 border-primary/20 mb-4 inline-flex rounded-lg border p-3">
          <Icon className="text-primary h-6 w-6" />
        </div>

        {/* Value */}
        <div className="mb-2 flex items-baseline gap-1">
          {stat.prefix && (
            <span className="text-foreground text-2xl font-bold">
              {stat.prefix}
            </span>
          )}
          <span className="text-foreground text-4xl font-bold tabular-nums">
            {count}
          </span>
          {stat.suffix && (
            <span className="text-foreground text-2xl font-bold">
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Label */}
        <h3 className="text-foreground mb-1 text-lg font-semibold">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm">{stat.description}</p>
      </div>
    </motion.div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="bg-muted/30 relative py-20 md:py-32"
    >
      <Container size="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-12"
        >
          {/* Section Heading */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              About Me
            </h2>
            <div className="bg-primary mx-auto h-1 w-20 rounded-full" />
          </motion.div>

          {/* Bio Text */}
          <motion.div
            variants={itemVariants}
            className="text-muted-foreground mx-auto max-w-3xl space-y-4 text-center text-lg leading-relaxed"
          >
            {bio.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <div className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
