import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (navigator.maxTouchPoints > 0) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Hide native cursor
    document.body.style.cursor = 'none';

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.08 });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.08 });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });

    const onMove = (e) => {
      setIsVisible(true);
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    // Handle hover states via data-cursor attribute
    const handleHoverEnter = (e) => {
      const type = e.currentTarget.dataset.cursor;
      if (type === 'pointer') {
        gsap.to(ring, { scale: 1.8, borderColor: 'var(--accent-cyan)', duration: 0.3 });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      } else if (type === 'text') {
        gsap.to(ring, { scale: 4, opacity: 0.1, duration: 0.3 });
      }
    };

    const handleHoverLeave = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(255,255,255,0.6)', opacity: 1, duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // Auto-apply to interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor]');
    interactives.forEach(el => {
      if (!el.dataset.cursor) el.dataset.cursor = 'pointer';
      el.addEventListener('mouseenter', handleHoverEnter);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          background: 'white',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s',
          mixBlendMode: 'difference',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '36px',
          height: '36px',
          border: '1.5px solid rgba(255,255,255,0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CustomCursor;
