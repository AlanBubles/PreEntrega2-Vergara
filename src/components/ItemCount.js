import React, { useState } from 'react';
function ItemCount ({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div>
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
      </div>
      <button 
        disabled={count === 0 || stock === 0}
        onClick={() => onAdd(count)}
      >
        Comprar
      </button>
    </>
  );
};

export default ItemCount;
