
import React from "react";
import {Link as RouterLink } from "react-router-dom";
import "./navbar-styles/navbar.css";
import { FaBars } from 'react-icons/fa';
import {ImCross} from "react-icons/im";
import {Link} from "react-scroll";

export const NavBar = () => {
   // eslint-disable-next-line
 

  return (
    <nav>

      <Link to={"/"} spy ={true} className="brand" activeClass="" smooth= {true} offset={0}>Sogy</Link>

      <ul>
        
        <li><Link to={"/"} spy={true} className = "link" activeClass=""  smooth={true} offset={0} duration={1000}>Home</Link></li>
      
        <li><Link to={"rooms"} spy={true} className = "link" activeClass=""  smooth={true} offset={0} duration={1000}>Rooms</Link></li>
      
        <li><RouterLink to="/reservations" className = "link" spy={true} activeClass="" smooth={true} offset>Reservations</RouterLink></li>
      
        <li><Link to={"contactUs"} spy={true} className = "link" activeClass=""  smooth={true} offset={0} duration={1000}>Contact Us</Link></li>
       
      </ul>
      
      <FaBars className=" icon"/>
      <ImCross className=" icon" />
      
    </nav>
   
  )
}