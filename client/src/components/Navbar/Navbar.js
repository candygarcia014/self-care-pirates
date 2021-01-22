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
      <Navbar.Toggle aria-controls="basic-navbar-nav" variant="outline-secondary"/>
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
          <Button className="SearchBtn" variant="outline-secondary">Search</Button>
        </Form>
        

        <Button className="LoginBtn" variant="outline-secondary"><Link to='/Register' className="RegisterBtn">Login / Sign Up</Link></Button>

        
      </Navbar.Collapse>
    </Navbar>
   );
};

export default NavBar;
