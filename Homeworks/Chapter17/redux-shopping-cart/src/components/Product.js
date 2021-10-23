import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchProducts, AddCart } from "../actions";

const Product = () => {
    const products = useSelector((state) => {
        console.log("state -->", state);
        return state.shopProduct;
    });

    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actFetchProducts());
    }, [dispatch]);

    return (
        <div className="card-columns">
            {products.map((product, index) => (
                <div className="card" key={index}>
                    <img
                        src={product.image}
                        width={"200px"}
                        height={"200px"}
                        alt=""
                    />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.price}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => dispatch(AddCart(product))}
                        >
                            Add Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

// HOC
export default Product;
