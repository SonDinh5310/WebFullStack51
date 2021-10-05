import FeaturePosts from "../../components/layout/home-page/feature-posts";
import React, { useContext } from "react";
import { fetchData } from "../../utils/helpers";
import { AppContext } from "../../context/state";
import styles from "../../styles/Home.module.css";

const PostsList = (props) => {
    // const { data } = useContext(AppContext);
    console.log("data", data);
    return (
        <div className={styles.container}>
            <h1 className="font-bold text-3xl my-10 text-center">Posts</h1>
            <FeaturePosts posts={props.posts}></FeaturePosts>
        </div>
    );
};

export const getStaticProps = async () => {
    const url = "https://615ac50d4a360f0017a8127d.mockapi.io/api";
    const { data } = await fetchData(url);
    return {
        props: {
            posts: data || [],
        },
    };
};

export default PostsList;
