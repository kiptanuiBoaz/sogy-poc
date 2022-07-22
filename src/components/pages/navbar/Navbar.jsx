import React from "react";
import { Link ,Cont, Bars , Menu} from "./NavElements";
import { NavHashLink } from 'react-router-hash-link';


function Navbar() {


  return (
    <>
      <Cont className="navContainer" >
        <Bars />
    
        <Menu>
          <Link to="/" style={
            {marginRight:"450px",
             color:"#ffba5a",
             marginLeft:"10px",
             fontSize:"2.6rem"}}
            >
            Sogy Hotel
          </Link>
          
          <NavHashLink>
            <Link to = "../welcome/Welcome#welcome"  className={"navlink"} activeStyle>
              About Us
            </Link>
          </NavHashLink>
          

          <Link to='/room' className={"navlink"} activeStyle>
            Rooms
          </Link>

          <Link to='/reservations' className={"navlink"} activeStyle>
            Reservations
          </Link>

          <Link to='/contactUs'  className={"navlink"} activeStyle>
            Contact Us
          </Link>

        </Menu>

      </Cont>
    </>
  )
};
  
export default Navbar;
  