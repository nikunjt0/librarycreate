'use client';

import { useEffect } from 'react';

export default function ScrollSpeed() {
  useEffect(() => {
    let scrollSpeed = 0.5; // Reduce scroll speed to 50%
    let ticking = false;

    const handleWheel = (e: WheelEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          window.scrollBy({
            top: e.deltaY * scrollSpeed,
            behavior: 'auto'
          });
          ticking = false;
        });
        ticking = true;
      }
      e.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return null;
}

