
import React from "react";
import "./navbar.css";
import {Link} from "react-scroll";
import {Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const brand = {
    marginRight:"450px",
    color:"#ffba5a",
    marginLeft:"10px",
    fontSize:"2.6rem"
  }

   
  return (
    <>
      <div>
        <p className="brand">
          <Link to={"/"} spy ={true} activeClass="" smooth= {true} offset={0}>Sogy</Link>
        </p>
      </div>

      <ul>
       
        <li>
          <Link to={"aboutUS"} spy={true} activeClass=""  smooth={true} offset={0} duration={1000}>Home</Link>
        </li>
        <li>
          <Link to={"rooms"} spy={true} activeClass=""  smooth={true} offset={0} duration={1000}>Rooms</Link>
        </li>
        <li>
          <RouterLink to="/bookRoom">Book Room</RouterLink>
        </li>
        <li>
          <Link to={"contactUs"} spy={true} activeClass=""  smooth={true} offset={0} duration={1000}>Contact Us</Link>
        </li>
      </ul>
    </>
   
  )
}
export default NavBar;