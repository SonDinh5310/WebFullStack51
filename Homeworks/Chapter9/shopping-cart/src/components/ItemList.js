import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Item from "./Item";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    loading: {
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
}));

const API = "https://fakestoreapi.com/products?limit=10";
const ItemList = () => {
    const classes = useStyles();
    const [store, setStore] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios
            .get(API)
            .then((res) => {
                if (res.status >= 200 && res.status < 299) {
                    return res.data;
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(res.statusText);
                }
            })
            .then((data) => {
                setStore(data);
                setIsLoading(false);
            })
            .catch((error) => console.log("Error call Api"));
    }, []);

    if (isLoading) {
        return <CircularProgress className={classes.loading} />;
    }

    if (isError) {
        return <div>Has Error ...</div>;
    }

    return (
        <>
            {store.map((product) => {
                return <Item key={product.id} data={product} />;
            })}
        </>
    );
};

export default ItemList;
