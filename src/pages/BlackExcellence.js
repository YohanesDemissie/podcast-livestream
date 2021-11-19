import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import '../styles/episodes.css';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';

// CHANGING NAMING CONVENTION TO BLACK EXCELLENCE

const BlackExcellence = () => {
  // const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeopleFromFirebase = [];
    const subscriber = db.collection('blackExcellence')
      .orderBy("name", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPeopleFromFirebase.push({...doc.data(), key: doc.id});
      });
      setPeople(getPeopleFromFirebase);
    })
    //firebase returns a cleanup function with the line below
    return () => subscriber();

  }, []); //empty array so useEffect is only called once

  return (
    <div className="sidemenu-margin">
      <Sidebar />
      <h1 className="title">Black Excellence</h1>
      {people.length > 0 ? (
        people.map((person) =>
          <div className="episodes-container" key={person.key}>
            <div className="episode-container">
              <h1>{person.name}</h1>
              <img src={person.imgURL} alt="black excellence" style={{width: '200px', borderRadius: '10px'}}/>
              <p>{person.occupation}</p>
              <p>{person.description}</p>
              <p>Contact {person.name} by <a href={person.contact} className="guest-link">CLICKING HERE </a></p>
            </div>
          </div>
      )) : (<h1>Loading...</h1>)}
      <Footer />
    </div>
  )
}

export default BlackExcellence;