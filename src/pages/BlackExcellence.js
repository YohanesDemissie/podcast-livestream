import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import '../styles/episodes.css';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';

const BlackExcellence = () => {
  // const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotosFromFirebase = [];
    const subscriber = db.collection('blackExcellence')
      .orderBy("name", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPhotosFromFirebase.push({...doc.data(), key: doc.id});
      });
      setPhotos(getPhotosFromFirebase);
    })
    //firebase returns a cleanup function with the line below
    return () => subscriber();

  }, []); //empty array so useEffect is only called once

  return (
    <section className="other-pages">
      <Sidebar />
      <h1 className="title">Black Excellence</h1>
      {photos.length > 0 ? (
        photos.map((photo) =>
          <article className="episodes-container" key={photo.key}>
            <div className="episode-container">
              <h1>{photo.name}</h1>
              <img src={photo.imgURL} alt="black excellence" style={{width: '200px', borderRadius: '10px'}}/>
              <p>{photo.occupation}</p>
              <p>{photo.description}</p>
              <p>Contact {photo.name} by <a href={photo.contact} className="guest-link">CLICKING HERE </a></p>
            </div>
          </article>
      )) : (<h1>Loading...</h1>)}
      <Footer />
    </section>
  )
}

export default BlackExcellence;