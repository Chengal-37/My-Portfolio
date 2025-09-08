import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skillset from './components/Skillset';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // This file will contain styling specific to the App component

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* Each component below represents a section of the portfolio */}
        <Hero />
        <About />
        <Skillset />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;