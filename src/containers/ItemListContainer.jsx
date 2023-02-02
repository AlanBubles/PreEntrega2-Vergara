import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';

import { productsCollection } from '../fireBaseConfig';
import { getDocs,query,where} from 'firebase/firestore';


function ItemListContainer() {
  const [productosFetch, setProductosFetch] = useState([]);
  const {categoryName}  = useParams()


  useEffect(() => {
    const getProducts = () => {
      const filtro = categoryName === undefined?productsCollection:query(productsCollection,where("category","==",categoryName))

      const pedidoPorCategoria = getDocs(filtro)

      pedidoPorCategoria
          .then((resultado) => {
              const productos = resultado.docs.map((doc) => {
                  return { id : doc.id , ...doc.data() }
              })
              setProductosFetch(productos)
          })
          .catch((error) => {
              console.log(error)
          })
    };
     
    getProducts()
}, [categoryName]);

  //console.log("productos:", productos)


  return (
    <div>
      <ItemList productosFetch={productosFetch} />
    </div>
  );
};

export default ItemListContainer;