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

  return (
    <div>
      <Sidebar />
      <section className="other-pages">
        <h1 className="title">Hatch's Blog</h1>
        {posts.length > 0 ? (
          posts.map((post) =>
          <article className="episodes-container" key={post.key}>
            <div className="blog-container">
              <p>CHAPTER: {post.chapter}</p>
              <h1>{post.title}</h1>
              <img className="blog-image"  src={post.image} alt="blog image"/>
              <p>{post.blog}</p>
            </div>
          </article>
        )) : (<h1>Loading...</h1>)}
      </section>
      <Footer />
    </div>
  )
}

export default Blog;