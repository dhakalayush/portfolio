
import React, { useState, useEffect } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Projects.css';

const projects = [
  {
    title: 'Taskify',
    description:
      'A comprehensive full-stack task management application featuring Kanban boards, collaborative features, and real-time updates. Built with modern web technologies to enhance team productivity.',
    image: '/images/4.png',
    code: 'https://github.com/dhakalayush/taskify',
  },
  {
    title: 'Gamification in Quiz',
    description:
      'An interactive quiz platform that transforms learning through gamification elements including XP systems, leaderboards, and progress dashboards for both students and teachers.',
    image: '/images/2.png',
    code: 'https://github.com/dhakalayush/Gamification-in-Quiz',
  },
];

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000); // Change project every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="projects-section section" id="projects" ref={ref}>
      <div className="container">
        <div className={`projects-container ${isVisible ? 'animate-in' : 'animate-out'}`}>
          <div className="project-content">
            <div className="project-info">
              <h2 className="project-title">{projects[currentProject].title}</h2>
              <p className="project-description">{projects[currentProject].description}</p>
              <a 
                href={projects[currentProject].code} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn project-btn"
              >
                View Code
              </a>
            </div>
            <div className="project-image">
              <div className="image-placeholder">
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].title}
                  key={currentProject}
                />
              </div>
            </div>
          </div>
          
          {/* Project indicators */}
          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentProject ? 'active' : ''}`}
                onClick={() => setCurrentProject(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
