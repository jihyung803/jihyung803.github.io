import React, { useState, useEffect } from 'react';
import './Experience.css';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  // 컴포넌트가 마운트된 후 약간의 지연을 줘서 DOM이 완전히 준비되도록 함
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation for timeline items on scroll
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

    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
      timelineItems.forEach((item) => {
        observer.observe(item);
      });

      return () => {
        timelineItems.forEach((item) => {
          observer.unobserve(item);
        });
      };
    }
  }, [isVisible]);

  return (
    <div className="experience-container">
      <h1 className="page-title">Professional Experience</h1>
      <p className="page-subtitle">My academic and research journey</p>
      
      <div className="timeline-container">
        <div className="timeline-track"></div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">
            <span>January 2025 – Present</span>
          </div>
          <div className="timeline-content">
            <div className="experience-card">
              <h2 className="experience-title">Urban Information Lab</h2>
              <h3 className="experience-subtitle">University of Texas at Austin</h3>
              <p className="experience-advisor">Advisor: Dr. Junfeng Jiao</p>
              <div className="experience-description">
                <p>Designed and developed advanced AI agents leveraging data-driven analysis to tackle complex challenges such as urban planning, construction, emergency preparedness, and real estate forecasting.</p>
                <p>Utilized the Mixture of Agents (MOA) technique, integrating DeepSeek R1 alongside multiple models to enable advanced capabilities such as real-time analysis, strategic design support, and multidisciplinary decision-making.</p>
              </div>
              <div className="experience-tags">
                <span>AI Agent</span>
                <span>Urban Planning</span>
                <span>MCP</span>
                <span>MOA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">
            <span>December 2023 – June 2024</span>
          </div>
          <div className="timeline-content">
            <div className="experience-card">
              <h2 className="experience-title">Human Language Technology Research Institute</h2>
              <h3 className="experience-subtitle">University of Texas at Dallas</h3>
              <p className="experience-advisor">Advisor: Dr. Vincent Ng</p>
              <div className="experience-description">
                <p>Submitted a research paper to an NLP conference on designing experiments to identify hidden meanings and detect hate speech in memes that combine text and images, including the creation of a new comprehensive dataset corpus.</p>
                <p>Developed and reviewed guidelines for annotating memes for creating corpus, focusing on uncovering hidden meanings and determining hateful content through the combination of text and images.</p>
                <p>Conducted LLM fine-tuning to generate reasoning for hidden meanings in each meme and detect the hateful intent associated with those meanings.</p>
                <p>Collaborated with a team to construct a Multi-modal pipeline using a vision model that performs behavior analysis with objects in each image.</p>
              </div>
              <div className="experience-tags">
                <span>NLP</span>
                <span>Multi-modal</span>
                <span>LLM Fine-tuning</span>
                <span>Research</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">
            <span>August 2023 – December 2023</span>
          </div>
          <div className="timeline-content">
            <div className="experience-card">
              <h2 className="experience-title">Undergraduate Computer Science Research Lab</h2>
              <h3 className="experience-subtitle">University of Texas at Dallas</h3>
              <p className="experience-advisor">Advisor: Dr. Ovidiu Daescu</p>
              <div className="experience-description">
                <p>Developed a prediction model by TensorFlow for videos becoming "Trending" based on processed YouTube metadata with an over 95% accuracy.</p>
                <p>Generated and preprocessed secondary data to enhance viewership metrics including view velocity, title and description length/complexity, saturation, luminosity, and complexity of thumbnail images, derived from existing datasets.</p>
              </div>
              <div className="experience-tags">
                <span>TensorFlow</span>
                <span>Data Processing</span>
                <span>Machine Learning</span>
                <span>Prediction Model</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;