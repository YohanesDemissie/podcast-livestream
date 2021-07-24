import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

import OtherMenu from './OtherMenu';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [view, setView] = useState(false);
  // let element;
  const handleClick = () => {
    if(view == false) {
      setView(true)
      // element = <OtherMenu />;

    }
    if(view == true) {
      setView(false);
      // element = <MobileMenu />
    }
    // return element;
  }

  // if(view == true) {
    // const mobileMenu = () => {
    //   return(

    //   <div>
    //     mobile menu
    //   </div>
    //   )
    // }
  // }

  // if(view == false) {
  //   const
  // }

  return (
    <div>
      <button className="mobile-menu" onClick={handleClick}>
        MENU
      </button>
       {view == true ? <OtherMenu /> :
      <MobileMenu />
      /* // <div class="sidenav">
      //   <a href="/about">About</a>
      //   <a href="/services">Services</a>
      //   <a href="/clients">Clients</a>
      //   <a href="/contact">Contact</a>
      // </div> */
      }
    </div>
  )
}

export default Sidebar;