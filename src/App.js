import React from 'react';
import './assets/main.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="bg-repeat container">

      <Header />
      <Banner />
      <Projects />
      <About />
      <Contact />
      

    </div>
  );
}

export default App;
