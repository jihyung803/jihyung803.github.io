import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  // 컴포넌트가 마운트된 후 약간의 지연을 줘서 DOM이 완전히 준비되도록 함
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation for projects on scroll
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

    const projectItems = document.querySelectorAll('.project-card');
    if (projectItems.length > 0) {
      projectItems.forEach((item) => {
        observer.observe(item);
      });

      return () => {
        projectItems.forEach((item) => {
          observer.unobserve(item);
        });
      };
    }
  }, [isVisible]);

  return (
    <div className="projects-container">
      <h1 className="page-title">My Projects</h1>
      <p className="page-subtitle">A collection of my recent work and achievements</p>
      
      <div className="projects-grid">

      <div className="project-card">
          <div className="project-header">
            <div className="project-icon">
              <i className="fas fa-plane"></i>
            </div>
            <h2>Emergency Assistant Agent</h2>
          </div>
          <div className="project-content">
            <div className="project-metadata">
              <span><i className="fas fa-calendar-alt"></i> March 2025 – April 2025</span>
            </div>
            <p>Developed and deployed a full-stack chatbot system using React and Node.js, designed to assist users with emergency preparedness and response. </p>
            <p>Utilized LangGraph and MCP to integrate various tools to return multiple modal output such as interactive map, youtube video, and weather info.</p>
            <div className="project-tags">
              <span>MCP</span>
              <span>LangGraph</span>
              <span>React</span>
              <span>Python</span>
            </div>
            <div className="project-links">
              <a href="https://uil-agents.web.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i> View Project
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <div className="project-icon">
              <i className="fas fa-plane"></i>
            </div>
            <h2>Cryptocurrency Auto-trader</h2>
          </div>
          <div className="project-content">
            <div className="project-metadata">
              <span><i className="fas fa-calendar-alt"></i> March 2025 – April 2025</span>
            </div>
            <p>Developed an automated cryptocurrency trading system leveraging a reasoning LLM. </p>
            <p>The system autonomously retrieves and processes the latest news, analyzes the most recent OHLC and real-time market data, and predicts price movements.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>DeepSeek</span>
              <span>LangChain</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <div className="project-icon">
              <i className="fas fa-plane"></i>
            </div>
            <h2>OpenCityAI</h2>
          </div>
          <div className="project-content">
            <div className="project-metadata">
              <span><i className="fas fa-calendar-alt"></i> March 2025 – April 2025</span>
            </div>
            <p>Developed a chatbot-based web service using a RAG system enhanced with techniques like RAPTOR. </p>
            <p>AI agent assists with complex housing-related issues and decision-making in the Austin area.</p>
            <div className="project-tags">
              <span>LangChain</span>
              <span>React</span>
              <span>Node.js</span>
            </div>
            <div className="project-links">
              <a href="https://uil-agents.web.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i> View Project
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <div className="project-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h2>Ready2Interview</h2>
          </div>
          <div className="project-content">
            <div className="project-metadata">
              <span><i className="fas fa-building"></i> University of Texas at Austin</span>
              <span><i className="fas fa-calendar-alt"></i> November 2024</span>
            </div>
            <p>Developed and hosted an AI Interview Assistant web service at a large hackathon with over 900 participants, utilizing OpenAI's GPT-4o with RAG and Tavily integration to automatically generate queries based on user resumes and target company information.</p>
            <p>Provided tailored interview questions and feedback by aggregating and synthesizing updated information, and included voice-based input and output options to enhance accessibility and interaction based on user preference.</p>
            <div className="project-tags">
              <span>OpenAI</span>
              <span>RAG</span>
              <span>LangChain</span>
              <span>Python</span>
              <span>Streamlit</span>
            </div>
            <div className="project-links">
              <a href="https://devpost.com/software/ready2interview" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i> View Project
              </a>
            </div>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-header">
            <div className="project-icon">
              <i className="fas fa-plane"></i>
            </div>
            <h2>AI Trip Planner</h2>
          </div>
          <div className="project-content">
            <div className="project-metadata">
              <span><i className="fas fa-calendar-alt"></i> September 2024 – October 2024</span>
            </div>
            <p>Developed an agent utilizing Retrieval-Augmented Generation (RAG) and Llama 3.2 3B model to assist users in travel planning based on budget, dates, and location-specific preferences.</p>
            <p>Utilized LangChain/Tavily to search for relevant data such as phone numbers, addresses, and prices from online sources, enabling accurate inference.</p>
            <div className="project-tags">
              <span>RAG</span>
              <span>Llama 3.2</span>
              <span>LangChain</span>
              <span>Python</span>
            </div>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-header">
            <div className="project-icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h2>Pose Detecting Exercise Assistant</h2>
          </div>
          <div className="project-content">
            <div className="project-metadata">
              <span><i className="fas fa-building"></i> University of Texas at Dallas</span>
              <span><i className="fas fa-calendar-alt"></i> April 2024 – May 2024</span>
            </div>
            <p>Developed a program utilizing MediaPipe for real-time body part position recognition, enabling exercise posture correction and assisting users with workout routines through computational analysis.</p>
            <p>Added a game-like exercise assistant feature to enhance user engagement, along with a score competition system that connects users via a web service for real-time ranking.</p>
            <div className="project-tags">
              <span>MediaPipe</span>
              <span>Computer Vision</span>
              <span>Python</span>
              <span>Web Service</span>
            </div>
          </div>
        </div>
        
        <div className="project-card">
          <div className="project-header">
            <div className="project-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h2>Korean International Student Association Website</h2>
          </div>
          <div className="project-content">
            <div className="project-metadata">
              <span><i className="fas fa-building"></i> University of Texas at Dallas</span>
              <span><i className="fas fa-calendar-alt"></i> July 2022 – August 2022</span>
            </div>
            <p>Utilized React and Firestore to develop the organization's website, including an authorization and post management system for over 120 users.</p>
            <p>Conducted code reviews and mentoring 6 team members to improve their technical skills.</p>
            <div className="project-tags">
              <span>React</span>
              <span>Firestore</span>
              <span>Team Leadership</span>
            </div>
            <div className="project-links">
              <a href="https://utdkisa.org/" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i> View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;