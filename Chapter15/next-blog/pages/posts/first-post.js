import Link from "next/link";
import styles from "./first-post.module.css";

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/" className={styles.buttonToHome}>
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}
