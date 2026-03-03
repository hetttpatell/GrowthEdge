import { useState, useEffect, useCallback, useRef } from 'react';

export const useOptimizedScroll = (threshold = 50) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollYRef = useRef(window.scrollY);
  const tickingRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);
        setScrolled(currentScrollY > threshold);

        const direction = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
        setScrollDirection(direction);
        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { scrollY, scrolled, scrollDirection };
};
