import React, { useState } from 'react';
import {
MDBNavbar,
MDBNavbarBrand,
MDBNavbarNav,
MDBNavItem,
MDBNavLink,
MDBNavbarToggler,
MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';

const NavBar = (props) => {
const [isOpen, setOpen] = useState(false);

const toggleCollapse = ()=>{
  setOpen( !isOpen );
}

return(
  <Router>
    <MDBNavbar className="nbc" dark expand="md">
      <MDBNavbarBrand>
        <strong className="blue-text"><MDBNavLink to="/"><b className="titlemain">Mobilize</b> Learning</MDBNavLink></strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about">About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/contact">Contact</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active>
            <MDBNavLink to="/singup"> <b className="titlemain">S</b>ign<b className="titlemain">U</b>p</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active>
            <MDBNavLink to="/login">
              <b className="titlemain">L</b>ogin
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  </Router>
  );
}

export default NavBar;

/*
Iphone 5 no esta bien presentado,
el modo tablet no funciona para nada bien!, mucho menos en el ipad
*/