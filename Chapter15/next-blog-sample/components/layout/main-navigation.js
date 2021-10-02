import { Fragment } from "react";
import Link from "next/link";

const MainNavigation = (props) => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>

                    <li>
                        Link
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;