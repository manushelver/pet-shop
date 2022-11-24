import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/Layout';
import {cartContext} from './context/CartContext'

function App() {
  return (
    <cartContext.Provider value={[]}>
      <Layout>
        <ItemListContainer/>
      </Layout>
    </cartContext.Provider>
  );
}

export default App;
