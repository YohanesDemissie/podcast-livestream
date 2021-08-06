import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
// import '../styles/guestStars.css'
import '../styles/episodes.css';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';



const GuestStars = () => {
  //ADDING GUST INFO INTO FARM THROUGH STATE
  const [guests, setGuests] = useState([]);

  //RECEIVING DATA FROM FIRSTONE DATABASE
  useEffect(() => {
    const getGuestsFromFirebase = [];
    const guestDatabase = db.collection('guests')
      .orderBy("name", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getGuestsFromFirebase.push({...doc.data(), key: doc.id,});
      });
      setGuests(getGuestsFromFirebase);
    })
    //firebase returns a cleanup function with the line below
    return () => guestDatabase();

  }, []); //empty array so useEffect is only called once

  return (
    <div>
      <div className="other-pages">
        <Sidebar />
        <h1 className="title">Honorary Guests</h1>
        {guests.length > 0 ? (
          guests.map((guest) =>
          <div className="episodes-container" key={guest.key}>
            <div className="episode-container">
            <h1>{guest.name}</h1>
            <img src={guest.imgURL} alt="guest-portrait" className="guest-image"/>
              <h3>{guest.occupation}</h3>
              <p>{guest.bio}</p>
              { guest.social !== '' ? <p>Contact {guest.name} by <a href={guest.social} className="guest-link">CLICKING HERE </a></p> : null}
            </div>
          </div>
        )) : (<h1>Loading...</h1>)}
      </div>
      <Footer />
    </div>
  )
}

export default GuestStars;