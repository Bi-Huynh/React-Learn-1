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
                <NavItem>
                    <NavLink href="/todo">Todo List</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/colorbox">Colorbox</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/postlist">PostList</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/clock">Clock</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Navs;
