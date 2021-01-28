import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText } from 'reactstrap';
import {NavLink } from 'react-router-dom';
import Typical from 'react-typical';


const Navig = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      
      <Navbar  expand='md' light >
        <NavbarBrand href="/"  class="navi">newDevJobs</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="navItem">
              <NavLink className="customul box-e" to="/home">Home</NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="customul box-e" to="/jobs" >Jobs</NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="customul box-e" to="/aboutUs">About Us</NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="customul box-e" to="/contactUs">Contact Us</NavLink>
            </NavItem>
            <NavItem className="navItem">
              < a href="https://github.com/saivk7" class="customul box-e" to="./" target="_blank">GitHub</a>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Coming Soon!
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="jumboContainer">



       </div>
       
    </div>
  );
}


export default Navig;