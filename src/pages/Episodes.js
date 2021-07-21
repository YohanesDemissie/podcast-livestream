import React from 'react';
import '../styles/episodes.css';

//make an array of object
//iterate through array to render items dynamically
//make function that allows user to add to list

const data = [
  {
    title: 'First Video',
    videoElement: 'https://www.youtube.com/embed/ZUi90ndkwt4',
    audioElement: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1023058027',
  }
]

//in the array, make the element 0, or element of array.length - 1 to be the one to render title, video, subtitle, and description in big picture
// this way the newest video post will be the one taking up majority of the screen

const Episodes = () => {
  return (
    <div>
      <h1 className="episodes-title">View More Episodes</h1>
      <div className="episodes-container">
        <iframe width="200" height="200" src="https://www.youtube.com/embed/vzx6h2sAGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/fTAPaHcLAhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/G42RJ4mKj1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/C7t_LxpzYTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen"></iframe>
        {data.map((stuff) =>
            <div>
              <h1 className="episodes-title">{stuff.title}</h1>
              <iframe width="200" height="200" src={stuff.videoElement} allow="fullscreen"></iframe>
              <iframe width="500" height="130" scrolling="no" frameborder="no" allow="autoplay" src={stuff.audioElement}></iframe>
            </div>
        )}
      </div>
    </div>
  )
}

export default Episodes;