import ItemList from './ItemList';
import { productos } from "../mocks/mocks.js";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const { category } = useParams();
  useEffect(() => {
    const db = getFirestore();
    //Para consultar 1 solo producto
    /* const itemRef = doc(db,'items','Ua8J5r2JgzZpwndvZi4O');
    getDoc(itemRef).then((snapshot)=> {
      if (snapshot.exists()) {
        setProducts([{id:"Ua8J5r2JgzZpwndvZi4O",...snapshot.data()}]) //el objeto que estabamos consultando
      } 
    })*/
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
  )

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