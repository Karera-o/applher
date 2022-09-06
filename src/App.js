
import React from 'react';
import './App.css';
import Create from './ui/pages/signinPage/Create';
// import Reset from './ui/pages/signinPage/Reset';
import Signinl from './ui/pages/signinPage/Signinl';
import HomePage from './ui/pages/homePage/homePage';
// import SigninPage from './ui/pages/signinPage/signinPage';
import {HashRouter as Router  , Routes ,Route} from 'react-router-dom';
import Container from './ui/pages/container/container.jsx'
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
    

     
      {/* <Create/> */}
        {/* <Reset /> */}
      
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
