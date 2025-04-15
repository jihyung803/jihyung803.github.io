import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Main from './pages/Main';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import './App.css';

// ScrollToTop component to scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && !event.target.closest('nav') && !event.target.closest('.nav-toggle')) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isNavOpen]);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="header-container">
          <header className={scrolled ? 'scrolled' : ''}>
            <Link to="/" className="logo">JH</Link>
            <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
              <span>☰</span>
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
        <footer>
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Jihyung Park</p>
            <div className="social-links">
              <a href="https://github.com/jihyung803" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/jihyung-park" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;