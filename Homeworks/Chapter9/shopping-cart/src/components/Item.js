import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    media: {
        height: "auto",
        width: 200,
    },
    content: {
        maxWidth: "70%",
        marginLeft: 100,
    },
    card: {
        display: "flex",
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 30,
        padding: 30,
    },
    contentItem: {
        marginTop: 10,
    },
    title: {
        fontWeight: "bold",
    },
});

const Item = (props) => {
    const classes = useStyles();
    console.log(props);

    const { image, title, price, description } = props.data;

    return (
        <Box className={classes.card} boxShadow={3}>
            <img className={classes.media} src={image} />
            <div className={classes.content}>
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.title}
                >
                    {title}
                </Typography>
                <Typography
                    variant="h6"
                    component="h3"
                    className={classes.contentItem}
                >
                    {price} USD
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    className={classes.contentItem}
                >
                    {description}
                </Typography>
                <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classes.contentItem}
                >
                    Buy
                </Button>
            </div>
        </Box>
    );
};

export default Item;
