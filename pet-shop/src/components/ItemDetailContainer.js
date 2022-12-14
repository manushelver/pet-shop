import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { getFirestore,doc,getDoc } from "firebase/firestore";


function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        const db = getFirestore();
        //Para consultar 1 solo producto
        const itemRef = doc(db, 'items', id);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem([{ id, ...snapshot.data() }]) //el objeto que estabamos consultando
            }
        })
    });
    if (!item) {
        return <p>Loading...</p>;
    }
    return (
        <div className="container d-flex justify-content-center h-auto">
            <ItemDetail item={item} />
        </div>
    )

}

export default ItemDetailContainer