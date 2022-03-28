import './App.scss';
import Services from './components/Services';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
