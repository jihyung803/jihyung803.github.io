import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './pages/Main';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import './App.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <div className="App">
        <div className="header-container">
          <header>
            <button className="nav-toggle" onClick={toggleNav}>
              ☰
            </button>
            <nav className={isNavOpen ? 'open' : ''}>
              <ul>
                <li><Link to="/" onClick={toggleNav}>Home</Link></li>
                <li><Link to="/education" onClick={toggleNav}>Education</Link></li>
                <li><Link to="/skills" onClick={toggleNav}>Skills</Link></li>
                <li><Link to="/projects" onClick={toggleNav}>Projects</Link></li>
                <li><Link to="/experience" onClick={toggleNav}>Experience</Link></li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
