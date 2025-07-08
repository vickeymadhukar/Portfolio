import React from 'react'
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiItchdotio } from 'react-icons/si';
const Social = () => {
  return (
    <div className="flex gap-4 md:mt-4 md:ml-0 ml-[40%] text-3xl text-white">
      {/* Instagram */}
      <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition duration-300" />
      </a>

      {/* GitHub */}
      <a href="https://github.com/vickeymadhukar" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-400 transition duration-300" />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/vikas-madhukar-87a212243/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-500 transition duration-300" />
      </a>

      {/* Email */}
      <a href="mailto:vikasmadhukar1430@gmail.com" target="_blank" rel="noopener noreferrer">
        <MdEmail className="hover:text-red-400 transition duration-300" />
      </a>

      {/* Itch.io */}
      <a href="https://vickeymadhukar.itch.io/" target="_blank" rel="noopener noreferrer">
        <SiItchdotio className="hover:text-red-500 transition duration-300" />
      </a>
    </div>
  );
}

export default Social
