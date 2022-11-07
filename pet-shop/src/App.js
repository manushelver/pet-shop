import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarBootstrap from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavbarBootstrap/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
