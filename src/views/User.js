import React from 'react';
import StatsWidget from '../components/StatsWidget';
import ProfileWidget from '../components/ProfileWidget';
import PostWidget from '../components/PostWidget';
import Div from '../styled/Div';
import Loading from '../components/Loading';
import useAxios from '../customHooks';

const User = ({ match }) => {
  const user = useAxios(`/api/user/${match.params.userId}`);
  const postObj = useAxios(`/api/user/posts/${match.params.userId}`);

  if (!Object.keys(postObj).length) return <Loading />;

  return (
    <div>
      <Div flexed justify="center" align="center">
        <ProfileWidget {...user} />
      </Div>
      <Div flexed align="center" direction="column" position="relative">
        {postObj.posts.map(p => (
          <PostWidget showLink={false} key={p.id} {...p} />
        ))}
        <StatsWidget {...postObj.stats} />
      </Div>
    </div>
  );
};

export default User;
