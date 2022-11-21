import Item from "./Item"

const ItemList = ({ productList }) => {
    return (
      <div className="container d-flex justify-content-center h-100 align-items-center">
        <div className="row">
            {productList.map((product) => (
            <div className="col-md-4">
            <Item product={product}/>
            </div>
            ))}
        </div>
      </div>
    );
  };


export default ItemList