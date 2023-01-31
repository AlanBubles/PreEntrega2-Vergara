import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { contexto } from '../Context/CarProvaiden';

function CartWidget () {
  const {cantidad}=useContext(contexto)
  return (
    <div>
      <FaShoppingCart size={'2rem'} color={'black'} />
      <span>{cantidad}</span>
    </div>
  );
};

export default CartWidget;