import React from 'react';

const ItemCount = ({count, handleCount}) => {
  return (
    <div>
      <div className='contador'>
        <button onClick={handleCount("-")}> - </button>
        <span>{count} </span>
        <button onClick={handleCount("+")}> + </button>
      </div>
    </div>
  );
}


export default ItemCount;
