import Link from "next/link";

const NavBar = () => {
    return (
        <div className="bg-indigo-500 ">
            <header className="max-w-screen-xl h-14 mx-auto px-4 flex justify-between content-center items-center">
                <Link href="/">
                    <span className="text-gray-50 text-4xl cursor-pointer">
                        <strong>Blog.</strong>
                    </span>
                </Link>
                <nav className="w-1/6">
                    <ul className=" flex flex-row justify-between">
                        <li>
                            <Link href="/posts/posts-list">
                                <span className="text-gray-50 cursor-pointer">
                                    <strong>Posts</strong>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts/contact">
                                <span className="text-gray-50 cursor-pointer">
                                    <strong>Contact</strong>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;
