/* Copyright (c) 2026 eele14. All Rights Reserved. */
import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";

const LENIS_OPTIONS = {
  autoRaf: true,
  smoothWheel: true,
  lerp: 0.085,
  wheelMultiplier: 1,
  syncTouch: true,
  syncTouchLerp: 0.075,
  touchInertiaExponent: 1.65,
} as const;

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    setReady(true);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!ready || reducedMotion) {
    return children;
  }

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
