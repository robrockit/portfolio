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
          "Legacy fraud detection system was causing high false-positive rates, leading to customer friction and revenue loss while still missing sophisticated fraud patterns.",
        solution:
          "Architected and led implementation of ML-based fraud detection system with real-time risk scoring, integrated multiple data sources, and built automated rule engine with A/B testing framework.",
        impact:
          "Reduced fraud by 40% while improving customer experience through 60% reduction in false positives. System processed 100K+ transactions daily with <100ms latency.",
        metrics: ["40% fraud reduction", "60% fewer false positives", "<100ms latency"],
        tags: ["Machine Learning", "Architecture", "Real-time Systems"],
      },
      {
        id: "delivery-velocity",
        title: "Engineering Velocity Transformation",
        challenge:
          "Team struggled with long release cycles (6-8 weeks), manual testing bottlenecks, and frequent production incidents causing customer impact.",
        solution:
          "Implemented CI/CD pipeline, established automated testing framework (unit, integration, E2E), introduced feature flags for safer deployments, and created observability stack with proactive monitoring.",
        impact:
          "Increased feature delivery by 83%, reduced deployment time from days to hours, decreased production incidents by 65% through better quality gates.",
        metrics: ["83% delivery increase", "6-8 weeks → hours", "65% fewer incidents"],
        tags: ["DevOps", "CI/CD", "Quality Engineering"],
      },
      {
        id: "team-growth",
        title: "High-Performing Team Development",
        challenge:
          "Needed to scale team capabilities while maintaining quality, with limited senior engineering talent in the market and high cost of external hiring.",
        solution:
          "Established comprehensive mentorship program, created career development framework with clear progression paths, implemented peer code review culture, and fostered psychological safety for innovation.",
        impact:
          "Achieved 75% internal promotion rate within team, reduced time-to-productivity for new hires by 50%, maintained 90%+ team retention over 3 years.",
        metrics: ["75% promotion rate", "90%+ retention", "50% faster onboarding"],
        tags: ["Leadership", "Mentorship", "Culture"],
      },
      {
        id: "platform-modernization",
        title: "Legacy Platform Migration",
        challenge:
          "Monolithic legacy system built on outdated technology stack created bottlenecks for feature development and scalability, with high maintenance costs.",
        solution:
          "Led phased migration to microservices architecture, established API-first design principles, implemented event-driven patterns for system integration, zero-downtime deployment strategy.",
        impact:
          "Reduced system coupling enabling 3x faster feature development, improved system reliability to 99.9% uptime, decreased infrastructure costs by 30% through better resource utilization.",
        metrics: ["3x faster development", "99.9% uptime", "30% cost reduction"],
        tags: ["Microservices", "Architecture", "Migration"],
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
      "Architected and implemented RESTful API gateway serving 50M+ requests/day",
      "Optimized database queries reducing page load times by 70%",
      "Led integration with multiple shipping carrier APIs (USPS, UPS, FedEx)",
      "Mentored 5+ junior developers through code reviews and pair programming",
      "Contributed to migration from .NET Framework to modern cloud-native stack",
    ],
  },
  {
    id: "teaching",
    company: "Various Educational Institutions",
    role: "Computer Science Instructor",
    period: "2003 - 2009",
    location: "Southern California",
    description:
      "Taught programming fundamentals, web development, and database systems to college students. Developed curriculum and hands-on projects that prepared students for industry careers.",
    highlights: [
      "Designed and delivered courses in Java, C++, Web Development, and Database Design",
      "Maintained 4.5+ average instructor rating across 1000+ students",
      "Created practical lab exercises bridging academic concepts with real-world applications",
      "Developed passion for mentorship and technical communication",
    ],
    expanded: false, // Start collapsed for length management
  },
];
