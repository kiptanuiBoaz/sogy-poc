import { FaBars } from 'react-icons/fa';
import {Link} from "react-scroll";
import {Link as RouterLink } from "react-router-dom";
import styled from 'styled-components';
  
// the engulfing container
export const Cont = styled.nav`
  background: #212529;
  height: 70px;
  font-size: 2rem;
  width:100%;
  display: flex;
  justify-content: left;
  z-index: 12;
  padding:5px;
  left: 0px;
  position:fixed;
  width: 100%;
  
`;
  
// from react smooth scroll
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffba5a;
    background:  #212529;
  }
  
`;

// from react-router-dom
export const RouteLink = styled(RouterLink)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffba5a;
    background:  #212529;
  }
  
`;
  
// humburger menu icon
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    ${'' /* position: absolute
    top: 0;
    right: 20; */}

    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
// the container of the links
export const Menu = styled.div`
  display: flex;
  justify-content: right;
  width:100%;
  padding-right:40px;
 

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
