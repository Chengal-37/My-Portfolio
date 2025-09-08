import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section flex-center">
      <div className="container hero-content">
        <div className="text-content">
          <p className="intro">Hello, my name is</p>
          <h1>Chengalarayulu Chinthakayala</h1>
          <h3>Full Stack Developer | Java | Spring Boot | React.js | MySQL | Python | Cloud</h3>
          <p className="bio">
            I’m a B.Tech graduate and passionate software developer with hands-on experience through internships, building scalable web applications and solving real-world problems. Skilled in Java, Spring Boot, React.js, MySQL, and cloud technologies, I aim to create impactful solutions while continuously learning and growing.
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