import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Image,Thumbnail} from 'react-bootstrap';
import logo from './sd.png';
import avatar from './avatar08_tn.png';

class Header extends React.Component {

    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <img  src={logo} width={60} height={50} id="logo" href="/" />
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav id="navi" pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Sign up
                        </NavItem>
                        <NavItem eventKey={1}  componentClass={Link} href="/" to="/">
                            Log in
                        </NavItem>

                    </Nav>
                </Navbar.Collapse>

                <Navbar default collapseOnSelect id="Nav1">
                    <Nav >
                        <NavItem eventKey={1} href="#" id="n1">
                            Nosotros
                        </NavItem>
                        <NavItem eventKey={2} href="/DateFood" id="n2">
                            Alimentos
                        </NavItem>
                        <NavItem eventKey={3} href="/Exercise" id="n3">
                            Ejercicios
                        </NavItem>
                        <NavItem eventKey={2} href="#" id="n4">
                            Noticias
                        </NavItem>
                        <NavItem eventKey={4} href="/Usuario" id="n5">
                            Perfil
                        </NavItem>
                    </Nav>
                </Navbar>

            </Navbar>
        )
    }
}

export default Header;