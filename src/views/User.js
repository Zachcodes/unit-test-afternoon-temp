import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatsWidget from '../components/StatsWidget';
import ProfileWidget from '../components/ProfileWidget';
import PostWidget from '../components/PostWidget';

const User = ({ match }) => {
  const [user, setUser] = useState({});
  const [postObj, setPosts] = useState({});
  useEffect(() => {
    async function getUser() {
      const { data } = await axios.get(`/api/user/${match.params.userId}`);
      setUser(data);
    }
    getUser();
    async function getUserPosts() {
      const { data } = await axios.get(
        `/api/user/posts/${match.params.userId}`,
      );
      setPosts(data);
    }
    getUserPosts();
  }, [match.params.userId]);

  if (!Object.keys(postObj).length) return <div>Loading...</div>;

  return (
    <div>
      <ProfileWidget {...user} />
      <StatsWidget {...postObj.stats} />
      {postObj.posts.map(p => (
        <PostWidget showLink={false} key={p.id} {...p} />
      ))}
    </div>
  );
};

export default User;
