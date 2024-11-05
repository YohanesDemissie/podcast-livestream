import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [view, setView] = useState(false);
  const handleClick = () => {
    if(view == false) {
      setView(true)
    }
    if(view == true) {
      setView(false);
    }
  }

  return (
    <header className="side-bar-container">
      <title>Hatchers Podcast</title>
      <button className="mobile-menu-button" onClick={handleClick}>
        Menu
      </button>
      {view == true ? <MobileMenu /> :
        <nav className="main-menu">
          <ul>
            <li><a href="/podcast-livestream/#/">Home</a></li>
            <li><a href="/podcast-livestream/#/guest-stars">Featured Guests</a></li>
            <li><a href="/podcast-livestream/#/features-in-fatherhood">Features In Fatherhood</a></li>
            <li><a href="/podcast-livestream/#/black-excellence">Black Excellence</a></li>
            <li><a href="/podcast-livestream/#/events">Events</a></li>
            <li><a className="first-list" href="/podcast-livestream/#/about">About</a></li>
            <li><a href="/podcast-livestream/#/blog">Blog</a></li>
            <li><a href="/podcast-livestream/#/contact">Contact</a></li>
          </ul>
        </nav>
      }
    </header>
  )
}

export default Sidebar;