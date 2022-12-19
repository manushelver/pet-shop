import { useContext, useEffect, useState } from 'react';
import {BsFillCartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContext';
import './estilos.css'

function CartWidget () {
    const {carrito,itemsEnTotal} = useContext(cartContext);
    const [totalAMostrar, setTotalAMostrar] = useState(0)

    useEffect(()=> {
        setTotalAMostrar(itemsEnTotal)
    },[carrito])
    return (
        <Link to={'/cart'}>
            <BsFillCartFill className = "Widget"/>
            {totalAMostrar === 0 ? <></> :  <p className='itemsDelCarrito'>{totalAMostrar}</p>}
        </Link>
    );
  };
  
  export default CartWidget;