import React, { useState } from 'react';

function Navbar({ theme, toggleTheme, activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'All', id: 'all' },
    { label: 'What I Bring', id: 'what-i-bring' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => handleClick('all')}>MM</div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {links.map((link, i) => (
          <li key={i}>
            <button
              className={activeSection === link.id ? 'nav-active' : ''}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
