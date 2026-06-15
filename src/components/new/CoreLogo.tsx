"use client";

interface CoreLogoProps {
  /** Height in px — width scales proportionally (68:26 ratio) */
  height?: number;
  /** "light" for dark backgrounds, "dark" for light backgrounds */
  variant?: "light" | "dark";
}

export default function CoreLogo({ height = 26 }: CoreLogoProps) {
  const width = Math.round((68 / 26) * height);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/assets/core-logo.png"
      alt="CORE"
      width={width}
      height={height}
      style={{ display: "block", flexShrink: 0 }}
    />
  );
}
