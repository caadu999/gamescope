'use client';
import styles from '@/components/cardFlutuante/cardFlutuante.module.scss';
import { oldschoolGrotesk } from '@/lib/fonts';
import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CardFlutuante({ children, className }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 200) {
      const angle = Math.atan2(dy, dx);

      const moveX = -Math.cos(angle) * 30;
      const moveY = -Math.sin(angle) * 30;

      cardRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
      cardRef.current.style.transform = 'translate(0, 0)';
    }
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      ref={cardRef}
      className={`${styles.container} ${className || ' '} ${oldschoolGrotesk.className}`}
    >
      {children}
    </div>
  );
}
