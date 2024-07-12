import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import Nav from './components/nav';
import Politics from './components/Politics';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Technology from './components/Technology';
import CreateNews from './components/CreateNews';
import Home from './components/Home.js';
import Register from './components/Register.js';
import EditNews from './components/EditNews.js';
import Latest from './components/latest.js';
import Login from "./components/Login"
import Signup from "./components/Signup"
// import { useEffect } from 'react'
// import CLOUDS from 'vanta/src/vanta.birds' 

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";


function App() {


  
//   useEffect(()=>{
//     CLOUDS({
//          el: "#vanta",
//          mouseControls: true,
//          touchControls: true,
//          gyroControls: false,
//          minHeight: 200.00,
//          minWidth: 200.00,
//          scale: 1.00,
//          scaleMobile: 1.00,
//          backgroundColor: 0x0

//     })
// },[])   


  return (
    <div>
      <div className="bg" id="vanta">
      <br/>
      <br/>
      <br/>
      <br/>
      <Router>
      <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/*" element={<><Nav /><Outlet /></>}>
      <Route path="late/*" element={<Latest />} />
      <Route path="entertainment/*" element={<Entertainment />} />
      <Route path="politics/*" element={<Politics />} />
      <Route path="sports/*" element={<Sports />} />
      <Route path="technology/*" element={<Technology />} />
      <Route path="createnews/*" element={<CreateNews />} />
      <Route path="profile/*" element={<Home />} />
      <Route path="register/*" element={<Register />} />
      <Route path="editnews/:id" element={<EditNews />} />
    </Route>
  </Routes>
</Router>
</div>
    </div>
  );
}


export default App; 
