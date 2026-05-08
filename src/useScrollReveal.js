import { useEffect, useRef } from 'react';

export function useScrollReveal(selector = '.reveal-item') {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay based on element index within its parent
            const el = entry.target;
            const siblings = el.parentElement
              ? Array.from(el.parentElement.querySelectorAll(selector))
              : [];
            const idx = siblings.indexOf(el);
            const delay = Math.min(idx * 80, 600);

            setTimeout(() => {
              el.classList.add('revealed');
            }, delay);

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const container = ref.current;
    if (container) {
      const elements = container.querySelectorAll(selector);
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [selector]);

  return ref;
}
