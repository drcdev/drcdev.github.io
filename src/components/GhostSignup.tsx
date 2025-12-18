"use client";

import { useEffect, useRef } from "react";

interface GhostSignupProps {
  site: string;
  label?: string;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  title?: string;
  description?: string;
  icon?: string;
}

export function GhostSignup({
  site,
  label,
  backgroundColor,
  textColor,
  buttonColor,
  buttonTextColor,
  title,
  description,
  icon,
}: GhostSignupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

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
    if (buttonTextColor) script.dataset.buttonTextColor = buttonTextColor;
    if (title) script.dataset.title = title;
    if (description) script.dataset.description = description;
    if (icon) script.dataset.icon = icon;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [
    site,
    label,
    backgroundColor,
    textColor,
    buttonColor,
    buttonTextColor,
    title,
    description,
    icon,
  ]);

  return <div ref={containerRef} className="h-[30vmin] min-h-90" />;
}
