import React from "react";
import "./messagePage.css";
import "./AppResponsive.css";
import { FiEdit2 } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";
import MessageLeftSide from "../../components/messages/leftSide/messageLeftSide";
import RightSideHeader from "../../components/messages/rightSide/header/rightSideHeader";
import { RightSideMain } from "../../components/messages/rightSide/messageRightSide";
import { RightSideFooter } from "../../components/messages/rightSide/rightSideFooter/rightSideFooter";
// import { NavSide } from '../../components/navSide/navSide';

function MessagePage() {
  return (
    <div className="messageContainer">
      <div id="message_navBar">
        <div>
          <span id="span1">
            <FiEdit2 size=".8em" />
          </span>{" "}
          new conversion
        </div>
        <div>
          <span>
            <BiFilterAlt />
          </span>
          sort: <span>a-z</span>
          <HiChevronDown /> <span></span>
        </div>
      </div>
      <div id="message_holderr">
        <div id="message_leftSide">
          <MessageLeftSide />
        </div>
        <div id="message_mainSide">
          <RightSideHeader />
          <RightSideMain />
          <RightSideFooter />
        </div>
      </div>
    </div>
  );
}

export default MessagePage;
