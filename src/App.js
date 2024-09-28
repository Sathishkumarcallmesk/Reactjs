import React from 'react';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import About from './components/About'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
 

 
      <About />
      <Navbar/>
      <Projects />
      <Experience/>
      <Education/>
      <Contact />
    </div>
  );
}

export default App;
