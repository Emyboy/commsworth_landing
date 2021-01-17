import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../assets/img/logo.png';
import { BsArrowRight } from "react-icons/bs";
import { TiThMenu } from 'react-icons/ti'

export default function Header() {
    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg"  variant="dark" className='fixed-top'>
                <Navbar.Brand href="#home"><img src={Logo} alt='site logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/* <TiThMenu className='navbar-toggler collapsed' aria-controls="responsive-navbar-nav" aria-label="Toggle navigation"/> */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#features">CSR Academy</Nav.Link>
                        <Nav.Link href="#features">Publications</Nav.Link>
                        <Nav.Link href="#features">Events</Nav.Link>
                        <Nav.Link href="#features">Media</Nav.Link>
                        <Nav.Link href="#features"><button className='btn btn-success'>CONTACT US<BsArrowRight /></button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
