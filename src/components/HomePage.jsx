import Skills from './Skills';
import Header from './Header';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Footer from './Footer'
  
  const HomePage = () => {
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
  
  export default HomePage
  