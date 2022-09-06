import "./leftSide.css"
// import Logo from "../../logo/logo"
import woman from "../../../resources/woman.jpg"
import { MdDashboard } from "react-icons/md"
// import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { FcCalendar,FcViewDetails } from "react-icons/fc"
import { IoMdSettings,IoMdNotifications } from "react-icons/io"
import { BiLogOut } from 'react-icons/bi'
import { useState } from "react";
import {Link} from 'react-router-dom';
function LeftSide(props) {

  const [index, setIndex]= useState(1);
  // const [bgColor, setbgColor] = useState() 

  return (

    <div className="leftSide" >
      <div id="leftHeader">
        <span id="img"><img src={woman} alt="" /></span>
        <h1>Zainab Suleiman</h1>
        <h2>Sponsor</h2>
      </div>
      <div id="leftMain">
        <ul>
          {props.getIndex(index)}
          <li onClick={()=>setIndex(1)}><MdDashboard/> Dashboard</li>
          <li onClick={()=>setIndex(2)}><IoMdNotifications/>Notifications</li>
          <li onClick={()=>setIndex(3)}><FcCalendar/>Messages</li>
          <li onClick={()=>setIndex(4)}><FcViewDetails/>Overview</li>
          <li onClick={()=>setIndex(5)}><IoMdSettings/>Settings</li>
        </ul>
        <div id="logout">
          <BiLogOut/>
        < Link  to="/"  className="span1">Logout</Link>
      </div>
      </div>
      
    </div>
  )
}

export default LeftSide