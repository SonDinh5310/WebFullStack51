const express = require("express");
const Joi = require("joi");
const courseRouter = express.Router();

// Danh sach cac khoa hoc
let courses = [
    {
        id: "d886wgfyz",
        name: "Khoa hoc lap trinh JS",
        image: "data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        participants: 20,
        price: 10000000,
    },
    {
        id: "sjcul2z1l",
        name: "Khoa hoc lap trinh Java",
        image: "data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        participants: 25,
        price: 11000000,
    },
    {
        id: "oveym9e8k",
        name: "Khoa hoc lap trinh Python",
        image: "data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        participants: 20,
        price: 13000000,
    },
    {
        id: "pnr1esohh",
        name: "Khoa hoc lap trinh PHP",
        image: "data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        participants: 15,
        price: 8000000,
    },
    {
        id: "kgkyt9y5f",
        name: "Khoa hoc lap trinh C++",
        image: "data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        participants: 15,
        price: 12000000,
    },
];

// Get toan bo du lieu khoa hoc
courseRouter.get("/", (req, res) => {
    res.status(200).send(courses);
});

courseRouter.get("/:id", (req, res) => {
    const getCourseIndex = courses
        .map((course) => course.id.toString())
        .indexOf(req.params.id);

    if (getCourseIndex === -1) return res.status(404).send("Course not found.");

    res.status(200).send(courses[getCourseIndex]);
});

// Tao khoa hoc moi
courseRouter.post("/", (req, res) => {
    const { error, value } = validateCourseInfos(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: randomID(),
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        participants: req.body.participants,
        price: req.body.price,
    };
    courses.push(course);
    res.status(200).send(courses);
});

//Update khoa hoc
courseRouter.put("/:id", (req, res) => {
    const { error, value } = validateCourseInfos(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const updateCourseIndex = courses
        .map((course) => course.id.toString())
        .indexOf(req.params.id);

    if (updateCourseIndex === -1)
        return res.status(404).send("Course not found.");

    updateCourse(updateCourseIndex, req.body);
    res.status(200).send(courses);
});

//Remove khoa hoc
courseRouter.delete("/:id", (req, res) => {
    const deleteCourseIndex = courses
        .map((course) => course.id.toString())
        .indexOf(req.params.id);

    if (deleteCourseIndex === -1)
        return res.status(404).send("Course not found.");

    courses.splice(deleteCourseIndex, 1);
    res.status(200).send(courses);
});

// Validate input
const validateCourseInfos = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(7).required(),
        image: Joi.string().dataUri().required().required(),
        description: Joi.string().min(10).required(),
        participants: Joi.number().integer().min(10).max(30).required(),
        price: Joi.number().integer().min(5000000).required(),
    });

    return schema.validate(course);
};

const updateCourse = (index, updateData) => {
    courses[index].name = updateData.name;
    courses[index].image = updateData.image;
    courses[index].description = updateData.description;
    courses[index].participants = updateData.participants;
    courses[index].price = updateData.price;
};

const randomID = () => {
    return Math.random().toString(36).substr(2, 9);
};

module.exports = courseRouter;
