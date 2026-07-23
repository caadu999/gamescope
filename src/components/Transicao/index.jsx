'use client';

import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './transicao.module.scss';

export default function Transicao() {
  const loader = useRef(null);
  const path = useRef(null);
  const pathname = usePathname();
  const initialCurve = 200;
  const duration = 600;

  useEffect(() => {
    let start;
    let rafId;

    const loaderHeight = () => loader.current.getBoundingClientRect().height;

    const setPath = (curve) => {
      const width = window.innerWidth;
      const height = loaderHeight();
      path.current.setAttributeNS(
        null,
        'd',
        `M0 0
        L${width} 0
        L${width} ${height}
        Q${width / 2} ${height - curve} 0 ${height}
        L0 0`,
      );
    };

    const easeOutQuad = (time, s, end, dur) =>
      -end * (time /= dur) * (time - 2) + s;

    const animate = (timestamp) => {
      if (start === undefined) start = timestamp;
      const elapsed = timestamp - start;

      if (!loader.current) return;

      const height = loaderHeight();
      const newTop = easeOutQuad(elapsed, 0, -height, duration);
      loader.current.style.top = newTop + 'px';

      if (elapsed < duration) {
        rafId = requestAnimationFrame(animate);
      } else {
        loader.current.style.top = -height + 'px';
        loader.current.style.pointerEvents = 'none';
        loader.current.style.visibility = 'hidden';
      }
    };

    if (loader.current) {
      loader.current.style.visibility = 'visible';
      loader.current.style.pointerEvents = 'auto';
      loader.current.style.top = '0px';
    }
    start = undefined;

    setPath(initialCurve);
    const timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return (
    <div ref={loader} className={styles.transicao}>
      <svg>
        <path ref={path}></path>
      </svg>
    </div>
  );
}
