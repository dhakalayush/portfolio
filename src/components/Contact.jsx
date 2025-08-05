import React from 'react';
import { FiGithub, FiPhone, FiMail } from 'react-icons/fi';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="contact-section section" id="contact" ref={ref}>
      <div className="container">
        <div className={`contact-content ${isVisible ? 'animate-in' : 'animate-out'}`}>
          <div className="contact-header">
            <h2 className="contact-title">GET IN TOUCH</h2>
            <div className="title-underline"></div>
            <p className="contact-description">
              Let's discuss your next project. I'm available for collaborations and new opportunities.
            </p>
          </div>
          
          <div className="contact-github">
            <a href="https://github.com/dhakalayush" target="_blank" rel="noopener noreferrer" className="github-icon">
              <FiGithub />
            </a>
          </div>
          
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <FiPhone />
                </div>
                <h3 className="contact-card-title">Phone</h3>
              </div>
              <p className="contact-card-info">+977 9807417021</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <FiMail />
                </div>
                <h3 className="contact-card-title">Email</h3>
              </div>
              <p className="contact-card-info">ayushdhakal0914@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
