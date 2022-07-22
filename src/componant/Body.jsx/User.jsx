import React from 'react';

export default function User(props) {
  const mobile = props.val.mobile;
  return (
    <>
     <div className='user' key={props.id}>
         <div className='left'>
            <img src={props.val.img} alt='img' />
            <div className='text'>
                <h4>{props.val.name}</h4>
                <p>{props.val.country}</p>
            </div>
         </div>
        <p id='mobile'>{props.time=='notification'?props.val.time: `Mobile: ${mobile}`}</p>
     </div>
    </>
  )
}
