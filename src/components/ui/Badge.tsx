import { ReactNode } from "react";

type BadgeVariant = "default" | "accent" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-800 text-gray-300 border-gray-700",
  accent: "bg-accent-950 text-accent-400 border-accent-800",
  outline: "bg-transparent text-gray-400 border-gray-600",
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
