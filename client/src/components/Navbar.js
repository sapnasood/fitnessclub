import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default class CustomNavbar extends Component{
render(){
 return(
<Navbar default collapseOnSelect fixedTop >
  <Navbar.Header>
    <Navbar.Brand>
      <a id ="nav-header" href="/">POWER FITNESS</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight style={{display:"flex", flexDirection:"row"}}>
      <NavItem eventKey={1} componentClass={Link} href="/" to="/">
        HOME
      </NavItem>
      {/* <NavItem eventKey={2} componentClass={Link} href="/map" to="/map">
       FIND A WORKOUT
      </NavItem> */}
      <NavItem eventKey={3} componentClass={Link} href="/getstarted" to="/getstarted">
      GET STARTED
      </NavItem>
      <NavItem eventKey={4} componentClass={Link} href="/signin" to="/signin">
        SIGN IN
      </NavItem>
      <NavItem eventKey={5} componentClass={Link} href="/" to="/">
      CONTACT
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

 )

}


}
