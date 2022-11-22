import { productos } from "../mocks/mocks";
import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [item,setItem] = useState(null)
    const {id} = useParams();
    useEffect(() => {new Promise((resolve) => setTimeout(() =>resolve(productos),2000))
        .then((data) => {
            const aMostrar = data.find(
                product => product.id === id
            );
            console.log(aMostrar)
            setItem(aMostrar);
        }
        )
    },[id]);
    if (!item) {
        return <p>Loading...</p>;
      }
    return (
        <div className="container d-flex justify-content-center h-auto">
            <ItemDetail product = {item}/>
        </div>
    )

}

export default ItemDetailContainer