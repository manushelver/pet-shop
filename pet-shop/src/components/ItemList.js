import Item from "./Item"

const ItemList = ({ productList }) => {
    return (
      <div>
        <div className="row">
            {productList.map((product) => (
            <div className="container d-flex justify-content-center h-auto align-items-center">
            <Item key={product.id} product={product}/>
            </div>
            ))}
        </div>
      </div>
    );
  };


export default ItemList