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
          <a className="first-list" href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/clients">Clients</a>
          <a href="/contact">Contact</a>
        </div>
      }
    </div>
  )
}

export default Sidebar;