import React from 'react';
import './Skillset.css';

const skills = [
  {
    category: 'Programming Languages',
    list: ['Java', 'JavaScript', 'Python', 'TypeScript']
  },
  {
    category: 'Core Concepts',
    list: ['Data Structures & Algorithms', 'OOP Concepts', 'API Integration']
  },
  {
    category: 'Frontend',
    list: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend',
    list: ['Spring Boot', 'Node.js', 'Hibernate', 'REST APIs', 'Express.js']
  },
  {
    category: 'Databases',
    list: ['SQL', 'PostgreSQL', 'MySQL', 'Firebase', 'MySQL Workbench', 'PGAdmin']
  },
  {
    category: 'Cloud & DevOps',
    list: ['Microsoft Azure Fundamentals', 'AWS Cloud Practitioner', 'Containers', 'Linux']
  },
  {
    category: 'Tools',
    list: ['Visual Studio', 'Git','Eclipse IDE', 'GitHub', 'Postman', 'Maven', 'Excel', 'Adobe Firefly']
  },
  {
    category: 'Platforms',
    list: ['Vercel', 'Render', 'Firebase Studio', 'GitHub Pages']
  }
];

const Skillset = () => {
  return (
    <section id="skills" className="skillset section">
      <div className="container">
        <h2 className="section-title">My Skillset</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.category}</h3>
              <ul className="skill-list">
                {skill.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;