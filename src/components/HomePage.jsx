import Skills from './Skills';
import Header from './Header';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Footer from './Footer'
import Contact from './Contact';
  
  const HomePage = () => {
    return (
      <div>
          <Header />
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
      </div>
    );
  }
  
  export default HomePage
  