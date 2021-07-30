import React, { useState } from 'react';
import { db } from '../firebase/config';

const AdminEpisodes = () => {
    const uploadContent = (e) => {
    e.preventDefault();

    const elementsArray = [...e.target.elements];
    console.log(elementsArray);

    const formData = elementsArray.reduce((accumulator, currentValue) => {
     if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {});
    console.log({formData})
    db.collection("episodes").add(formData);
    e.target.reset();
    alert('Your new Episode has been added to your podcast. Thank you!')
  }
  return(
    <div className="admin-form">
      <h1>Upload Episodes</h1>
      <form onSubmit={uploadContent}>
        <label className="admin-label" htmlFor="title">Title</label>
        <input className="admin-input" type="text" id="title" name="title" placeholder="title" />
        <label className="admin-label" htmlFor="embedVideoURL">Video URL</label>
        <input className="admin-input" type="text" id="embedVideoURL" name="embedVideoURL" placeholder="copy video url here"/>
        <label className="admin-label" htmlFor="embedAudioURL">Audio URL</label>
        <input className="admin-input" type="text" id="embedAudioURL" name="embedAudioURL" placeholder="copy audio url here"/>
        <label className="admin-label" htmlFor="guestStar">Guest Star</label>
        <input className="admin-input" type="text" id="guestStar" name="guestStar" placeholder="guest star"/>
        <label className="admin-label" htmlFor="episode">Episode</label>
        <input className="admin-input" type="number" id="episode" name="episode" placeholder="episode number"/>
        <button className="admin-submit" type="submit">Upload</button>
      </form>
    </div>
  )
}
export default AdminEpisodes;