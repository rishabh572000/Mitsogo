import React from 'react';
import './index.scss';
import { RiBarChartHorizontalLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { VscBellDot } from 'react-icons/vsc';
import profile from '../Media/profile-pic-01.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { slider} from '../Action';
import { Popover } from 'antd';
import Popup from './Popup';
import NotificationPopup from './NotificationPopup';

export default function Header() {
  const dispatch = useDispatch();

  const myState = useSelector((state)=>state.changeState);
  var sliderStatus=myState===1 ? 'activeNav':'';

  

return (
  <>
  <div className={`header ${sliderStatus}`}>
    <div className='left'>
        <icon className={`headerlefticon ${sliderStatus}`} onClick={()=>dispatch(slider())}><RiBarChartHorizontalLine /></icon>
        <form>
        <span id='mohan'><AiOutlineSearch /></span>
        <input type='text' name='search' placeholder='Search Transictions, invoices or help'/>
        </form>
    </div>
    <div className='right'>

    <Popover content={NotificationPopup} overlayStyle={{
    width: "300px"
  }}>
        <icon><VscBellDot /></icon>
    </Popover>
    
    <Popover content={Popup}>
      <div className='popupuser'>
        <p>John Doe</p>
        <icon id='arraw'><IoIosArrowDown /></icon>
        <img src={profile} alt='img' />
      </div>
    </Popover>
    </div>
  </div>
  </>
)
}
