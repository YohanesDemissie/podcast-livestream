import React from 'react';
import FacebookIcon from '../assets/facebook-icon.png';
import TwitterIcon from '../assets/twitter-icon.png';
import InstagramIcon from '../assets/instagram-icon.png'
import '../styles/footer.css';

// Linked In
//facebook
//twitter
// instagram
//youtube
//soundcloud
// email => go to contacts page

const Footer = () => {
  return (
    <footer className="footer-container">
      <a href="https://www.linkedin.com/in/hatch1/"><img className="footer-icon" src="https://www.pinclipart.com/picdir/big/119-1198440_linkedin-logo-and-link-to-tpd-page-linked.png" /></a>
      <a href="https://www.facebook.com/hatch1"><img className="footer-icon" src={FacebookIcon} /></a>
      <a href="https://twitter.com/hatch1?lang=en"><img className="footer-icon" src={TwitterIcon} /></a>
      <a href="https://www.instagram.com/1hatch1/"><img className="footer-icon" src={InstagramIcon} /></a>
      {/* <a href=""><img className="footer-icon" src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/youtube-2-icon-18-256.png" /></a> */}
      <a href=""><img className="footer-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTI3A8ViRDZkKWwcdEk5_UHiOX3EZYYoGFmRj8oJwrNSBR_KaUuj9wJUGlxAIhbH3E7w&usqp=CAU" /></a> 
    </footer>
  )
}

export default Footer;