import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Core 3 Participant Portal — Retirement Planning Reimagined",
  description: "An AI-powered retirement participant portal that guides every employee from enrollment to retirement — beautifully.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
