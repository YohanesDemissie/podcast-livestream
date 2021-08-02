import React from 'react';
import '../styles/othermenu.css';

const MobileMenu = () => {
  return(
      <div className="other-nav">
        <a href="/">Home</a>
        <a href="/guest-stars">Guest Stars</a>
        <a href="/features-in-fatherhood">Features In Fatherhood</a>
        <a href="/black-excellence">Black Excellence</a>
        <a href="/events">Events</a>
        <a className="first-list" href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
  )
}

export default MobileMenu;