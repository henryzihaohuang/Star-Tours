import React from 'react';
import Spinner from 'react-spinkit';

const LoadingSpinner = () => {
  return (
    <div
      className="spinner-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '44px',
        height: '200px',
        margin: '0 auto',
        color: 'grey',
      }}
    >
      <Spinner name="line-scale" />
    </div>
  );
};

export default LoadingSpinner;
