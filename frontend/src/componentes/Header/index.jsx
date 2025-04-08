import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Image } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from '../../images/logos-alcaldia.png';

import { useAuth } from '../../context/AuthContext';

function CollapsibleExample() {
  const location = useLocation();

  const { isAuth, signout, user } = useAuth();

  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      bg="light"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand>
          <Image
            src={logo1}
            alt="Logo 1"
            width="200"
            height="200"
            className="mr-2"
          />
        </Navbar.Brand>
        <Nav className="nav-links">
          {!isAuth && (
            <>
              <Nav.Link as={Link} to="/" className="custom-nav-link">
                Iniciar Sesión
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/crearusuario"
                className="custom-nav-link"
              >
                Registrar
              </Nav.Link>
            </>
          )}

          {isAuth && (
            <Nav.Link
              as={Link}
              to="#signout"
              onClick={() => {
                signout();
              }}
              className="custom-nav-link"
            >
              Cerrar Sesión
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
