import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;
  const {addItem} = useContext(cartContext)

  function handleCount(type) {
    if (type === "+" && count < maxQuantity) setCount(count + 1);
    if (type === "-" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item,count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div className="card">
      <div className="flex justify-center w-1/2">
        <img className="max-h-[500px]" src={item.img} alt={item.name} />
      </div>

      <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <span>
          Precio: <strong>${item.price}</strong>
        </span>
        {currentStock > 0 && (
          <p className="text-sm">En Stock: {currentStock}</p>
        )}

        <div>
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span>Sin stock</span>
          )}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={handleAdd}
              disabled={currentStock === 0}
            >
              Agregar al carrito
            </button>
            <button
              onClick={handleCheckout}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;