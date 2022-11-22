
const ItemDetail = ({ product }) => {
    return (
      <div className="card">
        <img src={product.img} className="rounded mx-auto d-block" alt="" />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text text-secondary">{product.descripcion}</p>
          <p className="card-text text-terciary">{`Precio: ${product.price} $`}</p>
        </div>
      </div>
    );
  };
  

export default ItemDetail