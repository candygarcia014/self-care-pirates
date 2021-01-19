import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import '../images/SCP.png';
import Navbar from 'react-bootstrap/Navbar';

const logo = require('../images/SCP.png')

const NavBar = () => {
  return (
 
      <Nav>
        <NavLink to='/'>

        </NavLink>
        <Bars />
        <Navbar.Brand><img src ={logo.default} alt="logo" style={{"height":"5rem"}}/></Navbar.Brand>
        <NavMenu>
          <NavLink to='/' activeStyle>
            LOGO
          </NavLink>
          <NavLink to='/forum' activeStyle>
            Forum
          </NavLink>
          <NavLink to='/our-story' activeStyle>
            Our Story
          </NavLink>
          <NavLink to='/user' activeStyle>
           User
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>

  );
};

export default NavBar;
