import { Fragment, useContext } from "react";
import Head from "next/head";
import { getPostData, getSlugs } from "../../utils/helpers";
import { AppContext } from "../../context/state";

const PostDetailPage = (props) => {
    console.log("PostDetailPage", props);
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

    // const data = getPostData(postData, context.params.slug)[0];
    return {
        props: {
            post: 1,
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
