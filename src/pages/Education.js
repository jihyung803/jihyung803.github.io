import React, { useState, useEffect } from 'react';
import './Education.css';

function Education() {
  const [isVisible, setIsVisible] = useState(false);

  // 컴포넌트가 마운트된 후 약간의 지연을 줘서 DOM이 완전히 준비되도록 함
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation for education cards
  useEffect(() => {
    if (!isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const educationItems = document.querySelectorAll('.education-card');
    if (educationItems.length > 0) {
      educationItems.forEach((item) => {
        observer.observe(item);
      });

      return () => {
        educationItems.forEach((item) => {
          observer.unobserve(item);
        });
      };
    }
  }, [isVisible]);

  return (
    <div className="education-container">
      <h2 className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--primary-color)' }}>Education</h2>
      <p className="page-subtitle">My academic journey and qualifications</p>
      
      <div className="education-cards">
        <div className="education-card">
          <div className="education-card-header" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--secondary-color)', fontWeight: 600 }}>
            <div className="university-logo ut-austin">
              <i className="fas fa-university"></i>
            </div>
            <div className="education-info">
              <h2 className="university-name">The University of Texas at Austin</h2>
              <p className="degree">Master of Science in Computer Science</p>
              <p className="location">Austin, Texas</p>
            </div>
            <div className="education-year">
              <span>Dec 2025</span>
              <div className="gpa">GPA: 3.835/4.000</div>
            </div>
          </div>
          <div className="education-card-content">
            <div className="education-details">
              <div className="detail-item">
                <div className="detail-icon"><i className="fas fa-laptop-code"></i></div>
                <div className="detail-text">
                  <h3>Research Focus</h3>
                  <p>Model Context Protocol (MCP) and Multi-modal Machine Learning</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><i className="fas fa-book"></i></div>
                <div className="detail-text">
                  <h3>Notable Coursework</h3>
                  <p>Spoken Language Processing, Grounded Natural Language Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="education-card">
          <div className="education-card-header" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--secondary-color)', fontWeight: 600 }}>
            <div className="university-logo ut-dallas">
              <i className="fas fa-university"></i>
            </div>
            <div className="education-info">
              <h2 className="university-name">The University of Texas at Dallas</h2>
              <p className="degree">Bachelor of Science in Computer Science</p>
              <p className="location">Dallas, Texas</p>
            </div>
            <div className="education-year">
              <span>May 2024</span>
              <div className="gpa">GPA: 3.936/4.000</div>
            </div>
          </div>
          <div className="education-card-content">
            <div className="education-details">
              <div className="detail-item">
                <div className="detail-icon"><i className="fas fa-medal"></i></div>
                <div className="detail-text">
                  <h3>Achievements</h3>
                  <p>Dean's List (2020-2024), Academic Excellence Scholarship</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><i className="fas fa-book"></i></div>
                <div className="detail-text">
                  <h3>Notable Coursework</h3>
                  <p>Data Structures & Algorithms, Database Systems, Software Engineering, Machine Learning Fundamentals</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><i className="fas fa-users"></i></div>
                <div className="detail-text">
                  <h3>Activities</h3>
                  <p>Korean International Student Association, Undergraduate Research Program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;