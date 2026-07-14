import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../useScrollReveal';
import { FaYoutube, FaTimes, FaPlay, FaGamepad } from 'react-icons/fa';

const games = [
  {
    id: 'g1',
    title: 'BGMI Style Bag / Inventory System',
    description: 'A fully functional BGMI-style bag and inventory system built in Unity — featuring item pickup, equip slots, weight management and a clean in-game UI inspired by BGMI/PUBG.',
    youtubeId: '2qRkahfHrfk',
    thumbnail: `https://img.youtube.com/vi/2qRkahfHrfk/maxresdefault.jpg`,
    tags: ['Unity', 'C#', 'Inventory System', 'BGMI', 'UI'],
    duration: 'Dev Showcase',
  },
  {
    id: 'g2',
    title: 'Weapon Attachment System',
    description: 'A fully custom weapon attachment system built in Unity — swap scopes, grips, suppressors and more in real-time. Showcasing modular design, runtime attachment logic and smooth animations.',
    youtubeId: 'FmZot3HW3GU',
    thumbnail: `https://img.youtube.com/vi/FmZot3HW3GU/maxresdefault.jpg`,
    tags: ['Unity', 'C#', 'Game Systems', 'Weapons', 'Modular'],
    duration: 'Dev Showcase',
  },
  {
    id: 'g3',
    title: 'Mecha Chameleon – Work in Progress',
    description: 'A peek into the development of Mecha Chameleon — a unique mech-themed game currently in progress. Watch early mechanics, movement systems and visual style come together.',
    youtubeId: '0ibALk9Z-Eg',
    thumbnail: `https://img.youtube.com/vi/0ibALk9Z-Eg/maxresdefault.jpg`,
    tags: ['Unity', 'C#', 'Mecha', 'WIP', 'Game Dev'],
    duration: 'Short · WIP',
    isShort: true,
  },
];


// Extract YouTube ID from a URL or return the ID directly
const getYoutubeId = (url) => {
  if (!url.includes('http')) return url; // already an ID
  const match = url.match(/(?:v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : url;
};

const GameCard = ({ game, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="game-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(game)}
    >
      {/* Thumbnail */}
      <div className="game-thumb-wrapper">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="game-thumb"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://img.youtube.com/vi/${game.youtubeId}/hqdefault.jpg`;
          }}
        />
        {/* Dark overlay */}
        <div className={`game-overlay ${hovered ? 'hovered' : ''}`} />

        {/* Play button */}
        <div className={`game-play-btn ${hovered ? 'hovered' : ''}`}>
          <FaPlay size={22} />
        </div>

        {/* YouTube badge */}
        <div className="game-yt-badge">
          <FaYoutube size={14} />
          <span>YouTube</span>
        </div>
      </div>

      {/* Info */}
      <div className="game-info">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-desc">{game.description}</p>
        <div className="game-meta">
          <span className="game-duration">{game.duration}</span>
          <div className="game-tags">
            {game.tags.map((tag) => (
              <span key={tag} className="game-tag">{tag}</span>
            ))}
          </div>
        </div>
        <button className="game-watch-btn">
          <FaYoutube size={16} />
          Watch on YouTube
        </button>
      </div>
    </div>
  );
};

const YouTubeModal = ({ game, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!game) return null;

  const embedUrl = game.isShort
    ? `https://www.youtube.com/embed/${game.youtubeId}?autoplay=1&rel=0&modestbranding=1`
    : `https://www.youtube.com/embed/${game.youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="yt-modal-backdrop" onClick={onClose}>
      <div className={`yt-modal-box ${game.isShort ? 'yt-modal-short' : ''}`} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="yt-modal-header">
          <div className="yt-modal-title">
            <FaGamepad size={18} style={{ color: 'var(--accent)', marginRight: 8 }} />
            {game.title}
          </div>
          <button className="yt-modal-close" onClick={onClose} aria-label="Close">
            <FaTimes size={18} />
          </button>
        </div>

        {/* Video iframe */}
        <div className={game.isShort ? 'yt-video-wrapper-short' : 'yt-video-wrapper'}>
          <iframe
            src={embedUrl}
            title={game.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>

        {/* Footer */}
        <div className="yt-modal-footer">
          <div className="yt-footer-tags">
            {game.tags.map(tag => (
              <span key={tag} className="game-tag">{tag}</span>
            ))}
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${game.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="yt-open-btn"
          >
            <FaYoutube size={16} /> Open in YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

const GameSection = () => {
  const sectionRef = useScrollReveal();
  const [activeGame, setActiveGame] = useState(null);

  return (
    <>
      <div className="section-container" ref={sectionRef} style={{ background: 'var(--bg-primary)' }}>
        <div className="reveal-item">
          <span className="section-label">Game Showcase</span>
          <h2 className="section-title">
            My <span className="gradient-text">Games</span>
          </h2>
          <p className="section-subtitle">
            Click any card to watch the gameplay video — built with Unity, Photon & more.
          </p>
        </div>

        <div className="games-grid reveal-item">
          {games.map((game) => (
            <GameCard key={game.id} game={game} onClick={setActiveGame} />
          ))}
        </div>
      </div>

      {/* YouTube Modal */}
      {activeGame && (
        <YouTubeModal game={activeGame} onClose={() => setActiveGame(null)} />
      )}
    </>
  );
};

export default GameSection;
