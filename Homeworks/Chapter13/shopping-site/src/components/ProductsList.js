import React from "react";
import { dummyData } from "../data/data.js";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import ProductItem from "./ProductItem";
import CircularProgress from "@mui/material/CircularProgress";
import useCallApi from "../hooks/useCallApi";

const ProductList = (props) => {
    const { isLoading, data } = useCallApi(dummyData);
    console.log("isLoading", isLoading);
    console.log("data", data);
    return (
        <Box sx={{ margin: "auto", width: "1050px" }}>
            <Grid
                container
                spacing={3}
                columns={{ xs: 4, sm: 8, md: 12 }}
                my={2}
            >
                {isLoading && <CircularProgress sx={{ margin: "auto" }} />}
                {data &&
                    data.map((product) => {
                        return (
                            <ProductItem product={product} key={product.id} />
                        );
                    })}
            </Grid>
        </Box>
    );
};

export default ProductList;
