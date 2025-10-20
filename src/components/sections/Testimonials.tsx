"use client";

import { motion } from "framer-motion";
import { Container } from "../ui";
import { testimonials, getInitials, type Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";
import Image from "next/image";

// Testimonial Card Component
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const initials = getInitials(testimonial.author);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex h-full flex-col"
    >
      <div className="border-border bg-card flex h-full flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="text-primary h-8 w-8 opacity-50" />
        </div>

        {/* Quote Text */}
        <blockquote className="text-muted-foreground mb-6 flex-1 text-base leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Author Info */}
        <div className="border-border flex items-center gap-4 border-t pt-4">
          {/* Photo or Initials */}
          <div className="flex-shrink-0">
            {testimonial.photo ? (
              <Image
                src={testimonial.photo}
                alt={testimonial.author}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 font-semibold">
                {initials}
              </div>
            )}
          </div>

          {/* Name and Role */}
          <div className="min-w-0 flex-1">
            <p className="text-foreground truncate font-semibold">
              {testimonial.author}
            </p>
            <p className="text-muted-foreground truncate text-sm">
              {testimonial.role}
              {testimonial.company && ` • ${testimonial.company}`}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Testimonials Section
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/30 relative py-20 md:py-32">
      <Container size="lg">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            What People Say
          </h2>
          <div className="bg-primary mx-auto h-1 w-20 rounded-full" />
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            Feedback from colleagues, team members, and leadership highlighting
            collaboration, technical excellence, and impact.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
