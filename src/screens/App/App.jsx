import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import queryString from 'query-string';

import './App.css';

import Navs from '../Navs/Navs.js';
import Product from '../Product/Product.js';
import ColorBox from '../ColorBox/ColorBox.jsx';
import TodoCard from '../../components/Todo/Card/Card.jsx';
import PostList from '../../components/PostList/PostList.jsx';
import Pagination from '../PostList/Pagination.jsx';

const Index = () => <h2>Home</h2>;

function App() {
    const [products, setProducts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 10,
    });

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

    useEffect(() => {
        const getPostList = async () => {
            try {
                let paramString = queryString.stringify(filter);
                let url = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(url);
                const responseJSON = await response.json();
                const { data, pagination } = responseJSON;
                setPosts(data);
                setPagination(pagination);
            } catch (error) {
                console.log(new Error(error));
            }
        };

        getPostList();
    }, [filter]);

    function handlePageChange(newPage) {
        setFilter({ ...filter, _page: newPage });
    }

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
                <Route exact path="/postlist">
                    <PostList posts={posts}></PostList>
                    <Pagination
                        pagination={pagination}
                        onPageChange={handlePageChange}
                    ></Pagination>
                </Route>
            </div>
        </Router>
    );
}

export default App;
