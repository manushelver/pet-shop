function Item(product) {
    return (
    <div>
        <img src={product.img} alt=""/>
        <li>{product.name}</li>
    </div>
    )
}

export default Item