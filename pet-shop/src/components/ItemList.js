import Item from "./Item"

const ItemList = ({ productList }) => {
    return (
      <ul>
        {productList.map((product) => (
          <Item product={product} />
        ))}
      </ul>
    );
  };


export default ItemList