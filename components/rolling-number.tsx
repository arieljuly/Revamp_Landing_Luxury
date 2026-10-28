"use client";

import { useEffect, useRef, useState } from "react";

type RollingNumberProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
};

export function RollingNumber({
  value,
  decimals = 0,
  suffix = "",
  prefix = "",
}: RollingNumberProps) {
  // Start at the final value so the UI is fully visible on initial load
  const [displayValue, setDisplayValue] = useState(value);
  const numberRef = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const node = numberRef.current;
    if (!node) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    if (hasStarted.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;
        hasStarted.current = true;

        // Rewind to 0 right before animating (this happens inside the observer callback, which is safe)
        setDisplayValue(0);

        const startTime = performance.now();
        const duration = 1400;

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(value * eased);
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  const finalString = `${prefix}${value.toFixed(decimals)}${suffix}`;

  return (
    <span
      ref={numberRef}
      aria-label={finalString}
      className="inline-block tabular-nums"
      style={{ minWidth: `${finalString.length}ch` }}
    >
      <span aria-hidden="true">
        {prefix}
        {displayValue.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}
