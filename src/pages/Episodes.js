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
    const subscriber = db.collection('episodes').onSnapshot((querySnapshot) => {
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

        <div key={post.key}>
          <h1 className="episodes-title">{post.title}</h1>
          <div className="episodes-container">
            <p>{post.description}</p>
            <iframe className="videos" width="200" height="200" src={post.embedVideoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
            <iframe className="audios" width="500" height="130" scrolling="no" frameBorder="no" allow="autoplay" src={post.embedAudioURL}></iframe>
          </div>
        </div>
      )) : (<h1>Nothing Yet</h1>)}
    </div>
  )
}

export default Episodes;

{/* <h1 className="episodes-title">View More Episodes</h1>
<div className="episodes-container">
  
  <iframe width="200" height="200" src="https://www.youtube.com/embed/fTAPaHcLAhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
  <iframe width="200" height="200" src="https://www.youtube.com/embed/G42RJ4mKj1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
  <iframe width="200" height="200" src="https://www.youtube.com/embed/C7t_LxpzYTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
  {data.map((stuff) =>
      <div>
        <h1 className="episodes-title">{stuff.title}</h1>
        <iframe width="200" height="200" src={stuff.videoElement} allow="fullscreen"></iframe>
      </div>
  )}
</div> */}