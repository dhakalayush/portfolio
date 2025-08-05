import React from 'react';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section section">
      <div className="container">
        <div className="home-content">
          {/* Status Indicator */}
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span>Available for new projects</span>
          </div>

          {/* Top Left Text */}
          <div className="home-text-top">
            <p className="greeting">HI I AM</p>
            <h1 className="name">Ayush Dhakal</h1>
          </div>

          {/* Profile Image */}
          <div className="profile-image">
            <img 
              src="/images/profile.jpg" 
              alt="Ayush Dhakal" 
              className="profile-img"
            />
          </div>

          {/* Bottom Left Title */}
          <div className="home-title-bottom">
            <p className="title">Web Designer / Developer</p>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="/resume.pdf" download className="btn btn-secondary">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn btn-primary">
              Get in touch <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
