/**
 * Custom hook to track scroll depth for analytics
 * Tracks when user reaches 25%, 50%, 75%, and 100% of page
 */

"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/analytics";

export const useScrollDepth = () => {
  const milestones = useRef(new Set<number>([25, 50, 75, 100]));
  const tracked = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Check each milestone
      milestones.current.forEach((milestone) => {
        if (scrollPercentage >= milestone && !tracked.current.has(milestone)) {
          trackScrollDepth(milestone);
          tracked.current.add(milestone);
        }
      });
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
