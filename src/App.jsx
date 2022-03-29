import './App.scss';
import Services from './components/Services';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
