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
            width="130"
            height="100"
            className="mr-2"
          />
        </Navbar.Brand>
        <Nav>
          {!isAuth && (
            <>
              <Nav.Link as={Link} to="/">
                Iniciar Sesión
              </Nav.Link>
              <Nav.Link as={Link} to="/crearusuario">
                Registrar
              </Nav.Link>
            </>
          )}

          {isAuth && (
            <NavDropdown title={user.nomestablecimiento}>
              <Link
                className="dropdown-item"
                to="#signout"
                onClick={() => {
                  signout();
                }}
              >
                Cerrar Sesión
              </Link>
            </NavDropdown>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
