import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section flex-center">
      <div className="container hero-content">
        <div className="text-content">
          <p className="intro">Hello, my name is</p>
          <h1>Chengalarayulu Chinthakayala</h1>
          <h3>Full Stack Java & Web Developer | Java | Spring Boot | React.js | Node.js | MySQL | PostgreSQL | Python | Cloud | API Integration</h3>
          <p className="bio">
            I’m a detail-oriented B.Tech graduate and passionate full stack developer with hands-on experience through internships. I build scalable, secure, and user-centric web applications, integrating frontend and backend technologies like Java, Spring Boot, React.js, Node.js, MySQL, PostgreSQL, Python, and cloud platforms. I thrive on solving complex challenges and delivering practical solutions, continuously learning and contributing effectively to dynamic development teams.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="image-content">
          <img src="/assets/images/profile.jpg" alt="Chengalarayulu Chinthakayala" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;