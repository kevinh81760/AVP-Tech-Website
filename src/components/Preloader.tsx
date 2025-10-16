import React, { useState, useEffect } from 'react';
import MicrochipLoader from './MicrochipLoader';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Wait for fade-out animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500); // Match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div className={`preloader ${!isLoading ? 'fade-out' : ''}`}>
      <MicrochipLoader />
    </div>
  );
};

export default Preloader;

