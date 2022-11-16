import { useState } from 'react';

import ItemList from './ItemList';

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

function ItemListContainer () {
    const [products,setProducts] = useState([])
    const productList = new Promise((resolve) => 
    setTimeout(() =>{resolve(productos)},2000))



    productList.then((data) => setProducts(data))
    
    return (
        <div>
            <ItemList productList={products}/>
        </div>
    )
}

export default ItemListContainer;