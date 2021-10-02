import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { currencyFormat } from "../helpers/utils";

const ProductItem = (props) => {
    const { product } = props;
    return (
        <Grid item xs={2} sm={4} md={4} sx={{ paddingLeft: "none" }}>
            <Card sx={{ maxWidth: 300, margin: "auto" }}>
                <CardMedia
                    component="img"
                    image={product.image}
                    height="300"
                    alt=""
                />
                <CardContent>
                    <Typography variant="body1">
                        <strong> {product.name}</strong>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" my={1}>
                        {currencyFormat(product.price)}
                    </Typography>
                    <Button variant="outlined">Buy</Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductItem;
