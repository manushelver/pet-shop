import ItemList from './ItemList';
import { productos } from "../mocks/mocks.js";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ItemListContainer () {
    const [products,setProducts] = useState([])
    const {category} = useParams();
    useEffect(() => {
      new Promise((resolve) =>
        setTimeout(() => {
          resolve(productos);
        }, 2000)
      ).then((data) => {
        if (category) {
          const categories = data.filter(
            (product) => product.category === category
          );
          setProducts(categories);
        } else {
          setProducts(data);
        }
      });
    }, [category]);

    if (!products) {
      return <p>Loading...</p>;
    }
    
    return (
        <div className="container d-flex w-500">
            <ItemList productList={products}/>
        </div>
    )
}

export default ItemListContainer;