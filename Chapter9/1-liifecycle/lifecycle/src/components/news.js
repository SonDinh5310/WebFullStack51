const News = (props) => {
    console.log(props);
    const { news } = props;
    return (
        <>
            {news.map((item) => {
                return (
                    <>
                        <h2>Title: {item.title}</h2>
                        <h3>Feed: {item.feed}</h3>
                    </>
                );
            })}
        </>
    );
};

export default News;
