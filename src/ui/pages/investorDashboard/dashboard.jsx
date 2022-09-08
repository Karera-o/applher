import React from 'react'
import './dashboard.css'
import Earnings from '../../components/dashboard/earnings/earnings';
import LineCharts from '../../components/dashboard/lineCharts/lineCharts';
import Projects from '../../components/dashboard/projects/projects';
import ProjectCard from '../../components/dashboard/Rank/projectCard';
import Transaction from '../../components/dashboard/transactions/transaction';

const Dashboard = () => {
  return (
    <div>
        <div className="dash_topcards">
               <Earnings />
                <ProjectCard />
                <div id="projects">
                <h1 className="h1">Your Projects</h1>
                <Projects />
                </div>
                
            </div>
            <div className="dash_bottomcards">
              <div>
                {/* <LineCharts /> */}
              </div>
              <div>
              <h1 className="h1">Recent Transactions</h1>
              <Transaction />
              </div>
            </div>
    </div>
  )
}

export default Dashboard