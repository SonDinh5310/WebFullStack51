import { Fragment, useContext } from "react";
import Head from "next/head";
import { getPostData, getSlugs } from "../../utils/helpers";
import { AppContext } from "../../context/state";

let postData = [];

const PostDetailPage = async (props) => {
    // const { data } = await useContext(AppContext);
    // postData = data;
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
            </Head>
            <h2>this is {props.post.title}</h2>
        </Fragment>
    );
};

export const getStaticProps = (context) => {
    console.log("abc-content:", context);

    const result = getPostData(postData, context.params.slug)[0];
    return {
        props: {
            post: result,
        },
    };
};

export const getStaticPaths = () => {
    const slugs = getSlugs(postData);
    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
};
export default PostDetailPage;
