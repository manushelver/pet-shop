import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [stock,setStock] = useState(product.stock)
  const maximo = stock;

  function handleCount(symbol) {
    if (symbol === "+" && count <= maximo) setCount(count +1)
    if (symbol === "-" && count > 1) setCount(count -1)
  }

  function handleAddToCart() {
    if (stock < count){
      alert("No hay suficiente stock")
    } else {
      setStock(stock-count)
    }
  }

  function handleCheckout() {
    navigate('/cart')
  }
  
  return (
      <div className="card">
        <img src={product.img} className="rounded mx-auto d-block" alt="" />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text text-secondary">{product.descripcion}</p>
          <p className="card-text text-terciary">{`Precio: ${product.price} $`}</p>
          <p className="card-text text-terciary">{`Stock: ${stock}`}</p>
          {stock > 0 ? (
            <><ItemCount count={count} handleCount={handleCount} />
            <div>
              <button disabled={count===0} onClick={handleAddToCart}>Agregar al carrito</button>
              <button onClick={handleCheckout}>Finalizar compra</button>
            </div></>
          ) : (
            <span className="text-red-500 mt-10">Sin stock</span>
          )}
        </div>
      </div>
    );
  };
  

export default ItemDetail