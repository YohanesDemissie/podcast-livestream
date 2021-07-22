import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import '../styles/episodes.css';

//make an array of object
//iterate through array to render items dynamically
//make function that allows user to add to list

// const data = [
//   {
//     title: 'First Video',
//     videoElement: 'https://www.youtube.com/embed/ZUi90ndkwt4',
//     audioElement: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1023058027',
//   }
// ]

//in the array, make the element 0, or element of array.length - 1 to be the one to render title, video, subtitle, and description in big picture
// this way the newest video post will be the one taking up majority of the screen

const Episodes = () => {
  const [loading, setLoading] = useState(true);
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
            <p>{post.description}</p>
            <iframe className="videos" width="200" height="200" src={post.embedVideoURL} allow="fullscreen"></iframe>
            <iframe className="audios" allow="autoplay" src={post.embedAudioURL}></iframe>
          </div>
        </div>
      )) : (<h1>Nothing Yet</h1>)}
    </div>
  )
}

export default Episodes;