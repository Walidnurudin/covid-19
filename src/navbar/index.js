import React, { useState, StrictMode } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const Navigasi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StrictMode>
      <Navbar color="light" light expand="md">
        <Container>
          <Link to="/"><NavbarBrand style={{fontWeight: 'bold'}}>COVID<span style={{color: 'red'}}>19</span></NavbarBrand></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/"><NavLink>Home</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/news"><NavLink>News</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/about"><NavLink>About</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </StrictMode>
  );
}

export default Navigasi;
