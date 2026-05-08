import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const nameRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Lock scroll during load
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onComplete && onComplete();
      }
    });

    // Animate counter 0 → 100
    const obj = { val: 0 };
    tl.to(obj, {
      val: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        setCount(Math.round(obj.val));
        if (barRef.current) {
          barRef.current.style.width = obj.val + '%';
        }
      }
    });

    // Name scale up
    tl.to(nameRef.current, {
      scale: 1.15,
      opacity: 0.4,
      duration: 0.4,
      ease: 'power2.in'
    }, '-=0.2');

    // Wipe overlay up
    tl.to(overlayRef.current, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.9,
      ease: 'power4.inOut'
    }, '+=0.1');

    return () => {
      document.body.style.overflow = '';
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#080808',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        clipPath: 'inset(0% 0% 0% 0%)',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Big name */}
      <h1
        ref={nameRef}
        style={{
          fontSize: 'clamp(4rem, 15vw, 14rem)',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.07)',
          letterSpacing: '-0.05em',
          userSelect: 'none',
          position: 'absolute',
          margin: 0,
        }}
      >
        VIKAS
      </h1>

      {/* Counter + bar */}
      <div style={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
        <div
          ref={counterRef}
          style={{
            fontSize: 'clamp(5rem, 18vw, 16rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {count}
        </div>

        {/* Progress bar */}
        <div style={{
          width: '240px',
          height: '2px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '2px',
          margin: '20px auto 0',
          overflow: 'hidden',
        }}>
          <div
            ref={barRef}
            style={{
              height: '100%',
              width: '0%',
              background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
              borderRadius: '2px',
              transition: 'none',
            }}
          />
        </div>

        <p style={{
          color: 'rgba(255,255,255,0.35)',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginTop: '12px',
        }}>
          Loading Portfolio
        </p>
      </div>
    </div>
  );
};

export default Preloader;
