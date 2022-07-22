import React from 'react'
import { IoIosLogOut } from 'react-icons/io';
import { RiBillLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';

export default function Popup() {
  return (
    <>
      <div className='popup'>
         <div className='item'>
             <span><CgProfile /></span>
             <p>My Profile</p>
         </div>
         <div className='item'>
             <span><RiBillLine /></span>
             <p>Billing</p>
         </div>
         <div className='item'>
             <span><IoIosLogOut /></span>
             <p>Logout</p>
         </div>
      </div>
    </>
  )
}
