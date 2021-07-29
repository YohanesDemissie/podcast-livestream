import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import '../styles/guestStars.css'


const GuestStars = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const getGuestsFromFirebase = [];
    const subscriber = db.collection('honorableMentions')
.orderBy("name", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getGuestsFromFirebase.push({...doc.data(), key: doc.id,});
      });
      setGuests(getGuestsFromFirebase);
    })
    //firebase returns a cleanup function with the line below
    return () => subscriber();

  }, []); //empty array so useEffect is only called once
  return (
    <div>
      {guests.length > 0 ? (
        guests.map((guest) =>

        <div className="episodes-container" key={guest.key}>
          <div className="episode-container">
          <h1>{guest.name}</h1>
          <img src={guest.img} alt="guest-portrait"/>
            <p>{guest.occupation}</p>
            <p>{guest.bio}</p>
            <p>Contact {guest.name} here at {guest.social}</p>
          </div>
        </div>
      )) : (<h1>Nothing Yet</h1>)}
    </div>
  )
}

export default GuestStars;