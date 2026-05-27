"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";

const ThemeContext = createContext<{ isDark: boolean }>({ isDark: false });
export const useThemeMode = () => useContext(ThemeContext);

/**
 * Watches scroll position and flips [data-theme] on <main> when
 * the dark-section sentinel enters the viewport.
 * Bridge.surf style: light top → dark bottom.
 */
export default function ThemeTransition({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sentinel = document.getElementById("dark-start");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0, rootMargin: "-10% 0px 0px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Also watch scroll for hysteresis (going back up → light)
  useEffect(() => {
    const sentinel = document.getElementById("dark-start");
    if (!sentinel) return;

    const onScroll = () => {
      const rect = sentinel.getBoundingClientRect();
      // If top of dark sentinel is below 90% of viewport → still light
      setIsDark(rect.top < window.innerHeight * 0.4);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark }}>
      <main ref={mainRef} data-theme={isDark ? "dark" : "light"}>
        {children}
      </main>
    </ThemeContext.Provider>
  );
}
