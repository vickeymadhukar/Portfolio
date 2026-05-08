import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Works = ({ title, description, image, link, tags = [] }) => {
  return (
    <div className="project-card reveal-item">
      <div className="project-image">
        <img src={image} alt={title} loading="lazy" />
        <div className="project-overlay">
          <a href={link} target="_blank" rel="noopener noreferrer" className="glow-btn" style={{ fontSize: '0.9rem', padding: '10px 24px' }}>
            View Live <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </div>
  );
};

export default Works;
