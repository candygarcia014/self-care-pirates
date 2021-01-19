import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const NavBar = () => {
  return (
 
      <Nav>
        <NavLink to='/'>

        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
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
