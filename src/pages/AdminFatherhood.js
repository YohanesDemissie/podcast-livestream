import React, { useState } from 'react';
import { db } from '../firebase/config';
import '../styles/episodes.css';

const AdminFatherhood = () => {
  const uploadFathers = (e) => {
    e.preventDefault();

    const fathersArray = [ ...e.target.elements];
    const fathersData = fathersArray.reduce((accumulator, currentValue) => {
      if(currentValue.id) {
        accumulator[currentValue.id] = currentValue.value
      }
      return accumulator;
    }, {});

    db.collection('fathers').add(fathersData);
    e.target.reset();
    alert('Your fatherhood content has been added to your podcast fatherhood page. Thank you!')
  }

  return (
    <div className="admin-form">
      <h1>Upload Fathers</h1>
      <form onSubmit={uploadFathers}>
        <label className="admin-label" htmlFor="fathersName">Fathers Name</label>
        <input className="admin-input" type="text" id="fathersName" name="fathersName" placeholder=" Fathers Name" />
        <label className="admin-label" htmlFor="imgURL">Image URL</label>
        <input className="admin-input" type="text" id="imgURL" name="imageURL" placeholder="image url" />
        <label className="admin-label" htmlFor="familyMembers">Family Members</label>
        <input className="admin-input" type="text" id="familyMembers" name="familyMembers" placeholder="family members" />
        <label className="admin-label" htmlFor="description">Description</label>
        <textarea className="admin-input" type="text" id="description" name="description" placeholder="Description"></textarea>
        <button className="admin-submit" type="submit">Upload</button>
      </form>
    </div>
  )
}

export default AdminFatherhood;