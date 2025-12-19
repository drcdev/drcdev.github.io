"use client";

import { useEffect, useRef } from "react";
import { AsciiBox } from "./ui";

function getCssVariable(name: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

interface GhostSignupProps {
  site: string;
  label?: string;
  title?: string;
  description?: string;
  icon?: string;
}

export function GhostSignup({
  site,
  label,
  title,
  description,
  icon,
}: GhostSignupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Read colors from CSS custom properties
    const backgroundColor = getCssVariable("--color-dusk-950");
    const textColor = getCssVariable("--color-mist-BASE");
    const buttonColor = getCssVariable("--color-rust-BASE");

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/ghost/signup-form@~0.3/umd/signup-form.min.js";
    script.async = true;
    script.dataset.site = site;
    script.dataset.locale = "en";

    if (label) script.dataset.label1 = label;
    if (backgroundColor) script.dataset.backgroundColor = backgroundColor;
    if (textColor) script.dataset.textColor = textColor;
    if (buttonColor) script.dataset.buttonColor = buttonColor;
    script.dataset.buttonTextColor = textColor;
    if (title) script.dataset.title = title;
    if (description) script.dataset.description = description;
    if (icon) script.dataset.icon = icon;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [site, label, title, description, icon]);

  return (
    <section className="pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <AsciiBox variant="subtle" padding="sm">
          <div ref={containerRef} className="h-[30vmin] min-h-90" />
        </AsciiBox>
      </div>
    </section>
  );
}
