import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import profileImage from '../assets/images/profile.jpg';

const About = () => {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = aboutRef.current.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        
        <div className="about-grid">
          <div className="about-image fade-in">
            <div className="image-wrapper">
              <img src={profileImage} alt="Jonas Arturo - Web Developer" className="profile-image" />
            </div>
          </div>
          
          <div className="about-content">
            <p className="about-intro fade-in">
              Hello! I'm <strong>Jonas Arturo</strong>, a passionate web developer specializing in creating beautiful and 
              functional websites and applications.
            </p>
            
            <p className="about-description fade-in">
              With a strong foundation in front-end development and a keen eye for design, 
              I strive to create user experiences that are not only visually appealing but also intuitive and accessible.
              I'm committed to writing clean, efficient code and staying up-to-date with the latest web technologies and best practices.
            </p>
            
            <div className="about-info fade-in">
              <div className="info-item">
                <span className="info-label">Name:</span>
                <span className="info-value">Jonas Arturo</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">contact@jonasarturo.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">República Dominicana</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability:</span>
                <span className="info-value available">Available for Freelance</span>
              </div>
            </div>
            
            <div className="about-actions fade-in">
              <a href="#contact" className="btn btn-primary">Hire Me</a>
              <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </div>
        
        <div className="stats-container fade-in">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-title">Years of<br />Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-title">Projects<br />Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-title">Happy<br />Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-title">Awards<br />Won</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 