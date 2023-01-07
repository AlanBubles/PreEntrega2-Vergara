import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { products } from '../Api/data';

import ItemDetail from '../components/ItemDetail';
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const valor = useParams();
    console.log(valor);

    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const productoEncontrado = products.find(
                    (prod) => prod.id === parseFloat (valor.id)
                );
                setTimeout(() => {
                    res(productoEncontrado);
                }, 500);
            });
        };

        getProduct()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;