import React from 'react';
import './index.scss';

export default function Loading() {
return (
    <>
      <div className='loading'>
          <div className='container'>
            <div className='ring'></div>
            <div className='ring'></div>
            <div className='ring'></div>
            <h1>MITSOGO</h1>
            <p>Loading...</p>
          </div>
      </div>
    </>
)
}
