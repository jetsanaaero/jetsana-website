'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  trigger?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
  onComplete?: () => void;
}

export default function TypewriterText({
  text,
  speed = 50,
  trigger = true,
  showCursor = true,
  cursorChar = '|',
  className = '',
  onComplete,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!trigger) {
      setDisplayedText('');
      setIsComplete(false);
      indexRef.current = 0;
      clearTimer();
      return;
    }

    setDisplayedText('');
    setIsComplete(false);
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        indexRef.current += 1;
        setDisplayedText(text.slice(0, indexRef.current));
      } else {
        clearTimer();
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return clearTimer;
  }, [text, speed, trigger, clearTimer, onComplete]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{displayedText}</span>
      <AnimatePresence>
        {showCursor && trigger && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={
              isComplete
                ? { opacity: [1, 0], transition: { repeat: Infinity, repeatType: 'reverse', duration: 0.6 } }
                : { opacity: 1 }
            }
            exit={{ opacity: 0 }}
            className="inline-block ml-[1px] text-[#C9A96E]"
            aria-hidden="true"
          >
            {cursorChar}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
