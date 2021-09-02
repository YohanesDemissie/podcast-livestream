import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config.js';
import '../styles/episodes.css';
import Sidebar from './Sidebar';
import Footer from './Footer.js';

const Blog = () => {
  // const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection('blog')
      .orderBy("chapter", "desc").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({...doc.data(), key: doc.id});
      });
      setPosts(getPostsFromFirebase);
    })
    //firebase returns a cleanup function with the line below
    return () => subscriber();

  }, []); //empty array so useEffect is only called once

  let photos = [];
  posts.map((post) => { //MAP THROUGH DATA AND FORMAT FOR ARRAY
      photos.push(post.image.toString().split(" ")); //brings us perfect nested array format
      return photos;
    }
  )

  return (
    <div>
      <Sidebar />
      <section className="other-pages">
        <h1 className="title">Hatch's Blog</h1>

        {posts.length > 0 ? (
              posts.map((post) =>
                <article className="episodes-container" key={post.key}>
                  <div className="blog-container" id="photos">
                    <p>CHAPTER: {post.chapter}</p>
                    <h1>{post.title}</h1>
                    <p>{post.blog}</p>
                     {/* {photos.map((i) => (
                       i.map((j) => (
                        <div key={i} style={{border: 'solid 1px white', padding: '10px', display: 'inline'}}>
                        <img className="blog-image" style={{width: "100px"}} src={j} />
                     </div>
                      ))
                     ))} */}
                  </div>
                </article>
              )
          ) : (<h1>Loading...</h1>)
        }
          {photos.map((i) => (
            <div key={i} style={{border: 'solid 1px white', padding: '10px', display: 'inline'}}>
            {i.map((j) => (
                <img style={{width: "100px"}} src={j} />
              ))}
            </div>
          ))}
      </section>
      <Footer />
    </div>
  )
}

export default Blog;