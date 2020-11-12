import React, { useReducer } from 'react';
import './assets/main.css';
import Header from './components/Header';
// import Banner from './components/Banner';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import StateContext from './context/StateContext';
import DispatchContext from './context/DispatchContext';
import Reducer from './context/Reducer';


function App() {
  const initialTheme = {
    textColor: 'text-teal-500',
    backgroundColor: 'bg-purple-300',
    borderColor: 'border-teal-700',
    hoverColor: 'border-teal-800'
  }



  const [state, dispatch] = useReducer(Reducer, initialTheme)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router>
          <div>

            <Header />
            {/* <Banner /> */}
            <Projects />
            <About />
            <Contact />
            <Footer />


          </div>
        </Router>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
