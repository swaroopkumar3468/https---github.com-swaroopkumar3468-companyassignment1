// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
        <a href="#" id="linkedin-button">LinkedIn</a>
      </nav>
    </header>
  );
}

export default Header;
