import React from 'react';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  // Skill data: icon, name
  const skills = [
    { name: 'React', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{width:'36px',height:'36px'}} /> },
    { name: 'Next JS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" style={{width:'36px',height:'36px',background:'#fff',borderRadius:'50%'}} /> },
    { name: 'SaSS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" style={{width:'36px',height:'36px'}} /> },
    { name: 'Tailwind', icon: <img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind" style={{width:'36px',height:'36px'}} /> },
    { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style={{width:'36px',height:'36px'}} /> },
    { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{width:'36px',height:'36px'}} /> },
    { name: 'Express', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" style={{width:'36px',height:'36px',background:'#fff',borderRadius:'50%'}} /> },
  ];

  return (
    <section className="skills-section section" id="skills" ref={ref}>
      <div className="container">
        <div className={`skills-content ${isVisible ? 'animate-in' : 'animate-out'}`}>
          <div className="skills-header">
            <p className="skills-description">
              My technical toolkit and favorite technologies.
            </p>
          </div>
          <div className="skills-grid new-skills-grid">
            {skills.map((skill, idx) => (
              <div className="skill-card new-skill-card" key={skill.name}>
                <div className="skill-icon new-skill-icon">{skill.icon}</div>
                <div className="new-skill-label">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
