import { createContext, useEffect, useState } from "react";


export const cartContext = createContext([]);


export const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
  
    function addItem(item, cantidad) {
      const isAlreadyAdded = isInCart(item.id)
      if (isAlreadyAdded){
        setCarrito((productos) => {
          productos.map((producto) => 
            producto.id === item.id ? {
              ...producto, quantity: producto.quantity + cantidad
            } : {
              producto
            }
          )
        })
      } else {
        setCarrito(carrito.push({item, quantity: cantidad}));
      }
    }
  
    function removeItem(itemId) {
      setCarrito(carrito.filter((item) => item.id !== itemId));
    }
  
    function clear() {
      setCarrito([]);
    }
  
    function isInCart(itemId) {
      return Boolean(carrito.find((item) => item.id === itemId));
    }

    function total(){
      let res = 0;
      carrito.forEach((product)=> res += product.price)
      return res;
    }

    function itemsEnTotal(){
      let res = 0;
      carrito.forEach((product)=> res += product.quantity)
      return res;
    }

  
    return (
      <cartContext.Provider value={{ addItem, removeItem, clear, isInCart, carrito, total, itemsEnTotal }}>
        {children}
      </cartContext.Provider>
    );
  };