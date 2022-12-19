import { Link } from "react-router-dom";
import './estilos.css'
const Item = ({ product }) => {
    return (
      <div className="card" style={{width: '25rem'}}>
        <img src={product.img} className="imgItem" alt="Producto" />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <Link to={`/item/${product.id}`} className="btn btn-outline-secondary">Ver detalles</Link>
        </div>
      </div>
    );
  };

export default Item