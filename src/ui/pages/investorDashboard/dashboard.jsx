import React from 'react'
import Earnings from '../../components/dashboard/earnings/earnings';
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
              <h1 className="h1">Recent Transactions</h1>
              <Transaction />
            </div>
    </div>
  )
}

export default Dashboard