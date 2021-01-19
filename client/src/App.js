import React from 'react';
import './App.css';
import NavBar from '../src/components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import User from './pages/User';
import OurStory from './pages/OurStory';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/User' component={User} />
        <Route path='/Our-Story' component={OurStory} />
      </Switch>
    </Router>
  );
}

export default App;
