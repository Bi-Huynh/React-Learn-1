import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navs = (props) => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Reactstrap</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/product">Product</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Navs;
