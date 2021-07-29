import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import '../styles/episodes.css';

const Episodes = () => {
  // const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection('episodes')
      .orderBy("episode", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({...doc.data(), key: doc.id,});
      });
      setPosts(getPostsFromFirebase);
    })
    //firebase returns a cleanup function with the line below
    return () => subscriber();

  }, []); //empty array so useEffect is only called once

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) =>

        <div className="episodes-container" key={post.key}>
          <div className="episode-container">
          <h1>{post.title}</h1>
            <p>Starring: {post.guestStar}</p>
            <iframe className="videos" width="200" height="200" src={post.embedVideoURL} allow="fullscreen"></iframe>
            <iframe className="audios" allow="autoplay" src={post.embedAudioURL}></iframe>
          </div>
        </div>
      )) : (<h1>Nothing Yet</h1>)}
    </div>
  )
}

export default Episodes;