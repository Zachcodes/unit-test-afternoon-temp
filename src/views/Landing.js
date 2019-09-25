import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostWidget from '../components/PostWidget';

const Landing = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const { data } = await axios.get('/api/posts');
      setPosts(data);
    }
    getPosts();
  }, []);
  return (
    <div>
      {posts.map(p => {
        return <PostWidget key={p.id} {...p} />;
      })}
    </div>
  );
};

export default Landing;
