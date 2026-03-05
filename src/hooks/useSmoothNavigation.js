import { useNavigate } from 'react-router-dom';

export const useSmoothNavigation = () => {
  const navigate = useNavigate();

  const smoothNavigate = (path, options = {}) => {
    // Smooth scroll to top first, then navigate
    if (options.scrollToTop !== false) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Small delay to let scroll start, then navigate
    setTimeout(() => {
      navigate(path);
    }, options.delay || 100);
  };

  return { smoothNavigate };
};
