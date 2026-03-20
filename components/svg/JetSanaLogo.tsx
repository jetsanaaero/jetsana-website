'use client';

import React from 'react';
import Image from 'next/image';

interface JetSanaLogoProps {
  variant?: 'full' | 'wordmark' | 'mark';
  className?: string;
  color?: string;
}

export const JetSanaLogo: React.FC<JetSanaLogoProps> = ({
  variant = 'full',
  className = '',
}) => {
  return (
    <Image
      src="/images/logo.png"
      alt="JetSana - Aircraft Detailing Specialists"
      width={360}
      height={variant === 'mark' ? 40 : 80}
      priority
      className={`w-auto ${className}`}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default JetSanaLogo;
