import React, { useState, useEffect, useRef } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce platform with user authentication, product management, and payment integration.',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: '/ecommerce-placeholder.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user roles, and deadline tracking.',
      category: 'web',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      image: '/task-app-placeholder.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Travel Booking Interface',
      description: 'A user-friendly travel booking interface with interactive maps, filtering options, and booking management.',
      category: 'ui',
      technologies: ['Figma', 'Adobe XD', 'Photoshop'],
      image: '/travel-ui-placeholder.jpg',
      demoUrl: '#',
      codeUrl: null
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'A mobile application for tracking workouts, nutrition, and progress with personalized recommendations.',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      image: '/fitness-app-placeholder.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website Template',
      description: 'A customizable portfolio website template for creative professionals with animations and dark mode.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      image: '/portfolio-placeholder.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'Restaurant Ordering System',
      description: 'An online ordering system for restaurants with menu management, order tracking, and payment processing.',
      category: 'web',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      image: '/restaurant-placeholder.jpg',
      demoUrl: '#',
      codeUrl: '#'
    },
  ];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  
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
      { threshold: 0.1 }
    );
    
    const fadeElements = projectsRef.current.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, [filteredProjects]);
  
  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title fade-in">My Projects</h2>
        <p className="section-description fade-in">
          Here are some of my recent projects. Each project is a unique piece of development and design.
        </p>
        
        <div className="project-filters fade-in">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => handleFilterClick('web')}
          >
            Web Development
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => handleFilterClick('mobile')}
          >
            Mobile Apps
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ui' ? 'active' : ''}`}
            onClick={() => handleFilterClick('ui')}
          >
            UI/UX Design
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className="project-card fade-in" 
              key={project.id}
              style={{'--delay': `${index * 0.1}s`}}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span>Project Image</span>
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.codeUrl && (
                      <a href={project.codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6"></polyline>
                          <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <p className="no-projects">No projects found in this category.</p>
        )}
        
        <div className="projects-cta fade-in">
          <p>Interested in my work? Let's discuss your project!</p>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 