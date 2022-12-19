import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { category } = useParams();
  /*useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');

    function querySinFiltro() {
      getDocs(itemsCollection).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data
        }))
        setProducts(products)
      }
      )
    }
    function queryConFiltro() {
      const q = query(itemsCollection, where("category", "==", category))
      getDocs(q).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data
        }))
        setProducts(products)
      }
      )
    }

    category ? queryConFiltro() : querySinFiltro();
  }
  )*/
  useEffect(() => {
    const dbFirestore = getFirestore()
    // creamos una función que va a obtener los datos de firebase
    const getData = async () => {
      // con una condicional, si no tiene categorías, 
      const queryRef = !category
        // va a traer todos los productos
        ? collection(dbFirestore, "items")
        // si tiene categorías, firebase va a filtrarlas
        : query(
          collection(dbFirestore, "items"),
          where("category", "==", category)
        );
      // recibimos los datos
      const response = await getDocs(queryRef);
      // y hacemos un map para crear objetos con esos datos.
      const productos = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id,
        };
        // lo retornamos
        return newProduct;
      });
        setProducts(productos);
    };
    // llamo a la función
    getData();

  }, [category])

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ItemList productList={products} />
    </div>
  )
}

export default ItemListContainer;