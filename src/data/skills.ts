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
      { name: "Project Management", proficiency: "expert", yearsOfExperience: 12 },
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
      { name: "TypeScript", proficiency: "expert", yearsOfExperience: 7 },
      { name: "JavaScript (ES6+)", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Next.js", proficiency: "advanced", yearsOfExperience: 3 },
      { name: "HTML5 & CSS3", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Tailwind CSS", proficiency: "advanced", yearsOfExperience: 2 },
      { name: "Redux & State Management", proficiency: "expert", yearsOfExperience: 6 },
      { name: "Webpack & Build Tools", proficiency: "advanced", yearsOfExperience: 7 },
      { name: "Responsive Design", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Web Accessibility (a11y)", proficiency: "advanced", yearsOfExperience: 10 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Architecture",
    description: "Server-side development and system design",
    skills: [
      { name: "C# / .NET", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Node.js", proficiency: "advanced", yearsOfExperience: 6 },
      { name: "RESTful APIs", proficiency: "expert", yearsOfExperience: 12 },
      { name: "Microservices Architecture", proficiency: "expert", yearsOfExperience: 6 },
      { name: "SQL Server", proficiency: "expert", yearsOfExperience: 16 },
      { name: "PostgreSQL", proficiency: "advanced", yearsOfExperience: 5 },
      { name: "Redis & Caching", proficiency: "advanced", yearsOfExperience: 7 },
      { name: "Message Queues (RabbitMQ)", proficiency: "advanced", yearsOfExperience: 5 },
      { name: "GraphQL", proficiency: "intermediate", yearsOfExperience: 2 },
      { name: "Entity Framework", proficiency: "expert", yearsOfExperience: 12 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    description: "Cloud platforms, CI/CD, and deployment automation",
    skills: [
      { name: "Azure Cloud", proficiency: "expert", yearsOfExperience: 8 },
      { name: "AWS", proficiency: "advanced", yearsOfExperience: 4 },
      { name: "Docker & Containers", proficiency: "advanced", yearsOfExperience: 6 },
      { name: "Kubernetes", proficiency: "intermediate", yearsOfExperience: 3 },
      { name: "CI/CD Pipelines", proficiency: "expert", yearsOfExperience: 8 },
      { name: "Azure DevOps", proficiency: "expert", yearsOfExperience: 8 },
      { name: "GitHub Actions", proficiency: "advanced", yearsOfExperience: 3 },
      { name: "Infrastructure as Code", proficiency: "advanced", yearsOfExperience: 5 },
      { name: "Monitoring & Observability", proficiency: "advanced", yearsOfExperience: 7 },
      { name: "Application Insights", proficiency: "advanced", yearsOfExperience: 6 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Development tools and productivity platforms",
    skills: [
      { name: "Git & GitHub", proficiency: "expert", yearsOfExperience: 12 },
      { name: "Visual Studio", proficiency: "expert", yearsOfExperience: 16 },
      { name: "VS Code", proficiency: "expert", yearsOfExperience: 8 },
      { name: "Jira & Confluence", proficiency: "expert", yearsOfExperience: 10 },
      { name: "Postman & API Testing", proficiency: "expert", yearsOfExperience: 10 },
      { name: "ESLint & Code Quality", proficiency: "advanced", yearsOfExperience: 6 },
      { name: "Jest & Testing Frameworks", proficiency: "advanced", yearsOfExperience: 6 },
      { name: "Playwright / Selenium", proficiency: "advanced", yearsOfExperience: 5 },
      { name: "New Relic / DataDog", proficiency: "advanced", yearsOfExperience: 5 },
      { name: "Splunk", proficiency: "intermediate", yearsOfExperience: 4 },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce & Integrations",
    description: "Payment systems and shipping integrations",
    skills: [
      { name: "Payment Gateway Integration", proficiency: "expert", yearsOfExperience: 12 },
      { name: "USPS API", proficiency: "expert", yearsOfExperience: 16 },
      { name: "UPS API", proficiency: "expert", yearsOfExperience: 12 },
      { name: "FedEx API", proficiency: "expert", yearsOfExperience: 12 },
      { name: "Fraud Detection Systems", proficiency: "expert", yearsOfExperience: 9 },
      { name: "PCI Compliance", proficiency: "advanced", yearsOfExperience: 12 },
      { name: "E-commerce Platforms", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Shipping Label Generation", proficiency: "expert", yearsOfExperience: 16 },
      { name: "Rate Calculation Engines", proficiency: "expert", yearsOfExperience: 12 },
      { name: "Order Management Systems", proficiency: "expert", yearsOfExperience: 16 },
    ],
  },
];

// Helper to get all unique proficiency levels
export const proficiencyLevels = ["expert", "advanced", "intermediate"] as const;

// Helper to calculate total years across all skills
export const totalYearsExperience = 16;
