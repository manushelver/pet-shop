import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavbarBootstrap() {
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Mascoterias</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="bg-gray-900 text-black px-3 py-2 rounded-md text-sm font-medium" to="/">Home</Link>
            <Link className="bg-gray-900 text-black px-3 py-2 rounded-md text-sm font-medium" to="/category/Perro">Perros</Link>
            <Link className="bg-gray-900 text-black px-3 py-2 rounded-md text-sm font-medium" to="/category/Gato">Gatos</Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
      );
}