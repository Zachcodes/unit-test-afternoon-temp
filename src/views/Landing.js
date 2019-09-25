import React from 'react';
import PostWidget from '../components/PostWidget';
import Div from '../styled/Div';
import Loading from '../components/Loading';
import useAxios from '../customHooks';

const Landing = () => {
  const posts = useAxios('/api/posts');
  if (!posts.length) return <Loading />;
  return (
    <Div flexed direction="column" align="center">
      {posts.map(p => {
        return <PostWidget key={p.id} {...p} />;
      })}
    </Div>
  );
};

export default Landing;
