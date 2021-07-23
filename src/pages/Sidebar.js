import React from 'react';
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <div class="sidenav">
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/clients">Clients</a>
      <a href="/contact">Contact</a>
    </div>
  )
}

export default Sidebar;