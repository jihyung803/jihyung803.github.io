import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-details">
        <h3>Urban Information Lab, University of Texas at Austin</h3>
        <p>December 2023 – June 2024</p>
        <p>Advisor: Dr. Junfeng Jiao</p>
        <div className="experience-details">
        <p>Designed and developed OpenCityAI, an advanced AI agent leveraging data-driven analysis to tackle complex challenges such as urban planning, construction, and real estate forecasting.</p>
        <p>Utilized the Mixture of Agents (MOA) technique, integrating DeepSeek R1 alongside multiple models to enable advanced capabilities such as real-time analysis, strategic design support, and multidisciplinary decision-making.</p>
        </div>
      </div>
      <div className="experience-details">
        <h3>Human Language Technology Research Institute, University of Texas at Dallas</h3>
        <p>December 2023 – June 2024</p>
        <p>Advisor: Dr. Vincent Ng</p>
        <div className="experience-details">
          <p>Submitted a research paper to an NLP conference on designing experiments to identify hidden meanings and detect hate speech in memes that combine text and images, including the creation of a new comprehensive dataset corpus.</p>
          <p>Developed and reviewed guidelines for annotating memes for creating corpus, focusing on uncovering hidden meanings and determining hateful content through the combination of text and images.</p>
          <p>Conducted LLM fine-tuning to generate reasoning for hidden meanings in each meme and detect the hateful intent associated with those meanings.</p>
          <p>Collaborated with a team to construct a Multi-modal pipeline using a vision model that performs behavior analysis with objects in each image.</p>
        </div>
      </div>
      <div className="experience-details">
        <h3>Undergraduate Computer Science Research Lab, University of Texas at Dallas</h3>
        <p>August 2023 – December 2023</p>
        <p>Advisor: Dr. Ovidiu Daescu</p>
        <div className="experience-details">
          <p>Developed a prediction model by TensorFlow for videos becoming “Trending” based on processed YouTube metadata with an over 95% accuracy.</p>
          <p>Generated and preprocessed secondary data to enhance viewership metrics including view velocity, title and description length/complexity, saturation, luminosity, and complexity of thumbnail images, derived from existing datasets.</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;