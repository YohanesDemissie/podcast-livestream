import React, { useState } from 'react';
import { db } from '../firebase/config';
import '../styles/episodes.css';
import '../styles/admin.css'

const AdminBlogGallery = () => {
  const uploadEvents = (e) => {
    e.preventDefault();

    const eventsArray = [ ...e.target.elements];
    const eventsData = eventsArray.reduce((accumulator, currentValue) => {
      if(currentValue.id) {
        accumulator[currentValue.id] = currentValue.value
      }
      return accumulator;
    }, {});

    db.collection('blogImages').add(eventsData);
    e.target.reset();
    alert('Your Photos has been added to your podcast Blog page. Thank you!')
  }

  return (
    <div className="admin-form">
      <h1>Blog Photos</h1>
      <form onSubmit={uploadEvents}>
        <label className="admin-label" htmlFor="imgURL">Image URL</label>
        <input className="admin-input" type="text" id="imgURL" name="imageURL" placeholder="image url" />
        <button className="admin-submit" type="submit">Upload</button>
      </form>
    </div>
  )
}

export default AdminBlogGallery;