import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Make sure to install react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/chengalarayulu-chinthakayala-0a2938253/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Chengal-37" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <p>Thanks for visiting my portfolio. Feel free to connect with me!</p>
        <p>&copy; {new Date().getFullYear()} Chengalarayulu Chinthakayala. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;