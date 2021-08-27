import React, { useState } from 'react';
import { db } from '../firebase/config';
import '../styles/episodes.css';
import '../styles/admin.css'

const AdminEvents = () => {
  const uploadEvents = (e) => {
    e.preventDefault();

    const eventsArray = [ ...e.target.elements];
    const eventsData = eventsArray.reduce((accumulator, currentValue) => {
      if(currentValue.id) {
        accumulator[currentValue.id] = currentValue.value
      }
      return accumulator;
    }, {});

    db.collection('events').add(eventsData);
    e.target.reset();
    alert('Your Event has been added to your podcast Events page. Thank you!')
  }

  return (
    <div className="admin-form">
      <h1>Events</h1>
      <form onSubmit={uploadEvents}>
        <label className="admin-label" htmlFor="title">Title</label>
        <input className="admin-input" type="text" id="title" name="title" placeholder="Title" />
        <label className="admin-label" htmlFor="imgURL">Image URL</label>
        <input className="admin-input" type="text" id="imgURL" name="imageURL" placeholder="image url" />
        <label className="admin-label" htmlFor="date">Date</label>
        <input className="admin-input" type="text" id="date" name="date" placeholder="date" />
        <label className="admin-label" htmlFor="time">Time</label>
        <input className="admin-input" type="text" id="time" name="time" placeholder="time (ex: 4:30 PM - 9:30 PM PT/ET)" />
        <label className="admin-label" htmlFor="location">Location</label>
        <input className="admin-input" type="text" id="location" name="location" placeholder="address or location" />
        <label className="admin-label" htmlFor="description">Description</label>
        <textarea className="admin-input" type="text" id="description" name="description" placeholder="Description"></textarea>
        <button className="admin-submit" type="submit">Upload</button>
      </form>
    </div>
  )
}

export default AdminEvents;