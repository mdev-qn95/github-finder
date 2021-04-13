import React, { Fragment } from 'react';
import loading from './loading.jpg';

const Loading = () => (
  <Fragment>
    <div className='loading'>
      <img
        src={loading}
        alt='Loading...'
        style={{ width: 'auto', height: '100%', margin: 'auto', display: 'block' }}
      />
    </div>
  </Fragment>
);

export default Loading;
