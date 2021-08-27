import React, { useState } from 'react';
import { db } from '../firebase/config';
import '../styles/episodes.css';

const AdminBlackExcellence = () => {
  const uploadBlackExcellence = (e) => {
    e.preventDefault();

    const blackExcellenceArray = [ ...e.target.elements];
    const blackExcellenceData = blackExcellenceArray.reduce((accumulator, currentValue) => {
      if(currentValue.id) {
        accumulator[currentValue.id] = currentValue.value
      }
      return accumulator;
    }, {});

    db.collection('blackExcellence').add(blackExcellenceData);
    e.target.reset();
    alert('Your "black excellence" content has been added to your podcast Black Excellence page. Thank you!')
  }

  return (
    <div className="admin-form">
      <h1>Black Excellence</h1>
      <form onSubmit={uploadBlackExcellence}>
        <label className="admin-label" htmlFor="name">Name</label>
        <input className="admin-input" type="text" id="name" name="name" placeholder="Name" />
        <label className="admin-label" htmlFor="imgURL">Image URL</label>
        <input className="admin-input" type="text" id="imgURL" name="imageURL" placeholder="image url" />
        <label className="admin-label" htmlFor="occupation">Occupation/Event</label>
        <input className="admin-input" type="text" id="occupation" name="occupation" placeholder="occupation/event" />
        <label className="admin-label" htmlFor="description">Description</label>
        <textarea className="admin-input" type="text" id="description" name="description" placeholder="Description"></textarea>
        <label className="admin-label" htmlFor="contact">Website/Social Media URL</label>
        <input className="admin-input" type="text" id="contact" name="contact" placeholder="social media or business website" />
        <button className="admin-submit" type="submit">Upload</button>
      </form>
    </div>
  )
}

export default AdminBlackExcellence;