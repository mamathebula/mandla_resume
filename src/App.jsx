import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIBring from './components/WhatIBring';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  const [activeSection, setActiveSection] = useState('all');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} setActiveSection={setActiveSection} />
      {(activeSection === 'all') && <Hero />}
      {(activeSection === 'all' || activeSection === 'what-i-bring') && <WhatIBring />}
      {(activeSection === 'all' || activeSection === 'about') && <About />}
      {(activeSection === 'all' || activeSection === 'experience') && <Experience />}
      {(activeSection === 'all' || activeSection === 'skills') && <Skills />}
      {(activeSection === 'all' || activeSection === 'projects') && <Projects />}
      {(activeSection === 'all' || activeSection === 'contact') && <Contact />}
    </div>
  );
}

export default App;
