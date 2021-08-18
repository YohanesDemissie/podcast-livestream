import React from 'react';
import Title from './Title';
import Episodes from './Episodes';
import Sidebar from './Sidebar';
import '../styles/home.css';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="other-pages">
      <Sidebar />
      <div >
        <Title />
        <div className="home-container">
          <div className="header-container">
          <img className="header-image" src={'https://lh3.googleusercontent.com/pw/AM-JKLUh7j9dfIsj_ydO2O8m6lmhAnGKOE8uLk7oCd6FHdgvjoBBz0XeuWqnUQOr9mzuFpVOINWIRtYtZAcSLEgjvYPk2U_YchrXTOCrFs-Iyt1Sq3axyJ_xYCqIIM1LI6ht2BaFrKcsHzKq94bsXnnYGzsL=w1030-h1548-no?authuser=0'} alt="soul" />
            <div className="header-titles-container">
              <p className="header-episode">Welcome to:</p>
              <p className="header-title">Presence OVER Perfection</p>
              <p className="header-subtitle">You Don't Have to be Perfect but You Have to be present...</p>
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