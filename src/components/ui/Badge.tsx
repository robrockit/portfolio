import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error";
  size?: "sm" | "md";
  children: React.ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant = "default", size = "md", className = "", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-[var(--duration-fast)]";

    const variantStyles = {
      default: "bg-muted text-muted-foreground",
      primary: "bg-primary/10 text-primary border border-primary/20",
      secondary: "bg-secondary/10 text-secondary border border-secondary/20",
      success:
        "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20",
      warning:
        "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20",
      error:
        "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20",
    };

    const sizeStyles = {
      sm: "text-xs px-2 py-0.5",
      md: "text-sm px-2.5 py-1",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <span ref={ref} className={combinedClassName} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
