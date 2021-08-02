import React from 'react';
import Title from './Title';
import Episodes from './Episodes';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="other-pages">
      <Sidebar />
      <div >
        <Title />
        <div className="home-container">
          <div className="header-container">
          <img className="header-image" src="https://lh3.googleusercontent.com/pw/AM-JKLUh7j9dfIsj_ydO2O8m6lmhAnGKOE8uLk7oCd6FHdgvjoBBz0XeuWqnUQOr9mzuFpVOINWIRtYtZAcSLEgjvYPk2U_YchrXTOCrFs-Iyt1Sq3axyJ_xYCqIIM1LI6ht2BaFrKcsHzKq94bsXnnYGzsL=w1030-h1548-no?authuser=0" alt="soul" />
            <div className="header-titles-container">
              <p className="header-episode">Welcome to:</p>
              <p className="header-title">Hatcher Presence Podcast </p>
              <p className="header-subtitle">Food for thought - Knowledge & Empowerment.</p>
            </div>
          </div>

          <div className="episode-description-container">
            <p className="header-subtitle">Episode Description</p>
            <p className="episode-description">asdfadsfadsfad sfadsfa
            dsfadsfasdfa dsfa
            sdfadsfadfa dsfadfadfadsf
            adfasdfasdf adsfadsfadfadsfadsfadfadsf
            adfadsfadf adsfadsfadsfadsfadsfadsf adsfadsfadsfadfadsf
            adsfadsfa dsfasdfasdfads fadsfadsfa dsfasdfadsfadsfadsf
            asdfdasd fadsfasdfadsfad sfadfasdfadsfadsfadsfas dfasdfasdf
            adsfadsfad sfadsfadsfadsfasd fasdfasdfadsfasdf asdfasdfasdf</p>
          </div>

        </div>
        <Episodes />
      </div>
    </div>
  )
}

export default Home;