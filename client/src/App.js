import React from 'react';
import './App.css';
import NavBar from '../src/components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Forum from './pages/Forum';
import Services from './pages/services';
import User from './pages/User';
import OurStory from './pages/OurStory';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/forum' component={Forum} />
        <Route path='/services' component={Services} />
        <Route path='/user' component={User} />
        <Route path='/our-story' component={OurStory} />
      </Switch>
    </Router>
  );
}

export default App;
