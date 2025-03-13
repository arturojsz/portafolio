import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  const frontendSkills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3 / SASS', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'React', level: 88 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 82 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 78 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'Firebase', level: 82 },
    { name: 'GraphQL', level: 65 }
  ];

  const designSkills = [
    { name: 'UI/UX Design', level: 85 },
    { name: 'Figma', level: 80 },
    { name: 'Adobe XD', level: 75 },
    { name: 'Photoshop', level: 70 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Design Systems', level: 85 }
  ];

  const otherSkills = [
    { name: 'Git / GitHub', level: 90 },
    { name: 'Webpack', level: 75 },
    { name: 'SEO', level: 80 },
    { name: 'Performance Optimization', level: 85 },
    { name: 'Docker', level: 65 },
    { name: 'Agile / Scrum', level: 80 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
            
            // If the element is a progress bar, animate it
            if (entry.target.classList.contains('progress-bar')) {
              const level = entry.target.getAttribute('data-level');
              entry.target.style.width = `${level}%`;
            }
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const fadeElements = skillsRef.current.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    const progressBars = skillsRef.current.querySelectorAll('.progress-bar');
    progressBars.forEach(el => observer.observe(el));
    
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
      progressBars.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title fade-in">My Skills</h2>
        <p className="section-description fade-in">
          Here are my technical skills and proficiency levels. I'm constantly learning and improving to stay up-to-date with the latest technologies.
        </p>
        
        <div className="skills-grid">
          <div className="skills-category fade-in">
            <h3 className="category-title">Frontend Development</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" data-level={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category fade-in">
            <h3 className="category-title">Backend Development</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" data-level={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category fade-in">
            <h3 className="category-title">Design</h3>
            <div className="skills-list">
              {designSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" data-level={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category fade-in">
            <h3 className="category-title">Other Skills</h3>
            <div className="skills-list">
              {otherSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" data-level={skill.level}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 