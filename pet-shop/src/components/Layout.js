import NavbarBootstrap from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <main className="">
      <NavbarBootstrap />
      {children}
    </main>
  );
};