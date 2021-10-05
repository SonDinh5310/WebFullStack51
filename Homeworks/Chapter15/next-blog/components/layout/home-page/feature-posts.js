import PostItem from "./post-item";

const FeaturePosts = (props) => {
    return (
        <section className="max-w-screen-xl">
            <ul className="flex flex-wrap flew-row justify-center">
                {props.posts.map((post, index) => {
                    return <PostItem key={index} post={post} />;
                })}
            </ul>
        </section>
    );
};

export default FeaturePosts;
