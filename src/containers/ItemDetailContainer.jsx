import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getDoc, doc} from "firebase/firestore"
import { productsCollection } from '../fireBaseConfig';

import ItemDetail from '../components/ItemDetail';
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const valor = useParams();
    

    useEffect(() => {
        const getProduct = () => {
            const referenciaDoc = doc(productsCollection,valor.id)
            const pedido = getDoc(referenciaDoc)

            pedido
                .then((resultado) => {
                    const producto = resultado.data()
                    
                    setItem(producto)
                    
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getProduct();
           
    },[]);
   
    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;