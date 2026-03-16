'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonVariant = 'outline' | 'solid';
type ButtonSize = 'sm' | 'md' | 'lg';

interface GoldButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface GoldButtonLinkProps extends GoldButtonBaseProps {
  href: string;
  onClick?: () => void;
  type?: never;
}

interface GoldButtonActionProps extends GoldButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

type GoldButtonProps = GoldButtonLinkProps | GoldButtonActionProps;

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-xs min-h-[44px]',
  md: 'px-8 py-3 text-sm min-h-[44px]',
  lg: 'px-10 py-4 text-base min-h-[52px]',
};

const variantStyles: Record<ButtonVariant, string> = {
  outline: [
    'border border-[#C9A96E] bg-transparent text-[#C9A96E]',
    'hover:bg-[#C9A96E] hover:text-[#0B1623]',
  ].join(' '),
  solid: [
    'border border-[#C9A96E] bg-[#C9A96E] text-[#0B1623]',
    'hover:bg-[#D4B87A] hover:border-[#D4B87A]',
  ].join(' '),
};

export default function GoldButton({
  children,
  variant = 'outline',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
}: GoldButtonProps) {
  const baseClasses = [
    'inline-flex items-center justify-center',
    'font-montserrat uppercase tracking-[0.15em] font-medium',
    'transition-all duration-300 ease-in-out',
    'cursor-pointer select-none',
    sizeStyles[size],
    variantStyles[variant],
    className,
  ].join(' ');

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} onClick={onClick} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
