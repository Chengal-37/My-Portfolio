import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu automatically if screen resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="logo">Chengalarayulu Chinthakayala</a>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-heading">
            <h4>Navigation</h4>
          </div>
          <ul className="nav-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      ></div>
    </header>
  );
};

export default Header;
