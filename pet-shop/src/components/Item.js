const Item = ({ product }) => {
    return (
      <div>
        <img src={product.img} className="Item" alt="Producto" />
        <li>{product.name}</li>
        <li>{product.descripcion}</li>
      </div>
    );
  };

export default Item