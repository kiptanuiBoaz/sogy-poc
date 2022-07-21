import React from "react";
import { NavLink ,Nav, Bars , NavMenu} from "./NavElements";


function Navbar() {


  return (
    <>
      <Nav className="navContainer" >
        <Bars />
    
        <NavMenu>
          <NavLink to="/" style={
            {marginRight:"450px",
             color:"#ffba5a",
             marginLeft:"10px",
             fontSize:"2.6rem"}}
            >
            Sogy Hotel
          </NavLink>

          <NavLink to = {{pathname:"../welcome/Welcome#welcome"}}  className={"navlink"} activeStyle>
            About Us
          </NavLink>

          <NavLink to='/room' className={"navlink"} activeStyle>
            Rooms
          </NavLink>

          <NavLink to='/reservations' className={"navlink"} activeStyle>
            Reservations
          </NavLink>

          <NavLink to='/contactUs'  className={"navlink"} activeStyle>
            Contact Us
          </NavLink>

        </NavMenu>

      </Nav>
    </>
  )
};
  
export default Navbar;
  