import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="about-section section" id="about" ref={ref}>
      <div className="container">
        <div className={`about-content ${isVisible ? 'animate-in' : 'animate-out'}`}>
          <div className="about-left">
            <h2 className="about-title">ABOUT ME</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="about-right">
            <h3 className="about-subtitle">A Designer & Front-End Developer</h3>
            <p className="about-description">
              My journey began with curiosity about how websites work, and it has evolved into a genuine 
              passion for creating digital solutions that make a difference and allowing me to bridge the gap 
              between technical functionality and user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
