import React,{useState} from 'react';
import './assets/main.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ThemeContext from './context/ThemeContext';
// import Reducer from './context/Reducer';


function App() {
  const themes = [
    {
      name:'orange',
      primaryColor:'text-orange-500',
      secondaryColor:'text-purple-400',
      bgColor: 'bg-orange-100'
    },
    {
      name:'purple',
      primaryColor:'text-purple-500',
      secondaryColor:'text-orange-400',
      bgColor: 'bg-purple-100'
    },
    {
      name:'dark',
      primaryColor:'text-gray-100',
      secondaryColor:'text-orange-400',
      bgColor: 'bg-black'
    }
  ]
  const [theme,setTheme] = useState(themes[0])
  // const ThemeProvider = useContext(ThemeContext);
  // 
  // const [state,dispatch] = useReducer(Reducer,initialTheme)
  return (
    // <ThemeProvider value={{state, dispatch}}>
        <div className="bg-repeat container">

          <Header themes={themes} setTheme={setTheme}/>
          <Banner theme={theme}/>
          <Projects />
          <About />
          <Contact />
          <Footer />


        </div>
    // </ThemeProvider>
  );
}

export default App;
