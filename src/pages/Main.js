import React from 'react';
import './Main.css';
import profileImage from '../assets/profilePic.jpeg'; // 이미지 경로를 맞게 설정하세요


function Main() {
  return (
    <div className="mains">
        <h2>Jihyung Park</h2>
        <img src={profileImage} alt="Jihyung Park" className="profile-image" />

        <p>I'm Jihyung Park, pursuing a Master's in Computer Science at UT Austin.</p>

        <p>I have multiple experiences in multi-modal ML research and am focused on developing AI capable of handling diverse inputs.</p>

        <p>I'm interested in various software engineering roles, including MLOps and data engineer.</p>
    </div>
  );
}

export default Main;