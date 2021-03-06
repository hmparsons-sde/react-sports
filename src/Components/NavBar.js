import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
        <>
          <NavItem>
            <Link className="nav-link" to="/wrestlers">Wrestlers</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/add-wrestlers/">Add Wrestlers</Link>
          </NavItem>
        </>
  );

  return (
    <div id="navbar">
      <Navbar className="text-center" light expand="md">
        <NavbarBrand href="/">Wrestlemania Throwback</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto text-center" navbar>
          { user && authenticated()}
            {
              user !== null
              && <NavItem className="clearfix">
                {
                  user
                    ? <Button color='danger' className='ml-3 float-right' onClick={signOutUser}>Log Out</Button>
                    : <Button color='info' className='ml-3 float-right' onClick={signInUser}>Log In</Button>
                }
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
