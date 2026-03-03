import { useBreakpoint } from '../hooks/useMediaQuery';

export const MobileOptimized = ({ children, mobileClass = '', desktopClass = '' }) => {
  const { isMobile } = useBreakpoint();
  
  return (
    <div className={isMobile ? mobileClass : desktopClass}>
      {children}
    </div>
  );
};

export const ResponsiveGrid = ({ 
  children, 
  cols = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 4,
  className = ''
}) => {
  const gridClasses = Object.entries(cols)
    .map(([breakpoint, col]) => {
      if (breakpoint === 'xs') return `grid-cols-${col}`;
      return `${breakpoint}:grid-cols-${col}`;
    })
    .join(' ');

  return (
    <div className={`grid ${gridClasses} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};

export const ResponsiveText = ({ 
  children, 
  sizes = { xs: 'sm', sm: 'base', md: 'lg', lg: 'xl' },
  className = ''
}) => {
  const textClasses = Object.entries(sizes)
    .map(([breakpoint, size]) => {
      if (breakpoint === 'xs') return `text-${size}`;
      return `${breakpoint}:text-${size}`;
    })
    .join(' ');

  return (
    <span className={`${textClasses} ${className}`}>
      {children}
    </span>
  );
};
