import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Marquee = ({ items, direction = 'left', speed = 35, className = '' }) => {
  const trackRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait for layout
    const setup = () => {
      const itemWidth = track.scrollWidth / 2;
      const duration = itemWidth / speed;

      animRef.current = gsap.to(track, {
        x: direction === 'left' ? -itemWidth : itemWidth,
        duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: (x) => {
            const val = parseFloat(x) % itemWidth;
            return direction === 'left'
              ? (val <= 0 ? val : val - itemWidth) + 'px'
              : (val >= 0 ? val : val + itemWidth) + 'px';
          }
        }
      });
    };

    setup();

    // Pause on hover
    const pause = () => animRef.current?.pause();
    const resume = () => animRef.current?.resume();
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);

    return () => {
      animRef.current?.kill();
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
    };
  }, [direction, speed]);

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`marquee-wrapper ${className}`}>
      <div ref={trackRef} className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">
            {item.img ? (
              <img src={item.img} alt={item.name} className="marquee-logo" />
            ) : (
              <span className="marquee-emoji">{item.emoji || '⚡'}</span>
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
