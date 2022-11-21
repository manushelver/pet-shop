import { Link } from "react-router-dom";
const Item = ({ product }) => {
    return (
      <div className="card">
        <img src={product.img} className="Item" alt="Producto" />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text text-secondary">{product.descripcion}</p>
          <Link to={`/item/${product.id}`} className="btn btn-outline-secondary">Ver detalles</Link>
        </div>
      </div>
    );
  };

export default Item