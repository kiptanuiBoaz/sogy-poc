
import React ,{useState} from "react";
import {Link as RouterLink } from "react-router-dom";
import "./navbar-styles/navbar.css";
import { FaBars } from 'react-icons/fa';
import {ImCross} from "react-icons/im";
import {Link} from "react-scroll";

export const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false); //state managing the display of the
 

  return (
    <nav>
      <div className="nav-container">

      
        <Link to={"/"} spy ={true} className="brand" activeClass="" smooth= {true} offset={0}>Sogy</Link>

        <div className="list-container">
        
          <ul className="desktop-links">
            
            <li ><Link to={"/"} spy={true} className = "link"  smooth={true} offset={0} duration={1000}>Home</Link></li>
          
            <li><Link to={"rooms"} spy={true} className = "link"   smooth={true} offset={0} duration={1000}>Rooms</Link></li>
          
            <li><RouterLink to="/reservations" className = "link"  >Reservations</RouterLink></li>
          
            <li><Link to={"contactUs"} spy={true} className = "link"  smooth={true} offset={0} duration={1000}>Contact Us</Link></li>
          
          </ul>
          
          <div onClick={()=>setShowMobileMenu(!showMobileMenu)}>
            { showMobileMenu ? <ImCross className=" icon" /> : <FaBars className=" icon"/>}
          </div>
        
        </div>
      </div>
      
      <div className="mobile-container">
        { 
          /* menu to show in mobile view */
          showMobileMenu && <ul>
            
            <li><Link  onClick={()=>setShowMobileMenu(!showMobileMenu)}  to={"/"} spy={true} className = "mobilelink" activeClass=""  smooth={true} offset={0} duration={1000}>Home</Link></li>
            <hr/>
            <li ><Link  onClick={()=>setShowMobileMenu(!showMobileMenu)} to={"rooms"} spy={true} className = "mobilelink" activeClass=""  smooth={true} offset={0} duration={1000}>Rooms</Link></li>
            <hr/>
            <li ><RouterLink  onClick={()=>setShowMobileMenu(!showMobileMenu)} to="/reservations" className = "mobilelink"  activeClass=""  >Reservations</RouterLink></li>
            <hr/>
            <li ><Link onClick={()=>setShowMobileMenu(!showMobileMenu)}  to={"contactUs"} spy={true} className = "mobilelink" activeClass=""  smooth={true} offset={0} duration={1000}>Contact Us</Link></li>
            <hr/>
          </ul>
        }
      </div>
      
    </nav>
   
  )
}