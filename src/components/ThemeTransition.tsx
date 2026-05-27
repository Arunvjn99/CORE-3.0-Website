"use client";

import { createContext, useContext } from "react";

const ThemeContext = createContext<{ isDark: boolean }>({ isDark: true });
export const useThemeMode = () => useContext(ThemeContext);

/**
 * All-dark Awwwards layout — no transition needed.
 * Kept as a context provider for compatibility with consumers.
 */
export default function ThemeTransition({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{ isDark: true }}>
      <main data-theme="dark">
        {children}
      </main>
    </ThemeContext.Provider>
  );
}
