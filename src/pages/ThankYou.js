import React from 'react';
import Sidebar from './Sidebar';
import '../styles/episodes.css'

const ThankYou = () => {
  return(
    <div className="other-pages">
      <Sidebar />
      Thank you for your inquiry! I will be sure to get back to you as soon as possible!
      <a href="/">Click Here</a> to return back to the main home page and browse my content.
    </div>
  )
}

export default ThankYou;