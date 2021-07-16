import React from 'react';
import '../styles/episodes.css';

const Episodes = () => {
  return(
    <div>
      <h1>View More Episodes</h1>
      <div className="episodes-container">
        <iframe width="200" height="200" src="https://www.youtube.com/embed/vzx6h2sAGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/fTAPaHcLAhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/G42RJ4mKj1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/C7t_LxpzYTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Episodes;