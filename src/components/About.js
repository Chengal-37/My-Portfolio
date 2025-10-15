import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        {/* This is the main container for the two columns */}
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Chengalarayulu Chinthakayala, a detail-oriented Full Stack Java & Web Developer with hands-on experience building scalable and user-centric applications. Through internships at Future Interns and EazyByts, I have developed real-world projects like chat applications, stock simulators, news aggregators, and e-commerce platforms using technologies such as Java, Spring Boot, React.js, Node.js, MySQL, PostgreSQL, and cloud platforms.
            </p>
            <p>
              My journey into technology began with curiosity about how web applications work, which evolved into a passion for building them. I enjoy the entire development process — from designing intuitive interfaces to writing clean, efficient backend code — and seeing ideas come to life in functional applications.
            </p>
            <p>
              Beyond coding, I am a lifelong learner, constantly exploring new technologies, APIs, and tools to enhance my skill set. When not developing, I enjoy reading, exploring new places, and taking on challenges that push me to grow both personally and professionally.
            </p>
            <a href="/assets/resume.pdf" download="Chengalarayulu_Resume.pdf" className="btn btn-primary">Download My Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;