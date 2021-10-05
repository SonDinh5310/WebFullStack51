import axios from "axios";

export const fetchData = async (url) => {
    return await axios.get(url);
};

export const getPostData = (data, slug) => {
    return data.filter((newData) => {
        return newData.slug === slug;
    });
};

export const getSlugs = (data) => {
    const slugs = [];
    data.map((newData) => {
        slugs.push(newData.slug);
    });
    return slugs;
};
