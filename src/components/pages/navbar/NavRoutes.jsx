import React from "react";
import Navbar from "./Navbar";
import Homepage from "../homepage/Homepage"
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Welcome from "../welcome/Welcome";
import Room from "../rooms/Rooms";
import ContactUs from "../contactUs/ContactUs";
import NoPage from "../Nopage"

function NavRoutes() {
  return (
    <>
      
      
        <Router >
            <Navbar/>
            <Routes>
        
                <Route  path='/'  strict element={Homepage} />
                <Route path='/welcome' element={<Welcome/>} />
                <Route path='/room' element={<Room/>} />
                <Route path='/contactUs' element={<ContactUs/>} />
                <Route path="*" element={<NoPage />} /> 
        
            </Routes>
        </Router>
    </>
  );
};

export default NavRoutes;
