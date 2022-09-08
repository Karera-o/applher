import React from "react";
import "./rightSideHeader.css";
// import profile from "./profile.jpg"; 

import {AiFillStar} from 'react-icons/ai'
import {MdClose, MdLocalPostOffice} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'
// import {BsCameraVideo,BsTelephone} from "react-icons/bs";
// import {MdChatBubbleOutline} from 'react-icons/md'
class RightSideHeader extends React.Component{

    render(){
        return(
            <div id="rightSideHeader">
                
                <div>
                    <p>Discussion <MdClose/></p>
                    
                    
                </div>
                
                <ul>
                    <li><AiFillStar size="1.5em"/></li>
                    <li><MdLocalPostOffice size="1.5em"/></li>
                    <li><BsThreeDotsVertical size="1.5em"/></li>
                </ul>
            </div>
        );
    }
}
export default RightSideHeader