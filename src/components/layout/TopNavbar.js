import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const TopNavbar = () => {
    return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Events</Nav.Link>
      <Nav.Link href="#">Members</Nav.Link>
      <Nav.Link href="#">Contact</Nav.Link>
    </Nav>
  </Navbar>
    )
}

export default TopNavbar