import React from 'react';
import userData from '../Body.jsx/userData';
import User from '../Body.jsx/User';

export default function NotificationPopup() {
  return (
      <>
        {userData.map((val, ind)=>{
            return <User key={ind} val={val} time='notification'/>
          })}
      </>
  )
}
