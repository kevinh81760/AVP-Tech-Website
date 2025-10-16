import { gsap } from 'gsap';

interface CounterOptions {
  duration?: number;
  ease?: string;
  onUpdate?: (value: number) => void;
  onComplete?: () => void;
}

/**
 * Animates a number from start to end value
 * @param element - DOM element to update
 * @param endValue - Target number (e.g., 20, 100, 24, 99.9)
 * @param suffix - Optional suffix (e.g., '+', '%', 'ms')
 * @param options - Animation options
 */
export function animateCounter(
  element: HTMLElement,
  endValue: number,
  suffix: string = '',
  options: CounterOptions = {}
): gsap.core.Tween {
  const {
    duration = 1.5,
    ease = 'power2.out',
    onUpdate,
    onComplete,
  } = options;

  const counter = { value: 0 };

  return gsap.to(counter, {
    value: endValue,
    duration,
    ease,
    onUpdate: () => {
      const currentValue = counter.value;
      
      // Format based on whether it's a decimal
      let formattedValue: string;
      if (endValue % 1 !== 0) {
        // Has decimal (e.g., 99.9)
        formattedValue = currentValue.toFixed(1);
      } else {
        // Whole number
        formattedValue = Math.floor(currentValue).toString();
      }
      
      element.textContent = formattedValue + suffix;
      
      if (onUpdate) onUpdate(currentValue);
    },
    onComplete,
  });
}

/**
 * Parse stat text to extract number and suffix
 * Examples: "20+" → {number: 20, suffix: "+"}
 *           "100%" → {number: 100, suffix: "%"}
 *           "24/7" → {number: 24, suffix: "/7"}
 */
export function parseStatValue(statText: string): { number: number; suffix: string } {
  const match = statText.match(/^([\d.]+)(.*)$/);
  
  if (match) {
    return {
      number: parseFloat(match[1]),
      suffix: match[2],
    };
  }
  
  return { number: 0, suffix: statText };
}

