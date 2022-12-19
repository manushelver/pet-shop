import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import { useContext } from "react"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "../components/Cart";
import { Layout } from "../components/Layout";
import { cartContext } from "../context/CartContext"

export const CartView = () => {
    const {carrito,total, clear, itemsEnTotal} = useContext(cartContext);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");


      const onSubmit = (data) => {
        const order = {
            buyer: data,
            items: itemsEnTotal(),
            total: total(),
          };
          addDoc(ordersCollection, order)
          .catch((error)=> console.error(error));

          carrito.forEach((element) => {
            const itemRef = doc(db, "items", element.id);
            const dataToUpdate = {
              stock: element.stock - element.quantity,
            };
            updateDoc(itemRef, dataToUpdate)
              .then(() => {
                clear();
                alert("Compra finalizada");
                navigate("/");
              })
              .catch((error) => console.error(error));
          });
        }

    return (
        <Layout>
            {itemsEnTotal === 0 ? (
                <div>
                <h1>Aun no agregaste productos, podes verlos</h1> <Link to="/">ACÁ</Link>
                </div>
            )
                :
            (
                <Cart></Cart>
                
            )
        }
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nombre:
                    <input type="text" {...register('nombre', {
                        required : true
                    })} />
                </label>
                <label>
                    Apellido:
                    <input type="text" {...register('apellido',{
                        required: true
                    })}/>
                </label>
                <label>
                    Telefono:
                    <input type="number" {...register('telefono',{
                        required: true
                    })}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <span>Total a pagar: ${total()}</span>
        </div>
        </Layout>
    )
}