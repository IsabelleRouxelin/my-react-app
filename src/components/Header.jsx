import React from 'react';
import '../styles/main.css';

const Header = ({ selectedPage, onSetPage }) => {
  const pages = [
    { name: 'Home', key: 'home' },
    { name: 'Projects', key: 'projects' },
    { name: 'About', key: 'about' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo-icon">
            {/* could consider switching below for img logo */}
            &lt;/&gt;
          </div>
          <span className="logo-text">Isabelle Rouxelin - Portfolio</span>
        </div>
        <nav className="desktop-nav">
          {pages.map(page => (
            <button
              key={page.key}
              onClick={() => onSetPage(page.key)}
              className={`nav-button ${selectedPage === page.key ? 'active' : ''}`}
            >
              {page.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;