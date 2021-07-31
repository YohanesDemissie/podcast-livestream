import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Episodes from './pages/Episodes';
import Title from './pages/Title';
import Sidebar from './pages/Sidebar';
import Admin from './pages/Admin';
import fire from './firebase/config';
// import './styles/home.css';

import './App.css';
import GuestStars from './pages/GuestStars';
import FeaturesInFatherhood from './pages/FeaturesInFatherhood';
import BlackExcellence from './pages/BlackExcellence';
import Events from './pages/Events';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/admin-0731">
            <Admin />
          </Route>
          <Route path="/guest-stars">
            <GuestStars />
          </Route>
          <Route path="/features-in-fatherhood">
            <FeaturesInFatherhood />
          </Route>
          <Route path="/black-excellence">
            <BlackExcellence />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          </Switch>
      </Router>
  )
}

export default App;
