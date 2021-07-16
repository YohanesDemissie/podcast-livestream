import React from 'react';
import Sidebar from './Sidebar';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="header-container">
        <img className="header-image" src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Asier%20Romero,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1469550122/zxrk1ld7jme7td4ziwqg.jpg" alt="soul" />
          <div className="header-titles-container">
            <p className="header-episode">Podcast Episode</p>
            <p className="header-title">This is The Podcast Title/Name</p>
            <p className="header-subtitle">This is the subtitle</p>
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
    </div>
  )
}

export default Home;