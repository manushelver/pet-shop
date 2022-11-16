function ItemDetail (product) {
    return (
        <div>
            <img src={product.img}/>
            <li>{product.name}</li>
            <li>{product.descripcion}</li>
            <li>{product.price}</li>
        </div>
        )
}

export default ItemDetail