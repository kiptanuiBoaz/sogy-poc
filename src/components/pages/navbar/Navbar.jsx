

import React from "react";
import {Link} from 'react-router-dom';



function NavBar() {
  const brand = {
    marginRight:"450px",
    color:"#ffba5a",
    marginLeft:"10px",
    fontSize:"2.6rem"
  }

   
  return (
      <>  
      
        <Link to="/" >Sogy</Link> 
        <Link to="/rooms">Rooms</Link>
        <Link to="/welcome">Book Room</Link>
        <Link to="/footer" >Contact Us</Link>
           
      </>
  )
}
export default NavBar;