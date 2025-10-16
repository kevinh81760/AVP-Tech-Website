import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

export function useLenis(isLoading: boolean) {
  useEffect(() => {
    // Don't initialize until loading is complete
    if (isLoading) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Integrate Lenis with GSAP's ticker for better performance
    lenis.on('scroll', () => {
      // ScrollTrigger will automatically update
    });

    // Use GSAP ticker for smooth animation frame
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Expose lenis to window for global access (optional)
    (window as any).lenis = lenis;

    // Cleanup
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, [isLoading]);
}

