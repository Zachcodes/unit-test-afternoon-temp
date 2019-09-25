import React from 'react';

const ProfileWidget = ({ first, last }) => {
  return (
    <div>
      <p>{`${first} ${last}`}</p>
    </div>
  );
};

export default ProfileWidget;
