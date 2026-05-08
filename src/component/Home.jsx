import React, { useRef, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import VanillaTilt from 'vanilla-tilt';
import Social from './Social';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import gsap from 'gsap';

const Home = () => {
  const tiltRef = useRef(null);
  const nameRef = useRef(null);
  const textRef = useRef(null);
  const heroRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Tilt on image
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 10, speed: 400, glare: true, 'max-glare': 0.15, scale: 1.02,
      });
    }

    // Hero entrance — triggered after preloader
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from('.hero-greeting', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' })
        .from('.hero-name', { y: 60, opacity: 0, duration: 0.9, ease: 'power4.out' }, '-=0.4')
        .from('.hero-role', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from('.hero-actions', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .from('.hero-socials', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .from('.hero-image-wrapper', { x: 60, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1.2')
        .from(scrollRef.current, { opacity: 0, duration: 0.5 }, '-=0.2');
    }, heroRef);

    // Scroll indicator spin
    if (scrollRef.current) {
      gsap.to(scrollRef.current.querySelector('.scroll-text'), {
        rotation: 360, duration: 10, ease: 'none', repeat: -1,
      });
    }

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section" ref={heroRef} style={{ overflow: 'hidden' }}>
      {/* Floating Orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>

      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="hero-content">
        {/* Text Side */}
        <div className="hero-text">
          <p className="hero-greeting" ref={textRef}>
            <span style={{ fontSize: '1.2rem' }}>👋</span>&nbsp; Hello World, I'm
          </p>
          <h1 className="hero-name" ref={nameRef}>
            <span className="gradient-text">Vikas</span>{' '}
            <span style={{ color: 'white' }}>Madhukar</span>
          </h1>
          <div className="hero-role">
            <span style={{ color: 'var(--text-secondary)' }}>
              <Typewriter
                words={['Game Developer', 'Web Developer', 'UI/UX Designer', 'Game Designer', 'Creative Coder']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </span>
          </div>
          <p className="hero-desc">
            Building immersive games with Unity and crafting modern web experiences with React & Node.js.
            Passionate about turning creative ideas into engaging digital products.
          </p>
          <div className="hero-actions">
            <a
              href="#projects"
              className="glow-btn"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              View Projects
            </a>
            <a
              href="/vikasMadhukarResume.pdf"
              download
              className="glow-btn"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <FaDownload size={13} /> Resume
            </a>
          </div>
          <div className="hero-socials" style={{ marginTop: '32px' }}>
            <Social />
          </div>
        </div>

        {/* Image Side */}
        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>
          <div className="hero-image-container" ref={tiltRef} data-tilt>
            <img src="/vikas.png" alt="Vikas Madhukar" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        ref={scrollRef}
        onClick={scrollToAbout}
        className="scroll-indicator"
        aria-label="Scroll down"
      >
        <svg viewBox="0 0 100 100" className="scroll-text">
          <path id="circlePath" d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
          <text fontSize="10.5" fill="rgba(255,255,255,0.5)" letterSpacing="3">
            <textPath href="#circlePath">SCROLL DOWN • SCROLL DOWN • </textPath>
          </text>
        </svg>
        <FaArrowDown className="scroll-arrow" />
      </button>
    </div>
  );
};

export default Home;
