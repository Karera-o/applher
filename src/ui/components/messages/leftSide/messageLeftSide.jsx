import React from 'react'
import "./messageLeftSide.css"
import man from "./man.jpeg"

function Contact(){
    return(
        <div id='contactContent'>
            <span id='image'><img src={man} alt="" /></span>
            <div>
                <h3>Jackson nshuti</h3>
                <p>Good Morning</p>
            </div>
            <span id='messageNumber'>4:55pm</span>
        </div>
    );
}
function  MessageLeftSide() {
  return (
    <div className='messageleftsideContent'>
        
        <div id='messageleftsideContent'>
            <Contact /> 
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </div>
        
    </div>
  )
}

export default MessageLeftSide