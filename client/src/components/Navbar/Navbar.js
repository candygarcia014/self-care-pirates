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

const LogoCropped = require('../images/SCPCropped.png')

const NavBar = () => {
  return (
 
      <Nav>
        <NavLink to='/'>

        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            <img src ={LogoCropped.default} alt="logo" style={{"height":"3rem", "margin":"0.5rem"}}/>
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
        
        <NavBtn className="ml-auto">
          <NavBtnLink to='/signin' style={{"border":"black solid 1px"}} >Profile/Sign In</NavBtnLink>
        </NavBtn>

        
      </Nav>

  );
};

export default NavBar;
