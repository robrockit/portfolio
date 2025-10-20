"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../ui";
import { experiences, type Achievement, type Experience } from "@/data/experience";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  MapPin,
  Calendar,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react";

// Achievement Card Component
function AchievementCard({ achievement }: { achievement: Achievement }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group mb-4"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="border-border bg-card hover:border-primary/50 w-full rounded-lg border p-4 text-left transition-all duration-300 hover:shadow-md print:border-gray-300 print:shadow-none"
        aria-expanded={isExpanded}
      >
        <div className="flex items-start justify-between gap-4">
          <h4 className="text-foreground text-lg font-semibold group-hover:text-primary transition-colors">
            {achievement.title}
          </h4>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-muted-foreground flex-shrink-0 print:hidden"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </div>

        {/* Tags */}
        {achievement.tags && achievement.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {achievement.tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary border-primary/20 rounded-md border px-2 py-0.5 text-xs font-medium print:border-gray-300 print:bg-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden print:!h-auto print:!opacity-100"
          >
            <div className="border-border bg-muted/30 mt-2 space-y-4 rounded-lg border p-4 print:border-gray-300 print:bg-white">
              {/* Challenge */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Target className="text-primary h-4 w-4 flex-shrink-0" />
                  <h5 className="text-foreground font-semibold">Challenge</h5>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Lightbulb className="text-primary h-4 w-4 flex-shrink-0" />
                  <h5 className="text-foreground font-semibold">Solution</h5>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.solution}
                </p>
              </div>

              {/* Impact */}
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <TrendingUp className="text-primary h-4 w-4 flex-shrink-0" />
                  <h5 className="text-foreground font-semibold">Impact</h5>
                </div>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                  {achievement.impact}
                </p>

                {/* Metrics */}
                {achievement.metrics && achievement.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {achievement.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/5 text-primary rounded-md px-3 py-1 text-xs font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Experience Item Component
function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(
    experience.expanded !== false
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      {index < experiences.length - 1 && (
        <div className="bg-primary/20 absolute left-4 top-12 h-[calc(100%-3rem)] w-0.5 print:bg-gray-300 md:left-[220px]" />
      )}

      {/* Timeline Dot */}
      <div className="bg-primary absolute left-2 top-6 h-5 w-5 rounded-full border-4 border-background print:border-white md:left-[212px]" />

      <div className="grid gap-6 md:grid-cols-[200px_1fr]">
        {/* Left: Date & Role Info */}
        <div className="ml-10 md:ml-0 md:text-right">
          <div className="mb-2 flex items-center gap-2 text-sm md:justify-end print:text-gray-600">
            <Calendar className="h-4 w-4 md:order-2" />
            <span className="text-muted-foreground font-medium">
              {experience.period}
            </span>
          </div>
          <div className="mb-1 flex items-center gap-2 text-sm md:justify-end print:text-gray-600">
            <MapPin className="h-4 w-4 md:order-2" />
            <span className="text-muted-foreground">{experience.location}</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="ml-10 md:ml-8">
          {/* Company & Role Header */}
          <div className="mb-4">
            <div className="mb-2 flex items-start gap-3">
              <Briefcase className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="text-foreground mb-1 text-2xl font-bold">
                  {experience.role}
                </h3>
                <p className="text-primary text-lg font-semibold">
                  {experience.company}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Achievements (Expandable cards) */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="text-foreground mb-3 text-sm font-semibold uppercase tracking-wide">
                Key Achievements
              </h4>
              <div>
                {experience.achievements.map((achievement) => (
                  <AchievementCard
                    key={achievement.id}
                    achievement={achievement}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Highlights (Condensed format) */}
          {experience.highlights && experience.highlights.length > 0 && (
            <div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary/80 print:hidden"
              >
                Highlights
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground list-disc space-y-2 overflow-hidden pl-5 text-sm leading-relaxed print:!h-auto print:!opacity-100"
                  >
                    {experience.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {/* Print version (always visible) */}
              <ul className="text-muted-foreground hidden list-disc space-y-2 pl-5 text-sm leading-relaxed print:block">
                {experience.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Main Experience Section
export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 print:py-8">
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
            Experience
          </h2>
          <div className="bg-primary mx-auto h-1 w-20 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto max-w-5xl">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
