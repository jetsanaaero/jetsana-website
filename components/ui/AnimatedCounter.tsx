'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
  sublabel?: string;
  duration?: number;
  className?: string;
}

function parseValue(value: string): { numericPart: number; prefix: string; suffix: string } {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { numericPart: 0, prefix: '', suffix: value };

  const prefix = match[1];
  const numericPart = parseFloat(match[2].replace(/,/g, ''));
  const suffix = match[3];

  return { numericPart, prefix, suffix };
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function formatNumber(n: number, hasDecimals: boolean): string {
  if (hasDecimals) {
    return n.toFixed(1);
  }
  return Math.round(n).toLocaleString();
}

export default function AnimatedCounter({
  value,
  label,
  sublabel,
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const { numericPart, prefix, suffix } = parseValue(value);
  const hasDecimals = value.includes('.');

  const animate = useCallback(() => {
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = easedProgress * numericPart;

      setDisplayValue(`${prefix}${formatNumber(currentValue, hasDecimals)}${suffix}`);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [numericPart, prefix, suffix, hasDecimals, duration]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasAnimated, animate]);

  return (
    <div ref={elementRef} className={`text-center ${className}`}>
      <div
        className="font-cormorant-garamond text-5xl md:text-6xl lg:text-7xl font-light text-[#C9A96E] leading-none"
        aria-label={value}
      >
        {hasAnimated ? displayValue : `${prefix}0${suffix}`}
      </div>
      <div className="mt-3 font-montserrat text-sm md:text-base uppercase tracking-[0.15em] text-[#F5F0E8]">
        {label}
      </div>
      {sublabel && (
        <div className="mt-1 font-montserrat text-xs tracking-wider text-[#7A8FA3] font-light">
          {sublabel}
        </div>
      )}
    </div>
  );
}
