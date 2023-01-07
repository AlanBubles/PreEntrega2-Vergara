import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { products } from '../Api/data';


function ItemListContainer() {
  const [productosFetch, setProductosFetch] = useState([]);
  const {categoryName}  = useParams()
  console.log(categoryName)

  useEffect(() => {
    const getProducts = () => {
        return new Promise((res, rej) => {
            const productosFiltrados = products.filter(
                (prod) => prod.category === categoryName
            );

            const prodListados = categoryName
                ? productosFiltrados
                : products;
            setTimeout(() => {
                res(prodListados);
            }, 500);
        });
    };
    getProducts()
        .then((res) => {
            setProductosFetch(res)
        })
        .catch((error) => {
            console.log(error);
        });
}, [categoryName]);

  //console.log("productos:", productos)


  return (
    <>
      <ItemList productosFetch={productosFetch} />
    </>
  );
};

export default ItemListContainer;