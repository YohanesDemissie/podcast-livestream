import React, { useState } from 'react';
import { db } from '../firebase/config'

const AdminGuestStars = () => {
  const uploadGuest = (e) => {
    e.preventDefault();

    const guestsArray = [ ...e.target.elements];
    const guestData = guestsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {});
    console.log(guestData, 'GUEST DATA');
    db.collection("guests").add(guestData);
    e.target.reset();
    alert('Your new Guest has been added to your podcast guest page. Thank you!');
  }
  return(
    <div className="admin-form">
      <h1>Upload Guests</h1>
      <form onSubmit={uploadGuest}>
        <label className="admin-label" for="name">Name</label>
        <input className="admin-input" type="text" id="name" name="name" placeholder="name" />
        <label className="admin-label" for="occupation">Occupation</label>
        <input className="admin-input" type="text" id="occupation" name="occupation" placeholder="occupation"/>
        <label className="admin-label" for="imgURL">Image URL</label>
        <input className="admin-input" type="text" id="imgURL" name="imgURL" placeholder="copy image URL here"/>
        <label className="admin-label" for="bio">Bio</label>
        <input className="admin-input" type="text" id="bio" name="bio" placeholder="Create Bio"/>
        <label className="admin-label" for="social">Social</label>
        <input className="admin-input" type="text" id="social" name="social" placeholder="enter social media URL"/>
        <button className="admin-submit" type="submit">Upload</button>
      </form>
    </div>
  )
}
export default AdminGuestStars;