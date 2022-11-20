import Item from "./Item"

function ItemList (productList){
    return (
        <ul className="itemList">
            {productList.map((product) => (
                <Item product = {product}/>
            ))}
        </ul>
    );
};


export default ItemList