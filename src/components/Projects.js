import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('https://my-portfolio-backend-zu90.onrender.com')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // The tech_stack from the database is a single string.
        // We split it into an array to map over it.
        const formattedProjects = data.map(project => ({
          ...project,
          tech_stack: project.tech_stack.split(',').map(tech => tech.trim())
        }));
        setProjects(formattedProjects);
        setError(null);
      })
      .catch(err => {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image_url} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech_stack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;