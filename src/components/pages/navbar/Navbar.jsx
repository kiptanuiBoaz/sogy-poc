
import React from "react";
import "./navbar.css";
import { Cont, NavLink, RouteLink, Bars, Menu } from "./NavElements";

export const NavBar = () => {
  const brand = {
    marginRight:"450px",
    color:"#ffba5a",
    marginLeft:"10px",
    fontSize:"2.6rem"
  }

  return (
    <Cont>

      <NavLink to={"/"} spy ={true} activeClass="" smooth= {true} offset={0}>Sogy</NavLink>

      <Menu>
        
        <NavLink to={"/"} spy={true} activeClass=""  smooth={true} offset={0} duration={1000}>Home</NavLink>
      
        <NavLink to={"rooms"} spy={true} activeClass=""  smooth={true} offset={0} duration={1000}>Rooms</NavLink>
      
        <RouteLink to="/reservations" spy={true} activeClass="" smooth={true} offset>Reservations</RouteLink>
      
        <NavLink to={"contactUs"} spy={true} activeClass=""  smooth={true} offset={0} duration={1000}>Contact Us</NavLink>
       
      </Menu>
      <Bars/>
      
    </Cont>
   
  )
}