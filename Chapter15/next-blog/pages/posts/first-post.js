import Link from "next/link";
import styles from "./first-post.module.css";

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a className={styles.buttonToHome}>Back to home</a>
                </Link>
            </h2>
        </>
    );
}
