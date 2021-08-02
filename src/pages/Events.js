import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import '../styles/episodes.css';
import Sidebar from './Sidebar.js';

const Events = () => {
  //ADDING GUST INFO INTO FARM THROUGH STATE
  const [events, setEvents] = useState([]);

  //RECEIVING DATA FROM FIRSTONE DATABASE
  useEffect(() => {
    const getEventsFromFirebase = [];
    const eventsDataBase = db.collection('events')
      .orderBy("date", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getEventsFromFirebase.push({...doc.data(), key: doc.id,});
      });
      setEvents(getEventsFromFirebase);
    })
    //firebase returns a cleanup function with the line below
    return () => eventsDataBase();

  }, []); //empty array so useEffect is only called once

  return (
    <div>
      <Sidebar />
      <div className="other-pages">
        <h1 className="title">Events</h1>
        {events.length > 0 ? (
          events.map((event) =>
          <div className="episodes-container" key={event.key}>
            <div className="episode-container">
            <h1>{event.title}</h1>
            <img src={event.imgURL} alt="event-image" className="videos"/>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>{event.location}</p>
              <p>{event.description}</p>
            </div>
          </div>
        )) : (<h1>Nothing Yet</h1>)}
      </div>
    </div>
  )
}

export default Events;