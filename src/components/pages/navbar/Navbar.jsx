
import React from "react";
import "./navbar.css";

const NavBar = () => {
  const brand = {
    marginRight:"450px",
    color:"#ffba5a",
    marginLeft:"10px",
    fontSize:"2.6rem"
  }

   
  return (
      
    <ul>
      <li className= {brand}>Sogy</li>
      <li>Rooms</li>
      <li>Book Room</li>
      <li>Contact Us</li>
    </ul>
 
           
     
  )
}
export default NavBar;