"use client";

import { motion } from "framer-motion";
import { Container } from "../ui";
import { skillCategories, type Skill } from "@/data/skills";

// Proficiency color mapping
const proficiencyColors = {
  expert: "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20",
  advanced: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
  intermediate: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30 hover:bg-purple-500/20",
};

// Proficiency dot indicator
const proficiencyDots = {
  expert: 3,
  advanced: 2,
  intermediate: 1,
};

// Skill Badge Component
function SkillBadge({ skill }: { skill: Skill }) {
  const colorClass = skill.proficiency
    ? proficiencyColors[skill.proficiency]
    : "bg-muted text-muted-foreground border-border hover:bg-muted/80";

  const dots = skill.proficiency ? proficiencyDots[skill.proficiency] : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`group relative inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-all ${colorClass}`}
    >
      {/* Skill Name */}
      <span>{skill.name}</span>

      {/* Proficiency Dots (optional) */}
      {dots > 0 && (
        <div className="flex gap-0.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                i < dots
                  ? "opacity-100"
                  : "opacity-20"
              } ${
                skill.proficiency === "expert"
                  ? "bg-primary"
                  : skill.proficiency === "advanced"
                  ? "bg-blue-600 dark:bg-blue-400"
                  : "bg-purple-600 dark:bg-purple-400"
              }`}
            />
          ))}
        </div>
      )}

      {/* Tooltip on hover - Years of Experience */}
      {skill.yearsOfExperience && (
        <div className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          {skill.yearsOfExperience}+ years
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-foreground" />
        </div>
      )}
    </motion.div>
  );
}

// Category Section Component
function CategorySection({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-4"
    >
      {/* Category Header */}
      <div className="border-b border-border pb-3">
        <h3 className="text-foreground mb-1 text-xl font-bold">
          {category.title}
        </h3>
        <p className="text-muted-foreground text-sm">{category.description}</p>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

// Legend Component
function ProficiencyLegend() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-muted/30 mx-auto max-w-2xl rounded-lg border border-border p-4"
    >
      <h4 className="text-foreground mb-3 text-sm font-semibold">
        Proficiency Levels
      </h4>
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-primary h-1.5 w-1.5 rounded-full" />
            ))}
          </div>
          <span className="text-muted-foreground">Expert (3 dots)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i < 2 ? "bg-blue-600 dark:bg-blue-400" : "bg-blue-600/20 dark:bg-blue-400/20"
                }`}
              />
            ))}
          </div>
          <span className="text-muted-foreground">Advanced (2 dots)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i < 1 ? "bg-purple-600 dark:bg-purple-400" : "bg-purple-600/20 dark:bg-purple-400/20"
                }`}
              />
            ))}
          </div>
          <span className="text-muted-foreground">Intermediate (1 dot)</span>
        </div>
      </div>
      <p className="text-muted-foreground mt-2 text-xs">
        Hover over skills to see years of experience
      </p>
    </motion.div>
  );
}

// Main Skills Section
export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 relative py-20 md:py-32">
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
            Skills & Technologies
          </h2>
          <div className="bg-primary mx-auto h-1 w-20 rounded-full" />
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            A comprehensive overview of technical skills, leadership capabilities,
            and domain expertise developed over 16+ years in software engineering
            and management.
          </p>
        </motion.div>

        {/* Proficiency Legend */}
        <div className="mb-12">
          <ProficiencyLegend />
        </div>

        {/* Skill Categories Grid */}
        <div className="grid gap-8 md:gap-10">
          {skillCategories.map((category, index) => (
            <CategorySection key={category.id} category={category} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
