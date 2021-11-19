import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import '../styles/episodes.css';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';

function FeaturesInFatherhood () {
  const [fathers, setFathers] = useState([]);

  useEffect(() => {
    const getFathersFromFirebase = [];
    const subscriber = db.collection('fathers')
    .orderBy("fathersName", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getFathersFromFirebase.push({...doc.data(), key: doc.id});
      });
      setFathers(getFathersFromFirebase);
    })
    return () => subscriber();
  }, []);
  console.log(fathers.length, 'fathers length')
  return (
    <div className="sidemenu-margin">
      <Sidebar />
      <h1 className="title">Features in Fatherhood</h1>
      {fathers.length > 0 ? (
        fathers.map((father) =>
          <div className="episodes-container" key={father.key}>
            <div className="episode-container">
              <h1>{father.fathersName}</h1>
              <img src={father.imgURL}  className="guest-image" alt="father image" />
              <p>{father.familyMembers}</p>
              <p>{father.description}</p>
            </div>
          </div>
        )) : (<h1>Loading...</h1>)}
        <Footer />
    </div>
  )
}

export default FeaturesInFatherhood;