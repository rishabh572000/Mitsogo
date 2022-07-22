import React from 'react';
import profile from '../Media/profile-pic-01.jpg';
import { BsFacebook } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import User from './User';
import userData from './userData';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function Profile() {
return (
  <>
  <div className='profile card'>
    <div className='hearder'>
      <div className='pic'><img src={profile} alt='img' /></div>
      <h3>Nick Herasimenka</h3>
      <p>United State</p>
      <div className='social'>
        <div>
          <GrTwitter  className='social_icon'/>
          <BsFacebook  className='social_icon'/>
          <GrLinkedin  className='social_icon'/>
          <BsWhatsapp  className='social_icon'/>
        </div>
          <div className='listUser'>
          <div className='userHeader'>
            <h3>Our Users</h3>
            <icon><BsThreeDotsVertical /></icon>
          </div>
          {userData.map((val, ind)=>{
            return <User key={ind} val={val}/>
          })}
          </div>
      </div>
    </div>
  </div>
  </>
)
}
