import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../Context/CarProvaiden";
import { addDoc,serverTimestamp } from "firebase/firestore";
import { ventasCollection } from "../fireBaseConfig";
import Login from "./Login";


const Cart = () => {
 const [login,setLogin]=useState(false)
const [user,setUser]=useState({})
 


  const handleCompra = () => {
    //addDoc 
    const compra = {
        usuario: {
            nombre: user.name,
            email: user.email1,
            telefono: user.number
        },
        carrito: carrito,
        fecha: serverTimestamp(),
    }

    const pedido = addDoc(ventasCollection, compra)

    pedido
        .then((resultado) => {
            alert(`Compra Finalizada su orden es : ${resultado.id}`)
            vaciarCarrito();
            
            
        })
        .catch((error) => {
            console.log(error)
        })

}
  const { eliminarProducto, carrito, vaciarCarrito, total } = useContext(contexto)
 
  const copiaCar = [...carrito]
  
  return (
    <div>
      <h1 className="text-center" style={{ background: "black", color: "white", height: "100px" }}>Carrito</h1>
      <h2 className="text-center">Total : {total}</h2>
      {copiaCar.length === 0 ? <Link to={"/"} className="btn" style={{ background: "black",color:"white" }} >!Comprar Ahora!</Link> : <button className="btn " style={{ background: "black", color: "white" }} onClick={() => vaciarCarrito()} >Vaciar Carrito</button>}

      <div  style={{width: "48rem"}}>
        <ul className="list-group list-group-flush">
        {copiaCar.map((product) => (
            <div key={product.name} style={{margin:"20px"}} className="card w-75 mb-3" >
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text"> Precio Total : $ {product.price * product.total} -{`cantidad ${product.total}`}</p>
              <button onClick={() => eliminarProducto(product)}>Borrar</button>
            </div>
          </div>
          ))}
        </ul>
      </div>

     {login===false? <div><p>INICIAR SECION</p><Login setLogin={setLogin } setUser={setUser} /></div>  :copiaCar.length>0?<button onClick={handleCompra} >Finalizar Compra</button>:<p>Sin articulos en el carrito</p>}
    </div>
  );
};

export default Cart;