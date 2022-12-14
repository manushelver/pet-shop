import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../context/CartContext"

export const Cart = () => {
    const { carrito, removeItem, clear } = useContext(cartContext)
    return (
        <div>
            <div className="row">
                {carrito.map((product) => (
                    <div className="container d-flex justify-content-center h-auto align-items-center">
                        <div className="card">
                            <img src={product.img} className="rounded mx-auto d-block" alt="Producto" />
                            <div className="card-body">
                                <Link to={`/item/${product.id}`} className="card-title">{product.name}</Link>
                                <button onClick={removeItem(product.id)}>X</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={clear()}>Limpiar el carrito</button>
        </div>
    )
}