import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';

import './App.css';

import Navs from '../Navs/Navs.js';
import Product from '../Product/Product.js';
import ColorBox from '../ColorBox/ColorBox.jsx';
import TodoCard from '../../components/Todo/Card/Card.jsx';

const Index = () => <h2>Home</h2>;

function App() {
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

    return (
        <Router>
            {/* <div className="App"><TodoCard></TodoCard></div> */}
            <div className="container">
                <Navs></Navs>

                <Route exact path="/">
                    <Index></Index>
                </Route>
                <Route exact path="/product">
                    <Product products={products}></Product>
                </Route>
                <Route exact path="/todo">
                    <TodoCard></TodoCard>
                </Route>
                <Route exact path="/colorbox">
                    <ColorBox></ColorBox>
                </Route>
            </div>
        </Router>
    );
}

export default App;
