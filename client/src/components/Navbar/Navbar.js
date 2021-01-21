import React from 'react';
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink
// } from './NavbarElements';
import '../images/SCP.png';
import {Navbar, Nav, Form, FormControl, Button, NavLink} from 'react-bootstrap';

const LogoCropped = require('../images/SCPCropped.png')

const NavBar = () => {
  return (

    <Navbar expand="lg">
      
      <Link to='/'><img src ={LogoCropped.default} alt="logo" style={{"height":"3rem", "margin":"0.5rem"}}/></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Link
            to="/forum"
            className={window.location.pathname === "/forum" ? "nav-link active" : "nav-link"}>
            Forum
          </Link>
          <Link
            to="/our-story"
            className={window.location.pathname === "/our-story" ? "nav-link active" : "nav-link"}>
            Our Story
          </Link>
          <Link
            to="/user"
            className={window.location.pathname === "/user" ? "nav-link active" : "nav-link"}>
            User
          </Link>

          

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        

        <Button variant="outline-success"><Link to='/Register' >Login / Sign Up</Link></Button>

        
      </Navbar.Collapse>
    </Navbar>
 
      // <Nav>
      //   <NavLink to='/' activeStyle>
      //     <img src ={LogoCropped.default} alt="logo" style={{"height":"3rem", "margin":"0.5rem"}}/>
      //   </NavLink>
      //   <Bars />
      //   <NavMenu>
      //     <NavLink to='/forum' activeStyle>
      //       Forum
      //     </NavLink>
      //     <NavLink to='/our-story' activeStyle>
      //       Our Story
      //     </NavLink>
      //     <NavLink to='/user' activeStyle>
      //      User
      //     </NavLink>
      //   </NavMenu>
        
      //   <NavBtn className="ml-auto">
      //     {/* Will display "Profile" once logged in */}
      //     <NavBtnLink to='/Register' style={{"border":"black solid 1px"}} >Login / Sign Up</NavBtnLink>
      //   </NavBtn>
      // </Nav>
  );
};

export default NavBar;
