export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  photo?: string;
  relationship: "manager" | "report" | "peer" | "colleague";
}

export const testimonials: Testimonial[] = [
  {
    id: "jayakranthi-katam",
    quote:
      "Working with Rob has been one of the most impactful experiences in my career. As a manager, Rob strikes the perfect balance between strategic leadership and genuine support. He has an incredible ability to create clarity in complex situations, communicate expectations effectively, and empower his team to take ownership. Rob leads with trust and transparency, which fosters a collaborative and psychologically safe environment. He doesn't just focus on delivering results—he also ensures his team members are learning, growing, and aligned with both personal and team goals. Any team would benefit from his guidance, and I feel fortunate to have had the chance to work with him.",
    author: "Jayakranthi Katam",
    role: "Sr. Software Engineer",
    company: "Stamps.com",
    relationship: "report",
  },
  {
    id: "sameer-shamsuddin",
    quote:
      "As a manager, Rob was a strong but fair advocate for his team. He motivated the group to meet tough timelines, took ownership of multiple competing priorities, and balanced direction from leadership with the realities of execution. His communication skills were particularly effective — he has a talent for bringing together divergent perspectives, providing clear feedback, and helping teams reach consensus. These strengths were on full display during one of the largest redesigns Stamps had undertaken in a decade, where Rob helped align product, design, and engineering by framing challenges, proposing practical solutions, and doing so in a straightforward, empathetic way.",
    author: "Sameer Shamsuddin",
    role: "VP of Engineering",
    company: "Stamps.com",
    relationship: "manager",
  },
  {
    id: "jakith-priyan",
    quote:
      "Robert consistently demonstrated strong leadership in daily scrums, helping the team identify and resolve blockers efficiently. His clear communication, forward-thinking mindset, and ability to keep everyone aligned on priorities contributed immensely to our project's success.",
    author: "Jakith Priyan",
    role: "Software Engineer",
    company: "Stamps.com",
    relationship: "report",
  },
];

// Helper to get initials from name
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
