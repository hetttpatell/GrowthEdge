import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event) => setMatches(event.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export const useBreakpoint = () => {
  const isXs = useMediaQuery('(min-width: 475px)');
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isXl = useMediaQuery('(min-width: 1280px)');
  const is2Xl = useMediaQuery('(min-width: 1536px)');
  const is3Xl = useMediaQuery('(min-width: 1600px)');

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    is3Xl,
    isMobile: !isSm,
    isTablet: isSm && !isLg,
    isDesktop: isLg,
  };
};
