"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import {
  trackExternalLinkClick,
  trackFormSubmission,
  trackContactMethod,
} from "@/lib/analytics";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  honeypot: string; // Spam protection
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check honeypot (spam protection)
    if (formData.honeypot) {
      console.warn("Spam detected");
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      trackFormSubmission("Contact Form", true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          honeypot: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      trackFormSubmission("Contact Form", false);
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message. Please try again."
      );
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
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
            Let&apos;s Connect
          </h2>
          <div className="bg-primary mx-auto h-1 w-20 rounded-full" />
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            Have a project in mind or want to discuss opportunities? I&apos;d love
            to hear from you. Reach out directly or send a message below.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-foreground mb-6 text-2xl font-bold">
              Direct Contact
            </h3>

            {/* Email */}
            <a
              href="mailto:rrobinson022@gmail.com"
              onClick={() => {
                trackContactMethod("Email");
                trackExternalLinkClick("Email", "mailto:rrobinson022@gmail.com");
              }}
              className="border-border bg-card hover:border-primary/50 group flex items-center gap-4 rounded-lg border p-4 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                <Mail className="text-primary h-6 w-6" />
              </div>
              <div>
                <p className="text-foreground mb-1 font-semibold">Email</p>
                <p className="text-muted-foreground group-hover:text-primary text-sm transition-colors">
                  rrobinson022@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackContactMethod("LinkedIn");
                trackExternalLinkClick(
                  "LinkedIn",
                  process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com"
                );
              }}
              className="border-border bg-card hover:border-primary/50 group flex items-center gap-4 rounded-lg border p-4 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                <Linkedin className="text-primary h-6 w-6" />
              </div>
              <div>
                <p className="text-foreground mb-1 font-semibold">LinkedIn</p>
                <p className="text-muted-foreground group-hover:text-primary text-sm transition-colors">
                  Connect professionally
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackContactMethod("GitHub");
                trackExternalLinkClick(
                  "GitHub",
                  process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com"
                );
              }}
              className="border-border bg-card hover:border-primary/50 group flex items-center gap-4 rounded-lg border p-4 transition-all duration-300 hover:shadow-md"
            >
              <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                <Github className="text-primary h-6 w-6" />
              </div>
              <div>
                <p className="text-foreground mb-1 font-semibold">GitHub</p>
                <p className="text-muted-foreground group-hover:text-primary text-sm transition-colors">
                  View my code
                </p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="your.email@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label
                  htmlFor="company"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  placeholder="Your company"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`border-border bg-background text-foreground focus:border-primary focus:ring-primary w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Tell me about your project or opportunity..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot (hidden field for spam protection) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="absolute left-[-9999px]"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === "loading" || submitStatus === "success"}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg px-6 py-3 font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitStatus === "loading" && (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </span>
                )}
                {submitStatus === "success" && (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Message Sent!
                  </span>
                )}
                {(submitStatus === "idle" || submitStatus === "error") && (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </span>
                )}
              </button>

              {/* Error Message */}
              {submitStatus === "error" && errorMessage && (
                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-4 text-red-600 dark:text-red-400">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-4 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
