import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
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
  
 
`;
  
export const Link = styled(Link)`
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
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 10;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const Menu = styled.div`
  display: flex;
  align-items: right;
  margin-right: 0px;
  margin-left: 0px;
  padding-left:0px;
  padding-right:0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
