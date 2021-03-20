import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from '../../components/PostList/PostList.jsx';
import Product from '../../components/Product/Product.jsx';
import TodoCard from '../../components/Todo/Card/Card.jsx';
import ColorBox from '../ColorBox/ColorBox.jsx';
import Navs from '../Navs/Navs.js';
// import axios from 'axios';
import './App.css';

const Index = () => <h2>Home</h2>;

function App() {
    return (
        <Router>
            {/* <div className="App"><TodoCard></TodoCard></div> */}
            <div className="container">
                <Navs></Navs>

                <Route exact path="/">
                    <Index></Index>
                </Route>
                <Route exact path="/product">
                    <Product></Product>
                </Route>
                <Route exact path="/todo">
                    <TodoCard></TodoCard>
                </Route>
                <Route exact path="/colorbox">
                    <ColorBox></ColorBox>
                </Route>
                <Route exact path="/postlist">
                    <PostList></PostList>
                </Route>
                <Route exact path="/clock">
                    <PostList></PostList>
                </Route>
            </div>
        </Router>
    );
}

export default App;
