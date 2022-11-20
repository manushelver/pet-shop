import { productos } from "../mocks/mocks";
import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail"

function ItemDetailContainer(product) {
    const [item,setItem] = useState(null)
    useEffect(() => {new Promise((resolve) => setTimeout(() =>resolve(productos[0]),2000))
        .then((data) => setItem(data)
        )
    },[]);

    return (
        <ItemDetail product = {item}/>
    )

}

export default ItemDetailContainer