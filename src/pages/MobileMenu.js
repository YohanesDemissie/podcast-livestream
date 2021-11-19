import React from 'react';
import '../styles/mobileMenu.css';

const MobileMenu = () => {
  return(
      <nav className="mobile-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/guest-stars">Guest Stars</a></li>
          <li><a href="/features-in-fatherhood">Features In Fatherhood</a></li>
          <li><a href="/black-excellence">Black Excellence</a></li>
          <li><a href="/events">Events</a></li>
          <li><a className="first-list" href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          <li></li>
        </ul>
      </nav>
  )
}

export default MobileMenu;