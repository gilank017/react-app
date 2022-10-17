import './App.css';
import NavbarComponent from '../components/header/NavbarComponent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../components/public/Home'
import Blog from '../components/public/Blog'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <div className="main-content">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/blog" component={Blog} />
          </Switch>
          
        </div>
      </div>
    </Router>
    
  );
}

export default App;
