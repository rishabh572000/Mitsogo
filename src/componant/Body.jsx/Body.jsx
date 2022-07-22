import React, { useState } from 'react';
import FirstSection from './FirstSection';
import GraphOne from './GraphOne';
import Profile from './Profile';
import './index.scss';
import TableView from './TableView';
import Video from './Video';
import { useSelector } from 'react-redux';

export default function Body() {
  
  const myState = useSelector((state)=>state.changeState);
  var sliderStatus=myState===1 ? 'activeNav':'';
  
  return (
    <>
    <div className={`body ${sliderStatus}`} >
    <FirstSection />
    <div className='upperbody'>
    <GraphOne />
    <Profile />
    </div>
    <div className='lowerbody'>
    <TableView />
    <Video />
    </div>
    </div>
    </>
  )
}
