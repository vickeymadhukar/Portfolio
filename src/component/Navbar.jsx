import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHome, IoMdPerson, IoMdMail, IoMdContact } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? 'text-zinc-500' : 'hover:text-zinc-400';

  return (
    <header className="fixed z-100 md:w-full w-full text-white">
      <nav className="bg-transparent md:h-[70px] flex items-center justify-between md:px-40 px-6 py-4 shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold">Vikas Madhukar</div>

        {/* Hamburger (Mobile only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li>
            <NavLink to="/" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Works" className={linkClass}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={linkClass}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
      Contact
            </NavLink>
          </li>

        </ul>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-[70%] h-full bg-black text-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <div className="text-xl text-white font-bold">Menu</div>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <IoMdClose />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
          <li onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <IoMdHome />
            <NavLink to="/" className={linkClass}>
              About
            </NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <IoMdPerson />
            <NavLink to="/Works" className={linkClass}>
              Work
            </NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <IoMdMail />
            <NavLink to="/skills" className={linkClass}>
              Skills
            </NavLink>
          </li>
           <li onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <IoMdContact />
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
