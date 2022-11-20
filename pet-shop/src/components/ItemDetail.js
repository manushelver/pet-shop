function ItemDetail (product) {
    return (
        <div>
            <img src={product.img} alt=""/>
            <li>{product.name}</li>
            <li>{product.descripcion}</li>
            <li>{product.price}</li>
        </div>
        )
}

export default ItemDetail