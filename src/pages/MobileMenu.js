import React from 'react';
import '../styles/othermenu.css';

const MobileMenu = () => {
  return(
      <div className="other-nav">
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/clients">Clients</a>
        <a href="/contact">Contact</a>
      </div>
  )
}

export default MobileMenu;