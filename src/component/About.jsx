import React from 'react';
import { useScrollReveal } from '../useScrollReveal';
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const sectionRef = useScrollReveal();

  const stats = [
    { number: '5+', label: 'Projects' },
    { number: '10+', label: 'Skills' },
    { number: '2+', label: 'Years Exp' },
  ];

  const info = [
    { icon: <FaBriefcase />, label: 'Role', value: 'Game & Web Developer' },
    { icon: <FaGraduationCap />, label: 'Education', value: 'B.Tech / CS Student' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'India' },
    { icon: <FaEnvelope />, label: 'Email', value: 'vikasmadhukar1430@gmail.com' },
  ];

  return (
    <div className="section-container" ref={sectionRef} style={{ background: 'var(--bg-secondary)' }}>
      <div className="reveal-item">
        <span className="section-label">About Me</span>
        <h2 className="section-title">
          Turning <span className="gradient-text">Ideas</span> Into Reality
        </h2>
      </div>

      <div className="about-grid" style={{ marginTop: '48px' }}>
        <div className="about-text reveal-item">
          <p>
            I'm a passionate developer specializing in <strong style={{ color: 'var(--accent-cyan)' }}>game development</strong> and <strong style={{ color: 'var(--accent-purple)' }}>web development</strong>, with a strong interest in building immersive and interactive digital experiences.
          </p>
          <p>
            Whether it's developing intense multiplayer FPS games using Unity and Photon, designing eerie environments for horror games, or crafting modern responsive web interfaces with React, Tailwind, and Node.js — I love turning ideas into engaging user experiences.
          </p>
          <p>
            I'm also skilled in UI/UX design, AR/VR/MR development, and animation, making me a versatile developer who can handle both the creative and technical side of any project.
          </p>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card glass-card reveal-item">
                <div className="stat-number gradient-text">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-info">
          {info.map((item) => (
            <div key={item.label} className="info-item glass-card reveal-item">
              <div className="info-icon">{item.icon}</div>
              <div>
                <div className="info-label">{item.label}</div>
                <div className="info-value">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
