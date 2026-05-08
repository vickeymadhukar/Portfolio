import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiItchdotio } from 'react-icons/si';

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/vickeymadhukar', label: 'GitHub', hoverColor: '#8b949e' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/vikas-madhukar-87a212243/', label: 'LinkedIn', hoverColor: '#0a66c2' },
  { icon: <FaInstagram />, href: 'https://instagram.com/vickeymadhukar', label: 'Instagram', hoverColor: '#e4405f' },
  { icon: <MdEmail />, href: 'mailto:vikasmadhukar1430@gmail.com', label: 'Email', hoverColor: '#ea4335' },
  { icon: <SiItchdotio />, href: 'https://vickeymadhukar.itch.io/', label: 'Itch.io', hoverColor: '#fa5c5c' },
];

const Social = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          title={social.label}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = social.hoverColor;
            e.currentTarget.style.borderColor = social.hoverColor;
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = `0 8px 25px ${social.hoverColor}30`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
