import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {
    const onAdd = (cantidad) => {
        alert(`Compraste ${cantidad} ${item.name}`);
    };
    const { img, name, description, price, stock } = item;
    return (
        <div className="card" style={{ width: '40rem', margin: '.5rem' }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <p className="card-text">{name}</p>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <p className="card-text">stock: {stock}</p>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;