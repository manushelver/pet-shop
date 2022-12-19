import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './estilos.css'

export default function NavbarBootstrap() {
  return (
      <Navbar bg="info" variant="light">
        <Container>
          <Navbar.Brand><Link to="/" className='brandName'>Mascoterias</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link className="categorias" to="/">Home</Link>
            <Link className="categorias" to="/category/Perro">Perros</Link>
            <Link className="categorias" to="/category/Gato">Gatos</Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
      );
}