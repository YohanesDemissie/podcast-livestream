import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [view, setView] = useState(false);
  // let element;
  const handleClick = () => {
    if(view == false) {
      setView(true)
    }
    if(view == true) {
      setView(false);
    }
  }

  return (
    <div>
      <button className="mobile-menu" onClick={handleClick}>
        Menu
      </button>
      {view == true ? <MobileMenu /> :
        <div className="sidenav">
          <a href="/">Home</a>
          <a className="first-list" href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/guest-stars">Guest Stars</a>
          <a href="/contact">Contact</a>
          <a href="/features-in-fatherhood">Features In Fatherhood</a>
          <a href="/black-excellence">Black Excellence</a>
          <a href="/events">Events</a>
        </div>
      }
    </div>
  )
}

export default Sidebar;