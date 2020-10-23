import React, { useState } from 'react';
import './assets/main.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
// import ThemeContext from './context/ThemeContext';
// import Reducer from './context/Reducer';


function App() {
  const themes = {
    orange: {
      primaryColor: 'teal',
      secondaryColor: 'purple'
    },
    purple: {
      primaryColor: 'purple',
      secondaryColor: 'teal',
    },
    dark: {
      primaryColor: 'gray',
      secondaryColor: 'blue'
    }
  }
  const [theme, setTheme] = useState(themes.orange)
  // const ThemeProvider = useContext(ThemeContext);
  // 
  // const [state,dispatch] = useReducer(Reducer,initialTheme)
  return (
    // <ThemeProvider value={{state, dispatch}}>
    <Router>
      <div>

        <Header theme={theme} themes={themes} setTheme={setTheme} />
        <Banner theme={theme} />
        <Projects />
        <About />
        <Contact />
        <Footer />


      </div>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
