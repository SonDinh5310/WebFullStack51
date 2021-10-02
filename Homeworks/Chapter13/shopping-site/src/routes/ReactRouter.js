import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Cart from "../components/Cart";
import Home from "../components/Home";

const ReactRouter = () => {
    return (
        <Router>
            <NavBar></NavBar>
            <Switch>
                <Route path="/about" component={About}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>
        </Router>
    );
};

export default ReactRouter;
