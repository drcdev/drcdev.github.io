import { ReactNode } from "react";

type BadgeVariant = "default" | "accent" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-dusk-800 text-mist-300 border-sand-700",
  accent: "bg-rust-950 text-rust-400 border-rust-800",
  outline: "bg-transparent text-mauve-400 border-sand-600",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2 py-0.5
        text-xs font-mono
        border
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
