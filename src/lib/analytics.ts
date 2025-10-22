/**
 * Google Analytics 4 utility functions for tracking custom events
 * This module provides type-safe functions for tracking user interactions
 */

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Send a custom event to Google Analytics
 * @param eventName - The name of the event (e.g., 'button_click', 'form_submit')
 * @param eventParams - Additional parameters to send with the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  // Only track in browser environment with GA loaded
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

/**
 * Track button clicks (GitHub, Contact, Resume download, etc.)
 */
export const trackButtonClick = (buttonName: string, url?: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    destination_url: url,
  });
};

/**
 * Track form submission success
 */
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent("form_submission", {
    form_name: formName,
    success: success,
  });
};

/**
 * Track external link clicks
 */
export const trackExternalLinkClick = (linkName: string, url: string) => {
  trackEvent("external_link_click", {
    link_name: linkName,
    destination_url: url,
  });
};

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%)
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent("scroll_depth", {
    scroll_percentage: percentage,
  });
};

/**
 * Track theme toggle usage
 */
export const trackThemeToggle = (newTheme: string) => {
  trackEvent("theme_toggle", {
    theme: newTheme,
  });
};

/**
 * Track resume download
 */
export const trackResumeDownload = () => {
  trackEvent("resume_download", {
    action: "download",
  });
};

/**
 * Track contact method selection (email vs form)
 */
export const trackContactMethod = (method: string) => {
  trackEvent("contact_method", {
    method: method,
  });
};

/**
 * Track navigation clicks
 */
export const trackNavigation = (destination: string) => {
  trackEvent("navigation_click", {
    destination: destination,
  });
};
