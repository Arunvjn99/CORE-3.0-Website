"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any = null;

    (async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical" as const,
        gestureOrientation: "vertical" as const,
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    })();

    return () => { lenis?.destroy(); };
  }, []);

  return null;
}
