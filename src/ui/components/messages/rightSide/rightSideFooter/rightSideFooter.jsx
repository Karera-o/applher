import React, { Component } from "react";
import "./rightSideFooter.css";
import {IoIosSend} from 'react-icons/io'
import {GiMonkey} from 'react-icons/gi'
import {GrAttachment} from 'react-icons/gr'
import {ImAttachment} from 'react-icons/im'
import { MdAddPhotoAlternate,MdSend } from "react-icons/md"
// import { BiMicrophone } from 'react-icons/bi'


export class RightSideFooter extends Component{

    render(){
        return(
            <div id="rightSideFooter">
                <div>
                <ul id="rightSideFooter_ul">
                    
                    <li id="rightSideFooter_ulInput">
                        <input type="text" placeholder="Add your message . . . . . . . ."/>
                    </li>
                    <li><GiMonkey size="1.4em"/></li>
                    <li><ImAttachment size="1.2em" /></li>
                    <li><span id="icon">sent <IoIosSend size="1.2em" color="white"/></span></li>
                </ul>
                </div>
            </div>
        );
    }
}