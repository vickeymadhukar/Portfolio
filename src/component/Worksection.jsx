import React, { useState, useEffect } from 'react';
import Works from './Works';
import { useScrollReveal } from '../useScrollReveal';
import { FaYoutube, FaTimes, FaPlay, FaGamepad } from 'react-icons/fa';

/* ─────────────────────────────────────────────
   PROJECT CARDS
───────────────────────────────────────────── */
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
    id: '12',
    title: 'ProjBazar',
    description: 'A full-stack project marketplace with image/video uploads, advanced search, and category-based filtering. Features real-time messaging via Socket.io with private rooms, unread badge notifications, JWT authentication with HttpOnly cookies, role-based access control (buyer/seller/admin), and a Cloudinary abstraction layer for media uploads.',
    image: '/images/ProjBazzar2.png',
    link: 'https://projbazar-1.onrender.com/',
    buttontext: 'Visit Site',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'Redis', 'Socket.io', 'Cloudinary'],
    category: 'MERN',
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
    id: '11',
    title: 'LexAR',
    description: 'An Augmented Reality app that digitizes NCERT textbooks, bringing science lessons to life for students through immersive AR experiences — point your camera at a page and watch concepts come alive in 3D.',
    image: '/images/LexAr.jpeg',
    link: 'https://github.com/vickeymadhukar/LexAR',
    buttontext: 'View on GitHub',
    tags: ['Unity', 'Vuforia', 'AR', 'C#', 'EdTech'],
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

/* ─────────────────────────────────────────────
   GAME VIDEOS (YouTube)
───────────────────────────────────────────── */
const gameVideos = [
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

const categories = ['All', 'Frontend', 'MERN', 'Game Development'];

/* ─────────────────────────────────────────────
   GAME VIDEO CARD
───────────────────────────────────────────── */
const GameCard = ({ game, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="game-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(game)}
    >
      <div className="game-thumb-wrapper">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="game-thumb"
          loading="lazy"
          onError={(e) => { e.target.src = `https://img.youtube.com/vi/${game.youtubeId}/hqdefault.jpg`; }}
        />
        <div className={`game-overlay ${hovered ? 'hovered' : ''}`} />
        <div className={`game-play-btn ${hovered ? 'hovered' : ''}`}>
          <FaPlay size={22} />
        </div>
        <div className="game-yt-badge">
          <FaYoutube size={14} /><span>YouTube</span>
        </div>
      </div>
      <div className="game-info">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-desc">{game.description}</p>
        <div className="game-meta">
          <span className="game-duration">{game.duration}</span>
          <div className="game-tags">
            {game.tags.map((tag) => <span key={tag} className="game-tag">{tag}</span>)}
          </div>
        </div>
        <button className="game-watch-btn">
          <FaYoutube size={16} /> Watch on YouTube
        </button>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   YOUTUBE MODAL
───────────────────────────────────────────── */
const YouTubeModal = ({ game, onClose }) => {
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

  const embedUrl = `https://www.youtube.com/embed/${game.youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="yt-modal-backdrop" onClick={onClose}>
      <div className={`yt-modal-box ${game.isShort ? 'yt-modal-short' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="yt-modal-header">
          <div className="yt-modal-title">
            <FaGamepad size={18} style={{ color: 'var(--accent)', marginRight: 8 }} />
            {game.title}
          </div>
          <button className="yt-modal-close" onClick={onClose} aria-label="Close">
            <FaTimes size={18} />
          </button>
        </div>
        <div className={game.isShort ? 'yt-video-wrapper-short' : 'yt-video-wrapper'}>
          <iframe
            src={embedUrl}
            title={game.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
        <div className="yt-modal-footer">
          <div className="yt-footer-tags">
            {game.tags.map(tag => <span key={tag} className="game-tag">{tag}</span>)}
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

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
const Worksection = () => {
  const sectionRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeGame, setActiveGame] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const showVideos = activeCategory === 'Game Development';

  return (
    <>
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

        {/* Category Filter */}
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

        {/* Project Cards */}
        <div className="projects-grid" style={{ marginTop: '48px' }}>
          {filteredProjects.map((project) => (
            <Works key={project.id} {...project} />
          ))}
        </div>

        {/* ── Game Dev Videos (only visible when Game Development tab is active) ── */}
        {showVideos && (
          <div className="game-videos-section">
            <div className="game-videos-divider">
              <span className="game-videos-label">
                <FaYoutube size={16} style={{ color: '#ff4444' }} /> Game Dev Videos
              </span>
            </div>
            <p className="game-videos-sub">Click any card to watch the video right here.</p>
            <div className="games-grid">
              {gameVideos.map((game) => (
                <GameCard key={game.id} game={game} onClick={setActiveGame} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* YouTube Modal */}
      {activeGame && (
        <YouTubeModal game={activeGame} onClose={() => setActiveGame(null)} />
      )}
    </>
  );
};

export default Worksection;
