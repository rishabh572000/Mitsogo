import React from 'react';
import { MdAdd } from 'react-icons/md';

export default function FirstSection() {
  return (
    <>
    <div className='firstsection'>
    <h1>Overview</h1>
    <div className='button'>
      Add Fund
      <icon><MdAdd /></icon>
    </div>
    </div>
    </>
  )
}
