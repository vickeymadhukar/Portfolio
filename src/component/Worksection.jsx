import React from 'react';
import Works from './Works';
import { useScrollReveal } from '../useScrollReveal';

const projects = [
  {
    id: '1',
    title: 'Dread Hall',
    description: 'A dark multiplayer horror game set inside a haunted haveli where survival means eliminating others.',
    image: '/images/dreadhall.png',
    link: 'https://dreadhall.netlify.app/',
    buttontext: 'Visit Game Site',
    tags: ['Unity', 'C#', 'Photon', 'Horror'],
  },
  {
    id: '2',
    title: 'Tank Strike',
    description: 'An interactive tank combat game with smooth animations and engaging gameplay mechanics.',
    image: '/images/tanskpage.png',
    link: 'https://bright-bubblegum-e356b3.netlify.app/',
    buttontext: 'Visit Game Site',
    tags: ['Unity', 'C#', 'Multiplayer'],
  },
  {
    id: '3',
    title: 'Fanta Landing Page',
    description: 'A clean and modern animated website to showcase new product launches with smooth GSAP animations.',
    image: '/images/fanta.png',
    link: 'https://vickeymadhukar.github.io/CAN-lauch-site/',
    buttontext: 'Visit Site',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
  },
  {
    id: '4',
    title: 'BMW New Launch',
    description: 'An elegant and interactive frontend design to highlight newly launched cars with captivating animations.',
    image: '/images/carfront.png',
    link: 'https://vickeymadhukar.github.io/CAR-showcase-site/',
    buttontext: 'Visit Site',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
  },
  {
    id: '5',
    title: 'Platinum Card',
    description: 'A modern and elegant frontend design for a Platinum financial card landing page with scroll animations.',
    image: '/images/platinum.png',
    link: 'https://vickeymadhukar.github.io/Platinum_Credit_cardsite/',
    buttontext: 'Visit Site',
    tags: ['React', 'GSAP', 'ScrollTrigger'],
  },
];

const Worksection = () => {
  const sectionRef = useScrollReveal();

  return (
    <div className="section-container" ref={sectionRef} style={{ background: 'var(--bg-secondary)' }}>
      <div className="reveal-item">
        <span className="section-label">My Projects</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="section-subtitle">
          A collection of projects showcasing my skills in game development and web design.
        </p>
      </div>

      <div className="projects-grid" style={{ marginTop: '48px' }}>
        {projects.map((project) => (
          <Works key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Worksection;
