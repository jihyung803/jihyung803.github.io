import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
        <h2>Projects</h2>
        <h3>Ready2Interview, University of Texas at Austin November 2024 – November 2024</h3>
        <p>Developed and hosted an AI Interview Assistant web service at a large hackathon with over 900 participants, 
        utilizing OpenAI’s GPT-4o with RAG and Tavily integration to automatically generate queries based on user resumes 
        and target company information.</p>
        <p>Provided tailored interview questions and feedback by aggregating and synthesizing updated information, and
        included voice-based input and output options to enhance accessibility and interaction based on user preference.</p>
        <p>-</p>

        <h3>AI Trip Planner September 2024 – October 2024</h3>
        <p>Developed an agent utilizing Retrieval-Augmented Generation (RAG) and Llama 3.2 3B model to assist users in
        travel planning based on budget, dates, and location-specific preferences.</p>
        <p>Utilized LangChain/Tavily to search for relevant data such as phone numbers, addresses, and prices from online
        sources, enabling accurate inference.</p>
        <p>-</p>

        <h3>Pose Detecting Exercise Assistant, University of Texas at Dallas April 2024 – May 2024</h3>
        <p>Developed a program utilizing MediaPipe for real-time body part position recognition, enabling exercise posture
        correction and assisting users with workout routines through computational analysis.</p>
        <p>Added a game-like exercise assistant feature to enhance user engagement, along with a score competition system
        that connects users via a web service for real-time ranking.</p>
        <p>-</p>

        <h3>Korean International Student Association Website, University of Texas at Dallas July 2022 – August 2022</h3>
        <p>Utilized React and Firestore to develop the organization’s website, including an authorization and post management
        system for over 120 users.</p>
        <p>Conducted code reviews and mentoring 6 team members to improve their technical skills.</p>
    </div>
  );
}

export default Projects;