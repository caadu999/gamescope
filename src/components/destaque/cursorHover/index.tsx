'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, type ReactNode, type MouseEvent } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

interface HoverFollowBadgeProps {
  children: ReactNode;
  label: string;
}

export function CursorFollow({ children, label }: HoverFollowBadgeProps) {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      <motion.div
        className="pointer-events-none absolute flex items-center justify-center gap-3 whitespace-nowrap rounded-[4px] bg-[#f3f1ec] px-[10px] py-[10px] text-[20px] font-bold text-[#141414]"
        style={{
          left: springX,
          top: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.6,
        }}
        transition={{ duration: 0.2 }}
      >
        {label}{' '}
        <div className="flex h-7 w-7 items-center rounded-[2px] bg-[#141414] p-2 text-white">
          <GoArrowUpRight size={30} strokeWidth={2} />
        </div>
      </motion.div>
    </div>
  );
}
