
import React from 'react';
import './App.css';
import Create from '../src/ui/pages/signinPage/Create';
// import Reset from './ui/pages/signinPage/Reset';
import Signinl from '../src/ui/pages/signinPage/Signinl';
import HomePage from '../src/ui/pages/homePage/homePage';
// import SigninPage from './ui/pages/signinPage/signinPage';
import {HashRouter as Router  , Routes ,Route} from 'react-router-dom';
import Container from '../src/ui/pages/container/container.jsx'
import LineCharts from './ui/components/dashboard/lineCharts/lineCharts';
import SplashScreen from './ui/pages/splashScreen/splashScreen';



function App() {
  return (
    <div className="app">
      
    <Router>
      <Routes>

      
     <Route element= {<HomePage />} path="/"/> 
     <Route element={<Create/>} path="/Create" />
     <Route element={<Signinl/>} path="/Login" />
     <Route element={<Container/>} path="/dash" />
    
    </Routes>
    </Router> 
    
    </div>
  );
}

export default App;
