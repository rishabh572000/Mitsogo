import React, {useState} from 'react';
import { TbSmartHome } from 'react-icons/tb';
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { MdForwardToInbox } from 'react-icons/md';
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';
import { TbSettings } from 'react-icons/tb';
import './index.scss';

import { useSelector } from 'react-redux';




export default function LeftDrawer() {
  const [active, setActive] = useState(1);

  const myState = useSelector((state)=>state.changeState);



  
return (
  <>
  
  <div className='leftHeader' id={myState===1 ? 'activeNav':''}>
    <div className='title'>
      ACME
    </div>
    <div className='items' id={myState===1 ? 'activeNav':''}>
      <div className='item' onClick={()=>setActive(0)} id={active===0?'active':''}>
        <icon><TbSmartHome /></icon>
        <p>Home</p>
        <span></span>
      </div>
      <div className='item' onClick={()=>setActive(1)} id={active===1?'active':null}>
        <icon><HiOutlineChartSquareBar /></icon><p>Dashbord</p><span></span>
      </div>
      <div className='item' onClick={()=>setActive(2)} id={active===2?'active':null}>
        <icon><MdForwardToInbox /></icon><p>Inbox</p><span></span>
      </div>
      <div className='item' onClick={()=>setActive(3)} id={active===3?'active':null}>
        <icon><BsLayoutTextSidebarReverse /></icon><p>Product</p><span></span>
      </div>
      <div className='item' onClick={()=>setActive(4)} id={active===4?'active':null}>
        <icon><TbSettings /></icon><p>Admin</p><span></span>
      </div>

    </div>
  </div>

  </>

)
}
