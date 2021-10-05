import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import HeroSection from "../components/layout/home-page/hero-section";
import FeaturePosts from "../components/layout/home-page/feature-posts";
import { fetchData } from "../utils/helpers";
import { AppContext } from "../context/state";

const Home = (props) => {
    console.log("indexPage-Props", props);
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroSection></HeroSection>
            <h1 className="font-bold text-3xl my-10 text-center">
                Feature Posts
            </h1>
            <FeaturePosts posts={props.posts}></FeaturePosts>
        </div>
    );
};

export const getStaticProps = async () => {
    const url = "https://615ac50d4a360f0017a8127d.mockapi.io/api";
    const { data } = await fetchData(url);
    return {
        props: {
            posts: data.slice(0, 3) || [],
        },
    };
};

export default Home;
