

import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import {HashLink } from "react-router-hash-link";
import "../welcome/Welcome"

function NavBar() {
  const brand = {
    marginRight:"450px",
    color:"#ffba5a",
    marginLeft:"10px",
    fontSize:"2.6rem"
  }

   
  return (
      <>  

        <NavHashLink to="/welcome/Welcome" >About Us</NavHashLink>
        {/* <HashLink to="/#Rooms" className="link"><Nav.Link href="#Rooms" className="link">Rooms</Nav.Link></HashLink>
        <Link to="/bookroom" className="link"><Nav.Link href="/bookroom" className="link">Reservations</Nav.Link></Link>
        <HashLink to="/#footer" className="link"><Nav.Link href="#footer" className="link">Contact Us</Nav.Link></HashLink> */}
           
      </>
  )
}
export default NavBar;