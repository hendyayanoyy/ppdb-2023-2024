import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import hamburgerIcon from '../assets/hamburger.png';
import crossIcon from '../assets/cross.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav>
        <ul className={`flex text-white text-lg md:text-2xl gap-4 md:gap-8 p-4 fixed top-0 left-0 md:right-8 justify-end ${isScrolled ? 'bg-black bg-opacity-75' : ''}`}>
          <ScrollLink activeClass="active" smooth spy to="home" className="hover:underline cursor-pointer">Beranda</ScrollLink>
          <ScrollLink activeClass="active" smooth spy to="profile" className="hover:underline cursor-pointer">Profil</ScrollLink>
          <ScrollLink activeClass="active" smooth spy to="information" className="hover:underline cursor-pointer">Informasi</ScrollLink>
          <ScrollLink activeClass="active" smooth spy to="kontak" className="hover:underline cursor-pointer">Kontak</ScrollLink>
        </ul>
        <button
          className={`fixed inset-0 z-40 ${isOpen ? 'block' : 'hidden'}`}
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <img src={crossIcon} alt="Close" className="w-6 h-6" />
          ) : (
            <img src={hamburgerIcon} alt="Menu" className="w-6 h-6" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black backdrop-blur-md opacity-50 z-30"></div>
      )}
    </div>
  );
}

export default Navbar;
