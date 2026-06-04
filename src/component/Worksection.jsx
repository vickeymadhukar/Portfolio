import React, { useState } from 'react';
import Works from './Works';
import { useScrollReveal } from '../useScrollReveal';

const projects = [
  {
    id: '3',
    title: 'Fanta Landing Page',
    description: 'A clean and modern animated website to showcase new product launches with smooth GSAP animations.',
    image: '/images/fanta.png',
    link: 'https://vickeymadhukar.github.io/CAN-lauch-site/',
    buttontext: 'Visit Site',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    category: 'Frontend',
  },
  {
    id: '4',
    title: 'BMW XI Showcase',
    description: 'A cinematic BMW XI automotive experience built with React.js, GSAP, and Tailwind CSS — featuring immersive scroll-driven animations, dramatic car reveals, and a premium luxury UI that brings the thrill of the road to life.',
    image: '/images/carthumnail.png',
    link: 'https://bmw-xi-frontend-site.onrender.com/',
    buttontext: 'Visit Site',
    tags: ['React.js', 'GSAP', 'Tailwind CSS'],
    category: 'Frontend',
  },
  {
    id: '5',
    title: 'Platinum Card',
    description: 'A modern and elegant frontend design for a Platinum financial card landing page with scroll animations.',
    image: '/images/platinum.png',
    link: 'https://vickeymadhukar.github.io/Platinum_Credit_cardsite/',
    buttontext: 'Visit Site',
    tags: ['React', 'GSAP', 'ScrollTrigger'],
    category: 'Frontend',
  },
  {
    id: '6',
    title: 'Milton Bottle 3D',
    description: 'A 3D animated interactive website showcasing a Milton bottle.',
    image: '/images/image.png',
    link: 'https://milttonbottel-rkbz.onrender.com/',
    buttontext: 'Visit Site',
    tags: ['3D', 'Animation', 'Web Design'],
    category: 'Frontend',
  },
  {
    id: '7',
    title: 'AiCollaborator',
    description: 'An AI-powered chat application for smarter real-time collaboration, coding, and brainstorming.',
    image: '/images/aicollab.jpg',
    link: 'https://aicollaborator-1.onrender.com/',
    buttontext: 'Visit Site',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    category: 'MERN',
  },
  {
    id: '8',
    title: 'SocialImage',
    description: 'A platform where you add images made with MERN, also used Redis.',
    image: '/images/socialimage.png',
    link: 'https://socialimage-1.onrender.com/',
    buttontext: 'Visit Site',
    tags: ['MERN', 'Redis', 'Node.js', 'Express', 'React', 'MongoDB'],
    category: 'MERN',
  },
  {
    id: '9',
    title: 'Bagify',
    description: 'A bag selling website made with HTML, CSS, JavaScript, MongoDB and EJS.',
    image: '/images/bagify.jpg',
    link: 'https://shopwebsite-6iut.onrender.com/',
    buttontext: 'Visit Site',
    tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'EJS'],
    category: 'MERN',
  },
  {
    id: '1',
    title: 'Dread Hall',
    description: 'A dark multiplayer horror game set inside a haunted haveli where survival means eliminating others.',
    image: '/images/dreadhall.png',
    link: 'https://dreadhall.netlify.app/',
    buttontext: 'Visit Game Site',
    tags: ['Unity', 'C#', 'Photon', 'Horror'],
    category: 'Game Development',
  },
  {
    id: '2',
    title: 'Tank Strike',
    description: 'An interactive tank combat game with smooth animations and engaging gameplay mechanics.',
    image: '/images/tanskpage.png',
    link: 'https://bright-bubblegum-e356b3.netlify.app/',
    buttontext: 'Visit Game Site',
    tags: ['Unity', 'C#', 'Multiplayer'],
    category: 'Game Development',
  },
  {
    id: '10',
    title: 'Retro Style Site',
    description: 'A retro-themed website built with HTML, CSS, and JavaScript.',
    image: '/images/retrostyle.png',
    link: 'https://vickeymadhukar.github.io/RestroStyleSite/',
    buttontext: 'Visit Site',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
  },
];

const categories = ['All', 'Frontend', 'MERN', 'Game Development'];

const Worksection = () => {
  const sectionRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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

      <div className="project-categories reveal-item" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px', flexWrap: 'wrap' }}>
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '8px 24px',
              borderRadius: '30px',
              border: activeCategory === category ? '1px solid #fff' : '1px solid rgba(255, 255, 255, 0.1)',
              background: activeCategory === category ? '#fff' : 'rgba(255, 255, 255, 0.05)',
              color: activeCategory === category ? '#000' : 'rgba(255, 255, 255, 0.7)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: '600',
              outline: 'none',
              backdropFilter: 'blur(10px)',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid" style={{ marginTop: '48px' }}>
        {filteredProjects.map((project) => (
          <Works key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Worksection;
