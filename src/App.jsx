import { 
  BrowserRouter as Router, 
  Route,
  Switch } from 'react-router-dom'

import './App.scss';
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
