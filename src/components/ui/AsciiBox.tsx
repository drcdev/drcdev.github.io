import { ReactNode } from "react";

type AsciiBoxVariant = "default" | "accent" | "subtle";

interface AsciiBoxProps {
  children: ReactNode;
  variant?: AsciiBoxVariant;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles: Record<AsciiBoxVariant, string> = {
  default: "border-sand-700 bg-dusk-900",
  accent: "border-rust-500 bg-dusk-900",
  subtle: "border-sand-800 bg-dusk-950",
};

const paddingStyles = {
  none: "",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
};

export function AsciiBox({
  children,
  variant = "default",
  className = "",
  padding = "md",
}: AsciiBoxProps) {
  return (
    <div
      className={`
        relative border
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${className}
      `}
    >
      {/* ASCII corners */}
      <span className="absolute -top-px -left-px text-sand-600 select-none">
        +
      </span>
      <span className="absolute -top-px -right-px text-sand-600 select-none">
        +
      </span>
      <span className="absolute -bottom-px -left-px text-sand-600 select-none">
        +
      </span>
      <span className="absolute -bottom-px -right-px text-sand-600 select-none">
        +
      </span>
      {children}
    </div>
  );
}
