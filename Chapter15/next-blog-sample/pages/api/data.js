export const data = [
    {
        slug: "Learning-Node-js-basic",
        title: "Learning Node JS basic",
        date: "2021-10-02",
        description: "Node JS is JS based...",
        content: "Node JS content blog",
    },
    {
        slug: "Learning-React-js-basic",
        title: "Learning React JS basic",
        date: "2021-10-02",
        description: "React JS is JS based...",
        content: "React JS content blog",
    },
    {
        slug: "Learning-Vue-js-basic",
        title: "Learning Vue JS basic",
        date: "2021-10-02",
        description: "Vue JS is JS based...",
        content: "Vue JS content blog",
    },
    {
        slug: "Learning-Angular-js-basic",
        title: "Learning Angular JS basic",
        date: "2021-10-02",
        description: "Angular JS is JS based...",
        content: "Angular JS content blog",
    },
];

export function getPostData(slug) {
    return data.filter((newData) => {
        return newData.slug === slug;
    });
}

export function getSlugs() {
    const slugs = [];
    data.map((newData) => {
        slugs.push(newData.slug);
    });
    return slugs;
}
