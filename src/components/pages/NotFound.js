import React from 'react';
import loading from '../layout/not-found.jpg';

const NotFound = () => {
  return (
    <div className='loading not-found'>
      <img
        src={loading}
        alt='Loading...'
        className='loading-img'
        style={{
          margin: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
};

export default NotFound;
