// import React from "react";
// import { Link ,Cont, Bars , Menu} from "./NavElements";
// import { NavHashLink } from 'react-router-hash-link';


// function Navbar() {


//   return (
//     <>
//       <Cont className="navContainer" >
//         <Bars />
    
//         <Menu>
//           <Link to="/" 
//             Sogy Hotel
//           </Link>
          
//           <NavHashLink>
//             <Link to = "../welcome/Welcome#welcome"  className={"navlink"} activeStyle>
//               About Us
//             </Link>
//           </NavHashLink>
          

//           <Link to='/room' className={"navlink"} activeStyle>
//             Rooms
//           </Link>

//           <Link to='/reservations' className={"navlink"} activeStyle>
//             Reservations
//           </Link>

//           <Link to='/contactUs'  className={"navlink"} activeStyle>
//             Contact Us
//           </Link>

//         </Menu>

//       </Cont>
//     </>
//   )
// };
  
// export default Navbar;
  

import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function NavBar() {
  const brand ={
    marginRight:"450px",
    color:"#ffba5a",
    marginLeft:"10px",
    fontSize:"2.6rem"
  }

  
    
  
  return (
      <>  
        <Navbar className="navbar" fixed="top" collapseOnSelect bg="dark" variant="dark" expand="md">
          <Container>
            <Navbar.Brand style={brand}  href="/">Sogy Hotel</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <HashLink to="/#About" className="link"><Nav.Link href="#welcome" className="link">About Us</Nav.Link></HashLink>
                    <HashLink to="/#Rooms" className="link"><Nav.Link href="#Rooms" className="link">Rooms</Nav.Link></HashLink>
                    <Link to="/bookroom" className="link"><Nav.Link href="/bookroom" className="link">Reservations</Nav.Link></Link>
                    <HashLink to="/#footer" className="link"><Nav.Link href="#footer" className="link">Contact Us</Nav.Link></HashLink>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
  )
}
export default NavBar;