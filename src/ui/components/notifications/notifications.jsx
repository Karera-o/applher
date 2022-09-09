import React from 'react'
import './notifications.css'

import {MdScreenSearchDesktop} from 'react-icons/md'

function Notification() {
  return (
    <div className='notification_card'>
        <span className='span1'><MdScreenSearchDesktop/></span>
        <p>You have received a new bid of <span className='span2'>$500.00</span> for the project <span className='span3'>Ultimate test</span>  from anotherFreelancer.</p>
        <span className='span4'>September 5,2022</span>
    </div>
  )
}

function Notifications (){
    return(
        <div className='notifications_container'>
            <h1>Notifications</h1>
            <div className='notifications_holder'>
            
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
        </div>
        </div>
        
    )
}

export default Notifications