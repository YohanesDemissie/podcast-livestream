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
            <p className="episode-description"> 
              Mark Hatcher has been employed by Amazon since July of 2017. He currently serves as a Global Sales Account Manager where he leads a team of three building out the Amazon Turkey Marketplace. Prior to his current position, Mark served as a Sr. Strategic Account Manager on the Strategic Account Services (SAS) Core Team where he managed a portfolio of 3P Sellers totaling $480-MM US TTM GMS. When he is not moderating discussions as member of the Amazon Black Employment Network (BEN), this Detroit native serves as Volunteer Engagement Champion for Connect@Amazon, a Conscious Fathering Instructor for Parent Trust, a Seattle non-profit and an associate professor of Leadership and Management at Central Washington University. Prior to joining Amazon, Mark held leadership roles of progressive responsibility at Coca-Cola, Microsoft, Cintas, Florida Power & Light, Harley-Davidson Motor Company and the Seattle Seahawks. He resides in the Beacon Hill area of Seattle with his wife Nolana and three children: Safiyah (18), Omar (16) and Maris (5).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;