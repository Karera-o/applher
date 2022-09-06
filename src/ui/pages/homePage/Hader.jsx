import React from 'react'
import Navabr from './Navbar'
import feat2 from './Ellipse1.png';
// import FeatureBox from './FeatureBox';
import {Link} from 'react-router-dom';
function Hader() {
  return (
    <div id="main"> 
    <Navabr/>
    <div className='name'>
        <h1><span>Apploud Her</span>
        Pitch Your Project today and be Sponsored Accordingly
        </h1>
        <p className='details'
        >
           Promoting Economic Empowerment of Women At work . Through Responsible Bussiness
        </p>
        <Link  to ='/Create' className='cv-btn'>Join Us</Link>
    </div>
    <div className='left'>
    <div className='ab-img'>
      <img src={feat2} alt=''/>
    </div>
    <div className='sb-text'>
        <h2>Apploud Her</h2>
      
       </div>
    </div>
    </div>
  )
}

export default Hader