export type SplitType = 'lines' | 'words' | 'chars';

interface SplitTextOptions {
  type: SplitType;
  className?: string;
}

/**
 * Splits text content into wrapped spans for GSAP animation
 * @param element - The HTML element containing text to split
 * @param options - Split configuration
 * @returns Array of created span elements
 */
export function splitText(
  element: HTMLElement,
  options: SplitTextOptions = { type: 'words' }
): HTMLElement[] {
  const { type, className = '' } = options;
  const text = element.textContent || '';
  const spans: HTMLElement[] = [];

  if (type === 'chars') {
    // Split into individual characters
    const chars = text.split('');
    element.innerHTML = '';
    
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // Preserve spaces
      span.style.display = 'inline-block';
      if (className) span.className = className;
      element.appendChild(span);
      spans.push(span);
    });
  } else if (type === 'words') {
    // Split into words
    const words = text.split(' ');
    element.innerHTML = '';
    
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.display = 'inline-block';
      if (className) span.className = className;
      element.appendChild(span);
      spans.push(span);
      
      // Add space between words (except last word)
      if (index < words.length - 1) {
        element.appendChild(document.createTextNode(' '));
      }
    });
  } else if (type === 'lines') {
    // For lines, we need to detect natural line breaks
    // This is a simplified version - would need more complex logic for true line detection
    const lines = text.split('\n');
    element.innerHTML = '';
    
    lines.forEach((line, index) => {
      const span = document.createElement('span');
      span.textContent = line;
      span.style.display = 'block';
      if (className) span.className = className;
      element.appendChild(span);
      spans.push(span);
      
      if (index < lines.length - 1) {
        element.appendChild(document.createElement('br'));
      }
    });
  }

  return spans;
}

/**
 * Restores original text content (removes split spans)
 */
export function unsplitText(element: HTMLElement, originalText: string): void {
  element.textContent = originalText;
}

