import React from 'react';
import { db } from '../firebase/config';
import '../styles/admin.css';

const AdminBlog = () => {

  const uploadContent = (e) => {
    e.preventDefault();

    const elementsArray = [...e.target.elements];

    const formData = elementsArray.reduce((accumulator, currentValue) => {
     if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {});
    console.log({formData});
    db.collection("blog").add(formData);
    console.log(formData, 'TESTING FORM DATA');
    e.target.reset();
    alert('Your new Episode has been added to your podcast. Thank you!')
  }
  return(
    <div className="admin-form">
      <h1>Upload Blog</h1>
      <form onSubmit={uploadContent}>
        <label className="admin-label" htmlFor="title">Title</label>
        <input className="admin-input" type="text" id="title" name="title" placeholder="title" />
        <label className="admin-label" htmlFor="chapter">Chapter</label>
        <input className="admin-input" type="number" id="chapter" name="chapter" placeholder="chapter number" />
        <label className="admin-label" htmlFor="blog">Blog</label>
        <textarea className="admin-input" type="text" id="blog" name="blog" placeholder="type blog here"></textarea>
        <label className="admin-label" htmlFor="image">Image</label>
        <textarea className="admin-input" type="text" id="image" name="image" placeholder="place single space after each image URL: www.image1.com www.image2.com www.image3.com"></textarea>
        <button className="admin-submit" type="submit">Upload</button>
      </form>
    </div>
  );
}

export default AdminBlog;