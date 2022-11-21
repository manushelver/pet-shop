import NavbarBootstrap from "./NavBar";
import './estilos.css'

export const Layout = ({ children }) => {
  return (
    <main className="App">
      <NavbarBootstrap />
      {children}
    </main>
  );
};