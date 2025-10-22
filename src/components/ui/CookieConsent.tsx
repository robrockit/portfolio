"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

/**
 * Cookie Consent Banner Component
 * Displays a GDPR-compliant cookie consent banner for Google Analytics
 */
export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    handleClose();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    handleClose();
    // Disable GA tracking
    if (typeof window !== "undefined") {
      window[`ga-disable-${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`] = true;
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowBanner(false);
      setIsClosing(false);
    }, 300);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="bg-card border-border mx-auto max-w-5xl rounded-lg border shadow-2xl">
            <div className="relative p-6 sm:p-8">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="text-muted-foreground hover:text-foreground absolute right-4 top-4 transition-colors"
                aria-label="Close cookie banner"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Icon */}
                <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  <Cookie className="text-primary h-6 w-6" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold">
                      We value your privacy
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      This website uses Google Analytics to understand how
                      visitors interact with the site and improve user
                      experience. We collect anonymized data about page views,
                      clicks, and browsing behavior. By clicking &quot;Accept&quot;, you
                      consent to our use of cookies for analytics purposes.{" "}
                      <a
                        href="#privacy"
                        className="text-primary hover:underline"
                      >
                        Learn more
                      </a>
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={handleAccept}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2.5 font-medium transition-colors"
                    >
                      Accept
                    </button>
                    <button
                      onClick={handleDecline}
                      className="border-border bg-background hover:bg-muted rounded-lg border px-6 py-2.5 font-medium transition-colors"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
