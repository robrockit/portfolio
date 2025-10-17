import { HTMLAttributes, forwardRef } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children: React.ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "lg", className = "", children, ...props }, ref) => {
    const baseStyles = "mx-auto px-4 sm:px-6 lg:px-8";

    const sizeStyles = {
      sm: "max-w-3xl", // ~768px
      md: "max-w-5xl", // ~1024px
      lg: "max-w-7xl", // ~1280px
      xl: "max-w-[1536px]", // ~1536px
      full: "max-w-full",
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${className}`;

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
