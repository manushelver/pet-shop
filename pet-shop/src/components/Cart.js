import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../context/CartContext"
import './estilos.css'

export const Cart = () => {
    const { carrito, removeItem, clear } = useContext(cartContext);
    return (
        <div>
            <div className="row">
                {carrito.map((product) => (
                    <div className="container d-flex justify-content-center h-auto align-items-center">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={product.img} className="card-img-top" alt="Producto" />
                            <div className="card-body">
                                <Link to={`/item/${product.id}`} className="card-title">{product.name}</Link>
                                <p className="card-text">{`Cantidad: ${product.quantity}`}</p>
                                <p className="card-text">{`Precio: ${product.quantity * product.price}`}</p>
                                <button onClick={()=>removeItem(product.id)}>X</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={clear}>Limpiar el carrito</button>
        </div>
    )
}