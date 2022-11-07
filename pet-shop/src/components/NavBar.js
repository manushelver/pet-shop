import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

export default function NavbarBootstrap() {
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Mascoterias</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#animales">Animales</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
      );
}