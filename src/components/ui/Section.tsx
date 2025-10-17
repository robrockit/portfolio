import { HTMLAttributes, forwardRef } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "none";
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ spacing = "lg", className = "", children, ...props }, ref) => {
    const spacingStyles = {
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      none: "",
    };

    const combinedClassName = `${spacingStyles[spacing]} ${className}`;

    return (
      <section ref={ref} className={combinedClassName} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
