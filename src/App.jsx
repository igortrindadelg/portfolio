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
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Header />
        <Main />
        <Skills />
        <Projects />
        <About />
        <Footer />
    </div>
  );
}

export default App;
