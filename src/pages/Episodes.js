import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import '../styles/episodes.css';

const Episodes = () => {
  // const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const getChaptersFromFirebase = [];
    const subscriber = db.collection('episodes')
      .orderBy("episode", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getChaptersFromFirebase.push({...doc.data(), key: doc.id});
      });
      setChapters(getChaptersFromFirebase);
    })
    //firebase returns a cleanup function with the line below
    return () => subscriber();

  }, []); //empty array so useEffect is only called once

  return (
    <div>
      {chapters.length > 0 ? (
        chapters.map((chapter) =>
      <div className="episodes-container" key={chapter.key}>
            <div className="episode-container">
              <p>EPISODE: {chapter.episode}</p>
              <h1>{chapter.title}</h1>
              <p>Starring: {chapter.guestStar}</p>
              <iframe className="videos" width="200" height="200" src={chapter.embedVideoURL} allow="fullscreen"></iframe>
              <iframe className="audios" allow="autoplay" src={chapter.embedAudioURL}></iframe>
            </div>
          </div>
              )) : (<h1>Loading...</h1>)}
    </div>
  )
}

export default Episodes;