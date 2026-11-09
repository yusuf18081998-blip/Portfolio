import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0b0719',
      backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(109, 40, 217, 0.18) 0%, transparent 50%), radial-gradient(circle at 80% 40%, rgba(147, 51, 234, 0.12) 0%, transparent 40%)',
      position: 'relative'
    }}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;