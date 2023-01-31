
import { createContext, useState } from "react";

export const contexto=createContext()
const {Provider}= contexto

function CarProvaider({children}){
     //Creamos la funcinalidad del carrito
    
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    const copiaCar = [...carrito]

    const agregarProducto = (producto, cant) => {
        

        //producto.cantidad = cantidad
        //const copia = carrito 
      
        const test = estaEnCarrito(producto)
        console.log(test === true ?"Ya estaba en el carrito":"No estaba en el carrito")
        if (test === true){
          const index = copiaCar.findIndex((obj)=> obj.id===producto.id)
          copiaCar[index].total+=cant
          const totalPrice=producto.price * cant
          setCantidad(cantidad + cant)
          setCarrito(copiaCar)
          setTotal(total+totalPrice)
          console.log(copiaCar);
          
        }
        else{
            console.log(producto);
            const totalPrice=producto.price * cant
            producto.total+=cant

            copiaCar.push(producto)

            //const nuevoEstado = []
            //nuevoEstado.push(producto)
    
            setCarrito(copiaCar)
    
            setTotal(total+totalPrice)
            setCantidad(cantidad+cant)
            console.log(copiaCar)
        }
    }

    const eliminarProducto = (producto) => {
        
        let cant=cantidad
        const index = copiaCar.findIndex((obj)=> obj.id===producto.id)
        if(producto.total>1){
            const priceProduct=copiaCar[index].price
            copiaCar[index].total-=1;
            cant-=1;
            producto.stock+=1
            
          setCarrito(copiaCar)
          setCantidad(cant)
          setTotal(total-priceProduct)
        }
        else{
            const priceProduct=copiaCar[index].price
            cant-=1;
            producto.stock+=1
            console.log(copiaCar)
            copiaCar.splice(index,1)
            setCarrito(copiaCar)
            setCantidad(cant)
            setTotal(total-priceProduct)
        }

     }

    const vaciarCarrito = () => { 
        for (let index = 0; index < copiaCar.length; index++) {
            copiaCar[index].total=0
            copiaCar[index].stock=5
        }

        setCantidad(0)
        setTotal(0)
        setCarrito([])
    }

    const estaEnCarrito = (prod) => {
       
       const itemSearch=copiaCar.find((item)=>item.name===prod.name);
       const itemExist = itemSearch?true:false
       return(itemExist)
    }
    
    

    //valorDelContexto = la variable que tiene todo lo que se puede usar desde cualquier otro componente con el useContext
    const value = {
        carrito,
        total,
        cantidad,
        agregarProducto,
        estaEnCarrito,
        eliminarProducto,
        vaciarCarrito
    }




   
    return(
        <Provider value={value}>
           {children}
        </Provider>
    )
}
export default CarProvaider