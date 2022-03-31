// import { 
//   BrowserRouter as Router, 
//   Route,
//   Switch } from 'react-router-dom'

import './App.scss';
import Services from './components/Services';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
        <Header />
        <Main />
        <Services />
        <Projects />
        <About />
      
    </div>
  );
}

export default App;
