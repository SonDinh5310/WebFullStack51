import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    whiteText: {
        color: "white",
        textDecoration: "none",
    },
});

const NavBar = (props) => {
    const classes = useStyles(props);
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{}}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link to="/" className={classes.whiteText}>
                            Home
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <Link to="/about" className={classes.whiteText}>
                            About
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link to="/cart" className={classes.whiteText}>
                            Cart
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
