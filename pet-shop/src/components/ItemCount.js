import React, { useState} from 'react';

const ItemCount = (product) => {
  const [count, setCount] = useState(0);
const stock = product.stock;
  const decrease = () => {
    setCount(count-1);
  }

  const increase = () => {
    setCount(count+1);
  }

  return (
    <div>
      <div className='contador'>
        <button>Agregar al carrito</button>
        <button disabled={count <=1} onClick={decrease}> - </button>
        <span>{count} </span>
        <button disabled={count >=stock} onClick={increase}> + </button>
      </div>
    </div>
  );
}


export default ItemCount;
