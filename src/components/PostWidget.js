import React from 'react';
import { withRouter } from 'react-router-dom';

const PostWidget = ({
  title,
  text,
  userId,
  displayName,
  id,
  showLink = true,
  history,
}) => {
  return (
    <div onClick={() => history.push(`/post/${id}`)}>
      <div>
        <div>
          {showLink ? (
            <button
              onClick={e => {
                e.stopPropagation();
                history.push(`/user/${userId}`);
              }}
            >
              {displayName}
            </button>
          ) : null}
          <h3>{title}</h3>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default withRouter(PostWidget);
