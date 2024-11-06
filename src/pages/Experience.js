import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experiences">
      <h2>Experience</h2>
      <h3>Human Language Technology Research Institute, University of Texas at Dallas </h3>
      <p>December 2023 – June 2024</p>
      <p>Advisor: Dr. Vincent Ng</p>
      <div className="experience-details">
        <p>Submitted a research paper to an NLP conference on designing experiments to identify hidden meanings and detect hate speech in memes that combine text and images, including the creation of a new comprehensive dataset corpus.</p>
        <p>Developed and reviewed guidelines for annotating memes for creating corpus, focusing on uncovering hidden meanings and determining hateful content through the combination of text and images.</p>
        <p>Conducted LLM fine-tuning to generate reasoning for hidden meanings in each meme and detect the hateful intent associated with those meanings.</p>
        <p>Collaborated with a team to construct a Multi-modal pipeline using a vision model that performs behavior analysis with objects in each image.</p>
      </div>
      <p>-</p>
      <h3>Undergraduate Computer Science Research Lab, University of Texas at Dallas </h3>
      <p>August 2023 – December 2023</p>
      <p>Advisor: Dr. Ovidiu Daescu</p>
      <div className="experience-details">
        <p>Developed a prediction model by TensorFlow for videos becoming “Trending” based on processed YouTube metadata with an over 95% accuracy.</p>
        <p>Generated and preprocessed secondary data to enhance viewership metrics including view velocity, title and description length/complexity, saturation, luminosity, and complexity of thumbnail images, derived from existing datasets.</p>
      </div>
    </div>
  );
}

export default Experience;