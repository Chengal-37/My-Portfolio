import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            Hello again! I'm an enthusiastic and detail-oriented Full Stack Web Developer Intern with a solid foundation in front-end and back-end technologies. I'm currently expanding my skills at Future Interns, where I'm gaining practical experience in building and deploying real-world applications.
          </p>
          <p>
            My journey into tech began with a curiosity for how things work on the web, which quickly grew into a passion for building them myself. I enjoy the entire process, from conceptualizing a design to writing clean, efficient code and seeing a project come to life.
          </p>
          <p>
            Beyond coding, I'm a lifelong learner. I enjoy keeping up with the latest trends in technology, and I'm always looking for new challenges to improve my skills. When I'm not at my keyboard, you might find me hiking, reading, or exploring new cities.
          </p>
          <a href="/assets/resume.pdf" download className="btn btn-primary">Download My Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;