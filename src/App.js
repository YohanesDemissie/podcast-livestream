import React, { useState, useEffect} from 'react';
import {
  HashRouter as Router,
  Routes,
  // HashRouter,
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
import ThankYou from './pages/ThankYou';
import Blog from './pages/Blog';

function App() {
  return (
    // <Router hashType="hash">
        <Routes>
          <Route exact path="/"  element={<Home/>} />
            {/* <Home />
          </Route> */}
          <Route path="/#/about"  />
            {/* <About />
          </Route> */}
          <Route path="/contact" element={<Contact />} />
            {/* <Contact />
          </Route> */}
          <Route path="/admin-0731" element={<Admin />} />
            {/* <Admin />
          </Route> */}
          <Route path="/guest-stars" element={<GuestStars />} />
            {/* <GuestStars />
          </Route> */}
          <Route path="/features-in-fatherhood" element={<FeaturesInFatherhood /> } />
            {/* <FeaturesInFatherhood />
          </Route> */}
          <Route path="/black-excellence" element={<BlackExcellence />} />
            {/* <BlackExcellence />
          </Route> */}
          <Route path="/events" element={<Events />} />
            {/* <Events />
          </Route> */}
          <Route path="/thankyou" element={<ThankYou />} />
            {/* <ThankYou />
          </Route> */}
          <Route path="/blog" element={<Blog />} />
            {/* <Blog />
          </Route> */}
          </Routes>
      // </Router>
  )
}

export default App;
