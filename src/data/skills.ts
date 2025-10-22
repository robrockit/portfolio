export interface Skill {
  name: string;
  proficiency?: "expert" | "advanced" | "intermediate";
  yearsOfExperience?: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "leadership",
    title: "Leadership & Management",
    description: "Team building, mentorship, and organizational excellence",
    skills: [
      { name: "Engineering Leadership", proficiency: "expert", yearsOfExperience: 9 },
      { name: "Team Building & Scaling", proficiency: "expert", yearsOfExperience: 9 },
      { name: "Mentorship & Coaching", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Agile & Scrum", proficiency: "expert", yearsOfExperience: 12 },
      { name: "Technical Strategy", proficiency: "expert", yearsOfExperience: 9 },
      { name: "Project Management", proficiency: "expert", yearsOfExperience: 9 },
      { name: "Stakeholder Communication", proficiency: "expert", yearsOfExperience: 9 },
      { name: "Performance Management", proficiency: "expert", yearsOfExperience: 9 },
      { name: "Hiring & Recruitment", proficiency: "advanced", yearsOfExperience: 9 },
      { name: "Career Development", proficiency: "expert", yearsOfExperience: 9 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Technologies",
    description: "Modern web development frameworks and tools",
    skills: [
      { name: "React", proficiency: "expert", yearsOfExperience: 8 },
      { name: "TypeScript", proficiency: "expert", yearsOfExperience: 2 },
      { name: "JavaScript (ES6+)", proficiency: "expert", yearsOfExperience: 16 },
      { name: "HTML5 & CSS3", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Redux & State Management", proficiency: "expert", yearsOfExperience: 8 },
      { name: "Webpack & Build Tools", proficiency: "advanced", yearsOfExperience: 8 },
      { name: "Responsive Design", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Web Accessibility (a11y)", proficiency: "advanced", yearsOfExperience: 16 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Architecture",
    description: "Server-side development and system design",
    skills: [
      { name: "C# / .NET", proficiency: "advanced", yearsOfExperience: 14 },
      { name: "RESTful APIs", proficiency: "advanced", yearsOfExperience: 10 },
      { name: "SQL Server", proficiency: "intermediate", yearsOfExperience: 10 },    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description: "Cloud platforms, CI/CD, and deployment automation",
    skills: [
      { name: "AWS", proficiency: "advanced", yearsOfExperience: 6 },
      { name: "CI/CD Pipelines", proficiency: "expert", yearsOfExperience: 8 },
      { name: "GitHub Actions", proficiency: "advanced", yearsOfExperience: 3 },
      { name: "Infrastructure as Code", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "Monitoring & Observability", proficiency: "advanced", yearsOfExperience: 10 },
      { name: "Jenkins", proficiency: "intermediate", yearsOfExperience: 4 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Development tools and productivity platforms",
    skills: [
      { name: "Git & GitHub", proficiency: "expert", yearsOfExperience: 10 },
      { name: "Visual Studio", proficiency: "expert", yearsOfExperience: 12 },
      { name: "VS Code", proficiency: "expert", yearsOfExperience: 8 },
      { name: "Jira & Confluence", proficiency: "expert", yearsOfExperience: 8 },
      { name: "Slack", proficiency: "expert", yearsOfExperience: 8 },
      { name: "Postman & API Testing", proficiency: "expert", yearsOfExperience: 6 },
      { name: "ESLint & Code Quality", proficiency: "advanced", yearsOfExperience: 6 },
      { name: "Jest & Testing Frameworks", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "Playwright / Selenium", proficiency: "intermediate", yearsOfExperience: 1 },
      { name: "Splunk", proficiency: "advanced", yearsOfExperience: 6 },
      { name: "Sumo Logic", proficiency: "advanced", yearsOfExperience: 4 },
      { name: "Optimizely (A/B Testing)", proficiency: "intermediate", yearsOfExperience: 2 },
      { name: "Segment", proficiency: "intermediate", yearsOfExperience: 3 },
      { name: "Auth0", proficiency: "intermediate", yearsOfExperience: 2 },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce & Integrations",
    description: "Payment systems and shipping integrations",
    skills: [
      { name: "USPS API", proficiency: "expert", yearsOfExperience: 16 },
      { name: "UPS API", proficiency: "expert", yearsOfExperience: 12 },
      { name: "Fraud Detection Systems", proficiency: "expert", yearsOfExperience: 2 },
      { name: "PCI Compliance", proficiency: "advanced", yearsOfExperience: 12 },
      { name: "E-commerce Platforms", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Shipping Label Generation", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Rate Calculation Engines", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Order Management Systems", proficiency: "expert", yearsOfExperience: 12 },
    ],
  },
];

// Helper to get all unique proficiency levels
export const proficiencyLevels = ["expert", "advanced", "intermediate"] as const;

// Helper to calculate total years across all skills
export const totalYearsExperience = 16;
