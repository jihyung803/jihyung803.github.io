import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-sections">
        <div className="skill-section">
          <h3>NLP</h3>
          <ul>
            <li>Large Language Models</li>
            <li>Langchain</li>
            <li>RAG</li>
            <li>Huggingface Models</li>
            <li>Prompting Engineering</li>
          </ul>
        </div>
        <div className="skill-section">
          <h3>Programming</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-section">
          <h3>Database</h3>
          <ul>
            <li>SQL (PostgreSQL, Oracle)</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="skill-section">
          <h3>Cooperative</h3>
          <ul>
            <li>JIRA</li>
            <li>Git/GitHub</li>
            <li>Slack</li>
            <li>Confluence</li>
          </ul>
        </div>
        <div className="skill-section">
          <h3>Other Tools</h3>
          <ul>
            <li>MS Office</li>
            <li>LaTeX</li>
            <li>MATLAB</li>
            <li>R</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;