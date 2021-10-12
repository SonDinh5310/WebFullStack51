import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
    return (
        <Router>
            <div className="container">
                <Header>
                    <Switch>
                        <Route path="/" exact component={Product}></Route>
                        <Route path="/cart" exact component={Cart}></Route>
                    </Switch>
                </Header>
            </div>
        </Router>
    );
}

export default App;
