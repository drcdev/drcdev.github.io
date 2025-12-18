import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type AsciiButtonVariant = "primary" | "secondary" | "ghost";
type AsciiButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: AsciiButtonVariant;
  size?: AsciiButtonSize;
  className?: string;
}

interface ButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: never;
}

interface LinkProps extends BaseProps {
  href: string;
  external?: boolean;
}

type AsciiButtonProps = ButtonProps | LinkProps;

const variantStyles: Record<AsciiButtonVariant, string> = {
  primary:
    "border-rust-500 text-rust-500 hover:bg-rust-500 hover:text-dusk-950",
  secondary:
    "border-sand-600 text-mist-300 hover:border-sand-400 hover:text-mist-100",
  ghost:
    "border-transparent text-mauve-400 hover:text-mist-200 hover:border-sand-700",
};

const sizeStyles: Record<AsciiButtonSize, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function AsciiButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: AsciiButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center
    border transition-colors duration-150
    font-mono
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  const corners = (
    <>
      <span className="absolute -top-px -left-px select-none">[</span>
      <span className="absolute -top-px -right-px select-none">]</span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as LinkProps;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {corners}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles}>
        {corners}
        {children}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...(props as ButtonProps)}>
      {corners}
      {children}
    </button>
  );
}
