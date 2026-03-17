'use client';

import React from 'react';
import Image from 'next/image';

interface JetSilhouetteProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * Professional Learjet 31 illustration (Wikimedia Commons, public domain)
 * Rendered with CSS filters to appear in brand gold on dark background
 */
export const JetSilhouette: React.FC<JetSilhouetteProps> = ({
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        filter:
          'brightness(0.6) sepia(1) saturate(1.5) hue-rotate(15deg) brightness(0.9)',
        opacity: 0.7,
        transform: 'scaleX(-1)',
      }}
    >
      <Image
        src="/images/learjet.svg"
        alt="Private jet illustration"
        width={600}
        height={464}
        priority
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default JetSilhouette;
