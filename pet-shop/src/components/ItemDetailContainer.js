import { productos } from "../mocks/mocks";
import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [item,setItem] = useState(null)
    const {id} = useParams();
    useEffect(() => {new Promise((resolve) => setTimeout(() =>resolve(productos[0]),2000))
        .then((data) => {
            const aMostrar = data.filter(
                (product) => product.id === id
            );
            console.log(aMostrar)
            setItem(aMostrar);
        }
        )
    },[id]);
    console.log(item)
    return (
        <ItemDetail product = {item}/>
    )

}

export default ItemDetailContainer