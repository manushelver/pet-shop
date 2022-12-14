import { Button } from "bootstrap";
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { useContext } from "react"
import { Link } from "react-router-dom";
import ItemList from "../components/ItemList";
import { cartContext } from "../context/CartContext"

export const CartView = () => {
    const {cart} = useContext(cartContext);

    const finalizarCompra = () => {
        const ventasCollection = collection(db,'ventas')
        addDoc(ventasCollection,{
            comprador,
            items: cart,
            total,
            date: serverTimestamp()
        })
        .then(
            res => console.log(res.id)
        )
    }

    const actualizarStock = () => {
        const updateStock = doc(db,'productos','Ua8J5r2JgzZpwndvZi4O')
        updateDoc(updateStock,{stock: 3})
    }

    return (
        <>
            {cart.length === 0 ? (
                <>
                <h1>Aun no agregaste productos, podes verlos</h1> <Link to="/">ACÁ</Link>
                </>
            )
                :
            (
                <ItemList productList={cart}></ItemList>
            )
        }
        <Button onClick={finalizarCompra}>Finalizar compra</Button>
        <Button onClick={actualizarStock}>Actualizar stock</Button>
        </>
    )
}