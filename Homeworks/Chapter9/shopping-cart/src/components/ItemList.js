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

const ItemList = () => {
    const classes = useStyles();
    const [store, setStore] = useState([]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            axios
                .get("https://fakestoreapi.com/products?limit=10")
                .then((res) => {
                    let data = res.data;
                    setStore(data);
                });
        }
        return () => (isMounted = false);
    }, []);

    const items =
        store.length > 0 ? (
            store.map((product) => {
                return <Item key={product.id} data={product} />;
            })
        ) : (
            <CircularProgress className={classes.loading} />
        );

    return <>{items}</>;
};

export default ItemList;
