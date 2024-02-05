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
        <ul className={`flex z-50 text-white text-lg md:text-2xl gap-4 md:gap-8 p-4 fixed top-0 right-0 left-8 md:right-8 justify-end ${isScrolled ? 'bg-black bg-opacity-75' : ''}`}>
          <ScrollLink to="home" smooth spy={true} offset={-70} duration={500} className="hover:underline cursor-pointer">Beranda</ScrollLink>
          <ScrollLink to="profile" smooth spy={true} offset={50} duration={500} className="hover:underline cursor-pointer">Profil</ScrollLink>
          <ScrollLink to="information" smooth spy={true} offset={10} duration={500} className="hover:underline cursor-pointer">Informasi</ScrollLink>
          <ScrollLink to="contact" smooth spy={true} offset={20} duration={500} className="hover:underline cursor-pointer">Kontak</ScrollLink>
        </ul>
        <button
          className={`fixed inset-0 bg-black opacity-50 ${isOpen ? 'block' : 'hidden'}`}
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <img src={crossIcon} alt="Close" className="w-6 h-6" />
          ) : (
            <img src={hamburgerIcon} alt="Menu" className="w-6 h-6" />
          )}
        </button>
      </nav>
    </div>
  );
  
}

export default Navbar;
