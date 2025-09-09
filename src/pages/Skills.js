import React, { useState, useEffect } from 'react';
import './Skills.css';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  // 컴포넌트가 마운트된 후 약간의 지연을 줘서 DOM이 완전히 준비되도록 함
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation for skills on scroll
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

    const skillItems = document.querySelectorAll('.skill-item');
    if (skillItems.length > 0) {
      skillItems.forEach((item) => {
        observer.observe(item);
      });

      return () => {
        skillItems.forEach((item) => {
          observer.unobserve(item);
        });
      };
    }
  }, [isVisible]);

  return (
    <div className="skills-container">
      <h1 className="page-title">My Skills</h1>
      <p className="page-subtitle">Here are the technologies and tools I've worked with</p>
      
      <div className="skills-grid">
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-brain"></i>
            <h2 className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--primary-color)' }}>NLP & AI</h2>
          </div>
          <div className="skill-list">
            <div className="skill-item">
              <div className="skill-name">Large Language Models</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Langchain</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">RAG</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Huggingface Models</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Prompting Engineering</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-code"></i>
            <h2 className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--primary-color)' }}>Programming</h2>
          </div>
          <div className="skill-list">
            <div className="skill-item">
              <div className="skill-name">Python</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Java</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">C</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">C++</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">JavaScript</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">React</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-database"></i>
            <h2 className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--primary-color)' }}>Database</h2>
          </div>
          <div className="skill-list">
            <div className="skill-item">
              <div className="skill-name">SQL (PostgreSQL, Oracle)</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">MongoDB</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Firebase</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">MySQL</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-users"></i>
            <h2 className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--primary-color)' }}>Cooperative</h2>
          </div>
          <div className="skill-list">
            <div className="skill-item">
              <div className="skill-name">Git/GitHub</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">JIRA</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Slack</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Confluence</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skill-category">
          <div className="category-header">
            <i className="fas fa-tools"></i>
            <h2 className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--primary-color)' }}>Other Tools</h2>
          </div>
          <div className="skill-list">
            <div className="skill-item">
              <div className="skill-name">MS Office</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">LaTeX</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">MATLAB</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">R</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Docker</div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;