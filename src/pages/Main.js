import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import profileImage from '../assets/profilePic.jpeg';

function Main() {
  const textRef = useRef(null);
  const [isTypingActive, setIsTypingActive] = useState(false);
  
  useEffect(() => {
    // 컴포넌트가 마운트된 후 약간의 지연을 줘서 DOM이 완전히 준비되도록 함
    const timer = setTimeout(() => {
      setIsTypingActive(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // 타이핑 애니메이션은 isTypingActive가 true가 된 후에만 시작
    if (isTypingActive && textRef.current) {
      const roles = ['AI Engineer', 'Software Developer', 'Data Engineer', 'MLOps Engineer'];
      let currentRoleIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
      
      const type = () => {
        // 컴포넌트가 언마운트되었는지 확인
        if (!textRef.current) {
          return; // 컴포넌트가 언마운트되었으면 타이핑 중지
        }
        
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
          textRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
          currentCharIndex--;
          typingSpeed = 50;
        } else {
          textRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
          currentCharIndex++;
          typingSpeed = 100;
        }
        
        if (!isDeleting && currentCharIndex === currentRole.length) {
          isDeleting = true;
          typingSpeed = 1000; // Pause at the end
        } else if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          typingSpeed = 300; // Pause before typing next role
        }
        
        const timeout = setTimeout(type, typingSpeed);
        return () => clearTimeout(timeout); // 타임아웃 정리
      };
      
      const initialTimeout = setTimeout(type, 500);
      return () => clearTimeout(initialTimeout); // 초기 타임아웃 정리
    }
  }, [isTypingActive]);
  
  return (
    <div className="main-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-info">
            <h1 className="hero-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--primary-color)', fontWeight: 700, letterSpacing: '1px' }}>Jihyung Park</h1>
            <div className="typewriter-container">
              <span className="role-prefix">I'm a </span>
              <span className="typewriter-text" ref={textRef}></span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-color)', fontSize: '1.15rem', marginTop: '0.5rem' }}>
              Pursuing a Master's in Computer Science at UT Austin with expertise in AI agents applications and Multi-modal machine learning.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary" style={{ fontFamily: 'Cormorant Garamond, serif' }}>View Projects</Link>
              <a href="mailto:jihyung803@gmail.com" className="btn btn-secondary" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/jihyung803" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/jihyung-park" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-image-container">
            <img src={profileImage} alt="Jihyung Park" className="profile-image" />
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <div className="card about-card">
          <h2 className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--primary-color)' }}>About Me</h2>
          <p>
            I'm Jihyung Park, a graduate student at the University of Texas at Austin specializing in Computer Science. 
            My research focuses on multi-modal machine learning with a particular interest in developing AI systems that 
            can effectively process and integrate diverse types of inputs.
          </p>
          <p>
            I'm passionate about various software engineering roles, including MLOps and data engineering, where I can apply 
            my technical skills to solve real-world challenges. My goal is to bridge the gap between cutting-edge research 
            and practical applications.
          </p>
        </div>
      </div>
      
      <div className="highlights-section">
        <h2 className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--primary-color)' }}>Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>Education</h3>
            <p>Master's in Computer Science at UT Austin</p>
            <Link to="/education" className="highlight-link" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--secondary-color)' }}>Learn more <i className="fas fa-arrow-right"></i></Link>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Skills</h3>
            <p>NLP, Programming, Database, and more</p>
            <Link to="/skills" className="highlight-link" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--secondary-color)' }}>Learn more <i className="fas fa-arrow-right"></i></Link>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Projects</h3>
            <p>AI Trip Planner, Ready2Interview, and more</p>
            <Link to="/projects" className="highlight-link" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--secondary-color)' }}>Learn more <i className="fas fa-arrow-right"></i></Link>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Experience</h3>
            <p>Research and industry experience</p>
            <Link to="/experience" className="highlight-link" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--secondary-color)' }}>Learn more <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;