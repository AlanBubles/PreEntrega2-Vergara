import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { contexto } from '../Context/CarProvaiden';


const ItemDetail = ({ item }) => {
    const { agregarProducto } = useContext(contexto)
    const [buy, setBuy] = useState(false)
    const onAdd = (cantidad) => {
        console.log(item.name)
        agregarProducto(item, cantidad)
        console.log("Esta es la cantidad" + cantidad)
        alert(`Compraste ${cantidad} ${item.name}`);
        setBuy(true)
        
        item.stock-=cantidad
        
    };
    const { img, name, description, price, stock } = item;
    return (
        <div className="card mb-3" style={{maxWidth:"1040px",maxHeight:"300px",marginLeft:"3cm"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8" style={{background:"black",color:"white"}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">stock: {stock}</p>
                        <p className='card-text'> Precio $ {price}</p>
                        {buy ? <Link to={"/cart"} className={"btn"} style={{background:"white"}}>Ir al carrito</Link>: <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
            </div>
                </div>
            </div>
        </div>

    );
};

export default ItemDetail;