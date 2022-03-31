import { 
  BrowserRouter as Router, 
  Route,
  Switch } from 'react-router-dom'

import './App.scss';
import Skills from './components/Skills';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import HomePage from './components/HomePage';

function App() {
  return (
    <div>

        <Router>
          <Switch>
            
            <Route 
            path='/'
            exact
            component={HomePage}
            />
         
            <Route 
            path='/thank-you' 
            component={ThankYou}
            />

          </Switch>
        </Router>

    </div>
  );
}

export default App;
