import React from 'react';
import './Skillset.css';

const skills = [
  {
    category: 'Programming Languages',
    list: ['Java', 'Python', 'JavaScript']
  },
  {
    category: 'Core Concepts',
    list: ['Data Structures & Alogrithms', 'OOPs Concepts']
  },
  {
    category: 'Frontend',
    list: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'BootStrap', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    list: ['Spring Boot', 'Hibernate', 'JDBC', 'JSP', 'Node.js', 'RESTful APIs']
  },
  {
    category: 'Databases',
    list: ['SQL', 'MySQL', 'MySQL WorkBench', 'PostgreSQL']
  },
  {
    category: 'Cloud Computing',
    list: ['Microsoft Azure', 'AWS', 'GCP', 'Linux', 'Containers', 'Cloud Services']
  },
  {
    category: 'Platforms & Tools',
    list: ['Microsoft Visual Studio', 'Eclipse IDE', 'GitHub', 'Git', 'Postman', 'Maven', 'MS Excel']
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