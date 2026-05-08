import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { BsSendFill } from 'react-icons/bs';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import Social from './Social';
import { useScrollReveal } from '../useScrollReveal';

const Contact = () => {
  const form = useRef();
  const sectionRef = useScrollReveal();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_2y74twn',
        'template_w2gscco',
        form.current,
        'u_qbfkKQt2fvSj-hs'
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'vikasmadhukar1430@gmail.com', href: 'mailto:vikasmadhukar1430@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 7999063330', href: 'tel:+917999063330' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'India' },
  ];

  return (
    <div className="section-container" ref={sectionRef}>
      <div className="floating-orb orb-3"></div>

      <div className="reveal-item">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </div>

      <div className="contact-grid" style={{ marginTop: '48px' }}>
        <div>
          {contactInfo.map((item) => (
            <div key={item.label} className="contact-item glass-card reveal-item">
              <div className="contact-icon">{item.icon}</div>
              <div>
                <div className="contact-label">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="contact-value" style={{ color: 'white', textDecoration: 'none' }}>
                    {item.value}
                  </a>
                ) : (
                  <div className="contact-value">{item.value}</div>
                )}
              </div>
            </div>
          ))}

          <div className="reveal-item" style={{ marginTop: '20px', paddingLeft: '20px' }}>
            <Social />
          </div>

          <div className="reveal-item" style={{ marginTop: '20px', paddingLeft: '20px' }}>
            <a href="/webdevresume.pdf" download className="glow-btn">
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form glass-card reveal-item">
          <input type="text" placeholder="Your Name" name="user_name" required className="form-input" />
          <input type="email" placeholder="Your Email" name="user_email" required className="form-input" />
          <textarea placeholder="Your Message" rows="5" name="message" required className="form-input" style={{ resize: 'vertical' }}></textarea>

          <button type="submit" className="glow-btn" style={{ alignSelf: 'flex-start', gap: '8px' }}>
            <BsSendFill /> Send Message
          </button>

          {isSent && (
            <p style={{ color: '#10b981', fontWeight: 500 }}>
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
