import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const data = useSelector((state) => {
        console.log(state.shopProduct);
        return state.shopProduct;
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                ShopName-Web51
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to={"/"} className="nav-link">
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/carts"} className="nav-link">
                            Carts <span>{data.numberCart}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
