import React from 'react';
import { Link } from 'react-router-dom';

function Item  ({ producto })  {
  const { img, name,id, price, } = producto;

  return (
    <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body" style={{background:"black",color:"white"}}>
        <p className="card-text">{name}</p>
        
        <p className="card-text">${price}</p>

        <button className="btn" style={{background:"white"}}>
        <Link className="" style={{color:"black"}} to={`/detail/${id}`}>
          Ver detalle
        </Link>
        
        </button>
        {producto.stock<1?<p className='text-center' style={{color:"white"}}>SIN STOCK</p>:null}
      </div>
    </div>
  );
};

export default Item;
