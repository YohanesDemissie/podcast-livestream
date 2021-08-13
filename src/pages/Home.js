import React from 'react';
import Title from './Title';
import Episodes from './Episodes';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import '../styles/home.css';
import Footer from './Footer';
import MarkHatcher from '../assets/mark-hatcher.jpeg';

const Home = () => {
  return (
    <div className="other-pages">
      <Sidebar />
      <div >
        <Title />
        <div className="home-container">
          <div className="header-container">
          <img className="header-image" src={'https://lh3.googleusercontent.com/pw/AM-JKLUh7j9df…BaFrKcsHzKq94bsXnnYGzsL=w1030-h1548-no?authuser=0'} alt="soul" />
            <div className="header-titles-container">
              <p className="header-episode">Welcome to:</p>
              <p className="header-title">Hatch's Presence Podcast </p>
              <p className="header-subtitle">Food for thought - Knowledge & Empowerment.</p>
            </div>
          </div>

          <div className="episode-description-container">
            <p className="header-subtitle">Episode Description</p>
            <p className="episode-description">
              Hatch’s Presence Podcast will highlight the impact of showing up and being present. Each discussion will feature the personal testimony of a battle-tested business leader or change agent poised and ready for new challenges. These conversations and the lessons shared will speak to the importance of choosing Presence over Perfection.
            </p>
          </div>

        </div>
        <Episodes />
      </div>
      <Footer />
    </div>
  )
}

export default Home;