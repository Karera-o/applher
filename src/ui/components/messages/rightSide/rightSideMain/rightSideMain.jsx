import React from "react";
import "./rightSideMain.css";
import whatsupBg from "./whatsupBg.jpg";


export class RightSideMain extends React.Component{
    render(){
        return(
            <div id="rightSideMain">
                <p id="rightText">
                    Hello how are you?
                </p>
                <p id="leftText">
                    I' m good, how are you?
                </p>
            </div>
        );
    }
}