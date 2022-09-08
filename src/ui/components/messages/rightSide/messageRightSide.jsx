import React from "react";
import "./messageRightSide.css";
// import {AiFillStar} from 'react-icons/ai'
// import {MdLocalPostOffice} from 'react-icons/md'
// import {TbDotsVertical} from 'react-icons/'

export class RightSideMain extends React.Component{
    render(){
        return(
            <div id="rightSideMain">
                <span id="rightText">
                    Hello how are you?
                </span>
                <span id="leftText">
                    I' m good, how are you?
                </span>
            </div>
        );
    }
}