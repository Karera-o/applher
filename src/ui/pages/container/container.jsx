// import Earnings from "../../components/dashboard/earnings/earnings";
import {Header} from "../../components/dashboard/header/header";
import LeftSide from "../../components/dashboard/leftSide/leftSide";
// import ProjectCard from "../../components/dashboard/Rank/projectCard";
import "./container.css"

import { useState } from "react";
// import Transaction from "../../components/dashboard/transactions/transaction";
// import Projects from "../../components/dashboard/projects/projects";
import Dashboard from "../investorDashboard/dashboard";
// import Project from "../../components/overview/project/project";
import OverviewPage from "../overviewPage/overviewPage";
import MessagePage from '../messagePage/messagePage'
import Notifications from "../../components/notifications/notifications";


function Container(props) {

  // const  [title, setTitle] = useState("Dashboard")
  const [index, setIndex] =useState(1)
  const [value,setValue]= useState(0)
  const [visiblee,setVisible] = useState("leftSide")

  const getIndex = (data)=>{
    setIndex(data)
  }

  let component= <OverviewPage />
  let titlee = ""
  if(index===1){
    component = <Dashboard />
    // setTitle("Dashboard")
    titlee = "Dashboard"
  }
  else if(index===2){
    component = <Notifications/>
    // setTitle("Notifications")
    titlee = "Notifications"
  }
  else if(index===3){
    component = <MessagePage/>
    // setTitle("Calendar")
    titlee = "Messages"
  }
  else if(index===4){
    component = <OverviewPage />
    // setTitle("Overview")
    titlee = "Overview"
  }
  else if(index===5){
    component = <Dashboard/>
    // setTitle("Settings")
    titlee = "Settings"
  }
  else{
    component = <Dashboard/>
    // setTitle("Dashboard")
    titlee = "Dashboard"
  }
  return (
    <div id="dashContainer">

        <div className={visiblee}>
            <LeftSide getIndex={getIndex}/>
        </div>
        <div id="dashMain">
          {/* {index} */}
            <Header title={titlee} clickHandler={()=>{
              setValue(()=>{

                if (value ===1){
                  setVisible("leftSideDiv")
                  return 0
                }else{
                  setVisible("hide")
                  return 1
                } 
              } ) 
            }}/>
            
          <div>

          {component}
          </div>
          
                   
        </div>

    </div>
  )
}

export default Container