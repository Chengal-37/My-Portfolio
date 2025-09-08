import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container flex-center">
        <div className="resume-content">
          <h2 className="section-title">Download My Resume</h2>
          <p>
            You can download a PDF version of my full resume to learn more about my skills, experience, and projects.
          </p>
          <a href="/assets/resume.pdf" download="Chengalarayulu_Resume.pdf" className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;