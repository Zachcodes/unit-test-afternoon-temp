import React from 'react';
import PostWidget from '../components/PostWidget';
import Div from '../styled/Div';
import Loading from '../components/Loading';
import useAxios from '../customHooks';

const Post = ({ match }) => {
  const [post = {}] = useAxios(`/api/post/${match.params.postId}`);
  if (!Object.keys(post).length) return <Loading />;
  return (
    <Div flexed justify="center" padding="20px 100px">
      <PostWidget fullWidth expanded={true} {...post} />
    </Div>
  );
};

export default Post;
