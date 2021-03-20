import React, { useEffect, useState } from 'react';
import List from '../../screens/Product/List.jsx';

Product.propTypes = {};

function Product(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch(
                    'https://bm998.sse.codesandbox.io/products'
                );
                const responseData = await response.json();
                setProducts(responseData);
            } catch (err) {
                console.log(err);
            }
        };

        getProducts();
    }, []); // [] : dùng để chỉ cái effect này chỉ chạy 1 lần duy nhất

    return <List products={products}></List>;
}

export default Product;
