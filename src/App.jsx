// import { 
//   BrowserRouter as Router, 
//   Route,
//   Switch } from 'react-router-dom'

import './App.scss';
import Skills from './components/Skills';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
        <Header />
        <Main />
        <Skills />
        <Projects />
        <About />
      
    </div>
  );
}

export default App;
