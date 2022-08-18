

import React from "react";
import {HashLink} from 'react-router-hash-link';
import "./navbar.css"



function NavBar() {
  const brand = {
    marginRight:"450px",
    color:"#ffba5a",
    marginLeft:"10px",
    fontSize:"2.6rem"
  }

   
  return (
      <>  
      
        <HashLink to="/homepage/Homepage.jsx#homepage" >Sogy</HashLink> 
        <HashLink to="/rooms">Rooms</HashLink>
        {/* <Link to="/welcome">Book Room</Link>
        <Link to="/footer" >Contact Us</Link> */}
           
      </>
  )
}
export default NavBar;