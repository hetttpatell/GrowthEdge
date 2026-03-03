import { useState, useRef, useEffect } from 'react';

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'blur',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    // Start loading if src is set
    if (src && img.complete) {
      setIsLoaded(true);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
        {...props}
      >
        <span className="text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`
          transition-opacity duration-300 
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${className}
        `}
        loading="lazy"
        decoding="async"
        {...props}
      />
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
};
