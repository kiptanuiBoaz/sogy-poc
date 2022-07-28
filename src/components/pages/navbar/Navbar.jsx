

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
        <Link to = "/bookroom">book room</Link>
        {/* <NavHashLink to={"/welcome/Welcome#welcome"} >About Us</NavHashLink> */}
        {/* <HashLink to="/#Rooms" className="link"><Nav.Link href="#Rooms" className="link">Rooms</Nav.Link></HashLink>
        <Link to="/bookroom" className="link"><Nav.Link href="/bookroom" className="link">Reservations</Nav.Link></Link>
        <HashLink to="/#footer" className="link"><Nav.Link href="#footer" className="link">Contact Us</Nav.Link></HashLink> */}
           
      </>
  )
}
export default NavBar;