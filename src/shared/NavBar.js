import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
   return (
      <Navbar bg="primary" variant="dark">
         <Navbar.Brand href="/">Insure Lux 3000</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="/policies/">Policies</Nav.Link>
               <Nav.Link href="/add-policy/">Add policy</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default NavBar;
