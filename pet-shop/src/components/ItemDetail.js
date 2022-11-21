const ItemDetail = ({ product }) => {
    return (
      <div>
        <div>{product.name}</div>
        <img src={product.img} alt="Detalle" />
      </div>
    );
  };
  

export default ItemDetail