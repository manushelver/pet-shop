import { createContext, useState } from "react";


export const cartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
  
    function addItem(item, cantidad) {
      const isAlreadyAdded = isInCart(item.id)
      console.log(item.id);
      let carritoAnterior = carrito;
      if (isAlreadyAdded){
        let carritoActualizado = carritoAnterior.map((producto)=>{
          let cantidadFinal = producto.quantity + cantidad;
          if (producto.id === item.id && cantidadFinal <= producto.stock){
            return {...producto, quantity: cantidadFinal}
          } if ( cantidadFinal > producto.stock){
            alert ("No hay suficiente stock");
            return producto
          }
          else {
            return producto
          }
/*           return producto.id === item.id && cantidadFinal <= producto.stock ? {
            ...producto,quantity: cantidadFinal
          }
          :
          producto */
        })
        setCarrito(carritoActualizado)
      } else {
        carritoAnterior.push({...item, quantity: cantidad});
        setCarrito(carritoAnterior);
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
      carrito.forEach((product)=> res += product.price * product.quantity)
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