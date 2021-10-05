import { Fragment } from "react";
import NavBar from "./nav-bar";
import Footer from "./footer";

const Layout = (props) => {
    return (
        <Fragment>
            <NavBar></NavBar>
            <main>{props.children}</main>
            {/* <Footer></Footer> */}
        </Fragment>
    );
};

export default Layout;
