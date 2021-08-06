import React from 'react';
import Sidebar from './Sidebar';
import Title from './Title';
import '../styles/home.css'
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <Sidebar />
      <div className="other-pages">
        <Title />
        <div className="home-container">
          <div className="header-container">
            <img className="header-image" src="https://lh3.googleusercontent.com/pw/AM-JKLUh7j9dfIsj_ydO2O8m6lmhAnGKOE8uLk7oCd6FHdgvjoBBz0XeuWqnUQOr9mzuFpVOINWIRtYtZAcSLEgjvYPk2U_YchrXTOCrFs-Iyt1Sq3axyJ_xYCqIIM1LI6ht2BaFrKcsHzKq94bsXnnYGzsL=w1030-h1548-no?authuser=0" alt="soul" />
            <div className="header-titles-container">
              <p className="header-episode">Welcome to:</p>
              <p className="header-title">Hatch's Presence Podcast </p>
              <p className="header-subtitle">Food for thought - Knowledge & Empowerment.</p>
            </div>
          </div>

          <div className="episode-description-container">
            <p className="header-subtitle">More About Mark Presence Podcast</p>
            <p className="episode-description"> Here we put in a background story and humble beginnings of your podcast, the purpuse, your vision and what you intend this podcast to bring to the rest of the world.
              asdfadsfadsfad sfadsfa
              dsfadsfasdfa dsfa
              sdfadsfadfa dsfadfadfadsf
              adfasdfasdf adsfadsfadfadsfadsfadfadsf
              adfadsfadf adsfadsfadsfadsfadsfadsf adsfadsfadsfadfadsf
              adsfadsfa dsfasdfasdfads fadsfadsfa dsfasdfadsfadsfadsf
              asdfdasd fadsfasdfadsfad sfadfasdfadsfadsfadsfas dfasdfasdf
              adsfadsfad sfadsfadsfadsfasd fasdfasdfadsfasdf asdfasdfasdf
            </p>

                   <p className="episode-description"> Here we put in a background story and humble beginnings of your podcast, the purpuse, your vision and what you intend this podcast to bring to the rest of the world.
              asdfadsfadsfad sfadsfa
              dsfadsfasdfa dsfa
              sdfadsfadfa dsfadfadfadsf
              adfasdfasdf adsfadsfadfadsfadsfadfadsf
              adfadsfadf adsfadsfadsfadsfadsfadsf adsfadsfadsfadfadsf
              adsfadsfa dsfasdfasdfads fadsfadsfa dsfasdfadsfadsfadsf
              asdfdasd fadsfasdfadsfad sfadfasdfadsfadsfadsfas dfasdfasdf
              adsfadsfad sfadsfadsfadsfasd fasdfasdfadsfasdf asdfasdfasdf
            </p>

                  <p className="episode-description"> Here we put in a background story and humble beginnings of your podcast, the purpuse, your vision and what you intend this podcast to bring to the rest of the world.
              asdfadsfadsfad sfadsfa
              dsfadsfasdfa dsfa
              sdfadsfadfa dsfadfadfadsf
              adfasdfasdf adsfadsfadfadsfadsfadfadsf
              adfadsfadf adsfadsfadsfadsfadsfadsf adsfadsfadsfadfadsf
              adsfadsfa dsfasdfasdfads fadsfadsfa dsfasdfadsfadsfadsf
              asdfdasd fadsfasdfadsfad sfadfasdfadsfadsfadsfas dfasdfasdf
              adsfadsfad sfadsfadsfadsfasd fasdfasdfadsfasdf asdfasdfasdf
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;