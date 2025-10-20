import type { LucideIcon } from "lucide-react";
import {
  Users,
  TrendingUp,
  Award,
  Target,
  Shield,
  Calendar,
} from "lucide-react";

export interface Stat {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export const bio = {
  paragraphs: [
    "With over 16 years of experience in software engineering and technical leadership, I specialize in building high-performing teams that deliver exceptional results. My approach combines hands-on technical expertise with strategic thinking to drive innovation and business impact.",
    "As an Engineering Manager, I've successfully led teams ranging from 8-10 engineers, fostering a culture of growth and excellence. I'm particularly proud of achieving a 75% internal promotion rate while scaling our fraud prevention capabilities and increasing feature delivery velocity by 83%.",
    "I believe in servant leadership, continuous learning, and creating environments where engineers thrive. My focus is on empowering teams to take ownership, make data-driven decisions, and deliver solutions that matter to our users and the business.",
  ],
};

export const stats: Stat[] = [
  {
    icon: Calendar,
    value: 16,
    suffix: "+",
    label: "Years Experience",
    description: "Software engineering and technical leadership",
  },
  {
    icon: Users,
    value: 10,
    label: "Engineers Managed",
    description: "Building and mentoring high-performing teams",
  },
  {
    icon: TrendingUp,
    value: 75,
    suffix: "%",
    label: "Internal Promotions",
    description: "Team members promoted under my leadership",
  },
  {
    icon: Target,
    value: 83,
    suffix: "%",
    label: "Delivery Increase",
    description: "Feature delivery velocity improvement",
  },
  {
    icon: Shield,
    value: 40,
    suffix: "%",
    label: "Fraud Reduction",
    description: "Reduced fraud through technical solutions",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Team Engagement",
    description: "Focused on creating thriving environments",
  },
];
