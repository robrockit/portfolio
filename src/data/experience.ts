export interface Achievement {
  id: string;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics?: string[];
  tags?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements?: Achievement[];
  highlights?: string[];
  expanded?: boolean; // For collapsible sections
}

export const experiences: Experience[] = [
  {
    id: "stamps-eng-manager",
    company: "Stamps.com",
    role: "Engineering Manager",
    period: "2016 - 2025",
    location: "El Segundo, CA",
    description:
      "Led engineering teams in building scalable e-commerce and fraud prevention systems, driving significant business impact through technical excellence and team development.",
    achievements: [
      {
        id: "fraud-reduction",
        title: "Fraud Prevention System Overhaul",
        challenge:
          "Our legacy authentication and fraud detection systems were struggling to keep up with evolving threats, leading to large volumes of account takeovers and fraudulent transactions.",
        solution:
          "Worked with cross-functional teams to design and implement a new fraud prevention architecture leveraging machine learning models, real-time transaction analysis, and multi-factor authentication.",
        impact:
          "Reduced fraud by 90% while minimizing customer friction, leading to increased user trust and a significant drop in chargebacks.",
        metrics: ["90% fraud reduction", "50% fewer customer complaints"],
        tags: ["Auth0", "Architecture", "Multi-Factor Authentication"],
      },
      {
        id: "delivery-velocity",
        title: "Engineering Velocity Transformation",
        challenge:
          "Team struggled with long release cycles (6-8 weeks), manual testing bottlenecks, and frequent production incidents causing customer impact.",
        solution:
          "Implemented 2-week sprint cycles, introduced CI/CD pipelines with automated testing, and drilled down into root cause analysis for incidents to improve quality gates.",
        impact:
          "Increased feature delivery by 83%, reduced deployment time from days to hours, reduced production incidents by 65%, and improved overall team morale and ownership.",
        metrics: ["83% delivery increase", "6-8 weeks → hours", "65% fewer incidents"],
        tags: ["Agile", "CI/CD", "Quality Engineering"],
      },
      {
        id: "team-growth",
        title: "High-Performing Team Development",
        challenge:
          "Needed to build a strong engineering team for a framework that didn't have wide adoption, while also fostering growth and retention among existing team members.",
        solution:
          "Established comprehensive onboarding documentation and processes to get engineers up to speed quickly, implemented peer code review culture, and fostered psychological safety for innovation.",
        impact:
          "Achieved 75% internal promotion rate within team, reduced time-to-productivity for new hires by 50%, maintained 90%+ team retention over 9 years.",
        metrics: ["75% promotion rate", "90%+ retention", "50% faster onboarding"],
        tags: ["Leadership", "Mentorship", "Culture"],
      },
      {
        id: "platform-modernization",
        title: "Legacy Platform Migration",
        challenge:
          "Monolithic legacy system built on outdated technology stack created bottlenecks for feature development and scalability, with high maintenance costs.",
        solution:
          "Led phased migration to React based applications, zero-downtime deployment strategy.",
        impact:
          "Reduced system coupling enabling 3x faster feature development, improved system reliability to 99.9% uptime, decreased infrastructure costs by 30% through better resource utilization.",
        metrics: ["3x faster development", "99.9% uptime", "30% cost reduction"],
        tags: ["React", "Architecture", "Migration", "Serverless"],
      },
    ],
  },
  {
    id: "stamps-senior-dev",
    company: "Stamps.com",
    role: "Senior Software Developer",
    period: "2009 - 2016",
    location: "El Segundo, CA",
    description:
      "Built and scaled core e-commerce platform features, focusing on payment systems, API integrations, and performance optimization.",
    highlights: [
      "Transitioned legacy desktop application to web-based platform using javascript and .NET technologies",
      "Developed a shared components library to standardize UI/UX across multiple teams, reducing development time for new features by 25%",
      "Led integration with multiple ecommerce platforms (eBay, Amazon), increasing sales channels and revenue by 15%",
      "Mentored 5+ junior offshore developers through code reviews and pair programming",
      "Monitored and optimized application performance using Splunk and Sumo Logic, maintaining 99.9% uptime and accelerating issue resolution times",
    ],
  },
  {
    id: "teaching",
    company: "Victor Valley Union High School District",
    role: "Biology Teacher and Dept. Chair",
    period: "2003 - 2009",
    location: "Victorville, CA",
    description:
      "Taught biology courses to high school students, developed curriculum, and led department initiatives to improve educational outcomes.",
    highlights: [
      "Developed and presented engaging multimedia lectures that inspired students to dive deeper into their learning",
      "Championed the integration of classroom technology, introducing digital resources and early learning management tools to enhance instruction and student engagement",
      "Designed and facilitated professional development workshops for fellow teachers on integrating technology and improving instructional efficiency",
      "Developed passion for mentorship and technical communication",
    ],
    expanded: false, // Start collapsed for length management
  },
];
