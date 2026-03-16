'use client';

import React from 'react';

interface JetSanaLogoProps {
  variant?: 'full' | 'wordmark' | 'mark';
  className?: string;
  color?: string;
}

export const JetSanaLogo: React.FC<JetSanaLogoProps> = ({
  variant = 'full',
  className = '',
  color = '#C9A96E',
}) => {
  // "mark" variant: just the wordmark text, no subtitle
  if (variant === 'mark') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360 40"
        className={className}
        fill="none"
        aria-label="JetSana logo"
      >
        <text
          x="180"
          y="24"
          textAnchor="middle"
          dominantBaseline="central"
          fill={color}
          fontFamily="'Cormorant Garamond', 'Cormorant', Georgia, 'Times New Roman', serif"
          fontSize="32"
          fontWeight="400"
          letterSpacing="0.3em"
          className="font-display"
        >
          JETSANA
        </text>
      </svg>
    );
  }

  const isFull = variant === 'full';
  const viewBoxHeight = isFull ? 80 : 40;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 360 ${viewBoxHeight}`}
      className={className}
      fill="none"
      aria-label="JetSana logo"
    >
      {/* JETSANA wordmark */}
      <text
        x="180"
        y="28"
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        fontFamily="'Cormorant Garamond', 'Cormorant', Georgia, 'Times New Roman', serif"
        fontSize="32"
        fontWeight="400"
        letterSpacing="0.3em"
        className="font-display"
      >
        JETSANA
      </text>

      {isFull && (
        <>
          {/* Thin horizontal rule */}
          <line
            x1="110"
            y1="48"
            x2="250"
            y2="48"
            stroke={color}
            strokeWidth="0.75"
            opacity="0.6"
          />

          {/* Small decorative diamond at center of rule */}
          <path
            d="M180 44 L183 48 L180 52 L177 48 Z"
            fill={color}
            opacity="0.5"
          />

          {/* Subtitle */}
          <text
            x="180"
            y="66"
            textAnchor="middle"
            dominantBaseline="central"
            fill={color}
            fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif"
            fontSize="8"
            fontWeight="300"
            letterSpacing="0.25em"
            opacity="0.85"
          >
            AIRCRAFT DETAILING SPECIALISTS
          </text>
        </>
      )}
    </svg>
  );
};

export default JetSanaLogo;
