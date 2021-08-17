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
    <div className="side-bar-container">
      <button className="mobile-menu-button" onClick={handleClick}>
        Menu
      </button>
      {view == true ? <MobileMenu /> :
        <div className="sidenav">
          <a href="/">Home</a>
          {/* <a href="/bio">Bio</a> */}
          <a href="/guest-stars">Featured Guests</a>
          <a href="/features-in-fatherhood">Features In Fatherhood</a>
          <a href="/black-excellence">Black Excellence</a>
          <a href="/events">Events</a>
          <a className="first-list" href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      }
    </div>
  )
}

export default Sidebar;