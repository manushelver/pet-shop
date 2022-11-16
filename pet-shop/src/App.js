import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarBootstrap from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

const productos = [
  {
    id: "1",
    name: "Gato",
    descripcion: "El gato tiene 4 patas",
    stock:5,
    img: "https://placekitten.com/200/300",
    price: 5000
  },
  {
    id: "2",
    name: "Perro",
    descripcion: "El perro tiene cola",
    stock:5,
    img:"https://place.dog/300/200",
    price: 4500
  }
]

function App() {
  return (
    <div className="App">
      <NavbarBootstrap/>
      <ItemListContainer productos={productos}/>
    </div>
  );
}

export default App;
