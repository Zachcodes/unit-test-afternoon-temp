import React from 'react';

const StatsWidget = ({ totalPostCount, totalWordCount }) => {
  return (
    <div>
      <p>Post count: {totalPostCount}</p>
      <p>Total word count: {totalWordCount}</p>
    </div>
  );
};

export default StatsWidget;
