import React from 'react';
import { useScrollReveal } from '../useScrollReveal';
import Marquee from './Marquee';

const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const row1 = [
  { name: 'React',       img: `${D}/react/react-original.svg` },
  { name: 'JavaScript',  img: `${D}/javascript/javascript-original.svg` },
  { name: 'Node.js',     img: `${D}/nodejs/nodejs-original.svg` },
  { name: 'Unity',       img: `${D}/unity/unity-original.svg` },
  { name: 'C#',          img: `${D}/csharp/csharp-original.svg` },
  { name: 'HTML5',       img: `${D}/html5/html5-original.svg` },
  { name: 'CSS3',        img: `${D}/css3/css3-original.svg` },
  { name: 'GSAP',        img: null, emoji: '✨' },
];

const row2 = [
  { name: 'Figma',       img: `${D}/figma/figma-original.svg` },
  { name: 'MongoDB',     img: `${D}/mongodb/mongodb-original.svg` },
  { name: 'Git',         img: `${D}/git/git-original.svg` },
  { name: 'GitHub',      img: `${D}/github/github-original.svg` },
  { name: 'Tailwind',    img: `${D}/tailwindcss/tailwindcss-original.svg` },
  { name: 'C++',         img: `${D}/cplusplus/cplusplus-original.svg` },
  { name: 'VS Code',     img: `${D}/vscode/vscode-original.svg` },
  { name: 'Blender',     img: `${D}/blender/blender-original.svg` },
];

const skillCards = [
  {
    title: 'Game Development',
    icon: '🎮',
    skills: ['Unity', 'C#', 'C++', 'Photon', 'AR/VR', 'Game Design'],
    color: '#7c3aed',
  },
  {
    title: 'Web Frontend',
    icon: '⚛️',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'GSAP'],
    color: '#06b6d4',
  },
  {
    title: 'Web Backend',
    icon: '🟩',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    color: '#10b981',
  },
  {
    title: 'Design & Tools',
    icon: '🎨',
    skills: ['Figma', 'UI/UX', 'Git', 'GitHub', 'Photoshop'],
    color: '#ec4899',
  },
];

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef} style={{ paddingTop: '100px', paddingBottom: '100px', overflow: 'hidden' }}>
      {/* Header */}
      <div className="section-container" style={{ paddingTop: 0, paddingBottom: '48px' }}>
        <div className="reveal-item">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </div>
      </div>

      {/* Marquee Row 1 — left */}
      <Marquee items={row1} direction="left" speed={40} />

      {/* Marquee Row 2 — right */}
      <Marquee items={row2} direction="right" speed={35} className="marquee-row-2" />

      {/* Skill Category Cards */}
      <div className="section-container" style={{ paddingTop: '60px', paddingBottom: 0 }}>
        <div className="skill-cards-grid">
          {skillCards.map((card) => (
            <div
              key={card.title}
              className="skill-cat-card glass-card reveal-item"
              style={{ '--card-accent': card.color }}
            >
              <div className="skill-cat-icon">{card.icon}</div>
              <h3 className="skill-cat-title">{card.title}</h3>
              <div className="skill-cat-tags">
                {card.skills.map(s => (
                  <span key={s} className="skill-cat-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
