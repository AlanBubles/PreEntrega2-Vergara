import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../Context/CarProvaiden";
import { addDoc,serverTimestamp } from "firebase/firestore";
import { ventasCollection } from "../fireBaseConfig";
const Cart = () => {

  const handleCompra = () => {
    //addDoc 
    const compra = {
        usuario: {
            nombre: "fulano",
            email: "fulano@gmail.com",
            telefono: "123456789"
        },
        carrito: carrito,
        fecha: serverTimestamp(),
    }

    const pedido = addDoc(ventasCollection, compra)

    pedido
        .then((resultado) => {
            console.log(resultado.id)
            console.log(resultado)
            alert(`Compra Finalizada`)
            vaciarCarrito();
            //console.log(resultado.data())
        })
        .catch((error) => {
            console.log(error)
        })

}






  const { eliminarProducto, carrito, vaciarCarrito, total } = useContext(contexto)
  console.log(carrito)
  const copiaCar = [...carrito]
  console.log(copiaCar.length)
  return (
    <div>
      <h1 className="text-center" style={{ background: "black", color: "white", height: "100px" }}>Carrito</h1>
      <h2 className="text-center">Total : {total}</h2>
      {copiaCar.length === 0 ? <Link to={"/"} className="btn" style={{ background: "black",color:"white" }} >!Comprar Ahora!</Link> : <button className="btn " style={{ background: "black", color: "white" }} onClick={() => vaciarCarrito()} >Vaciar Carrito</button>}

      <div  style={{width: "48rem"}}>
        <ul className="list-group list-group-flush">
        {copiaCar.map((product) => (
            <div style={{margin:"20px"}} className="card w-75 mb-3" key={product.id}>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text"> Precio Total : $ {product.price * product.total} -{`cantidad ${product.total}`}</p>
              <button onClick={() => eliminarProducto(product)}>Borrar</button>
            </div>
          </div>
          ))}
        </ul>
      </div>

     {copiaCar.length ===0?<p>Sin productos en el carrito</p>:<button className="btn" onClick={handleCompra}  style={{background:"black",color:"white"}}>Finalizar Compra</button>}
    </div>
  );
};

export default Cart;