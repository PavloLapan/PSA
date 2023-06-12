import exp from "constants";

export interface StudentCoursesProps {
    name: string,
    date: Date,
    comment: string
}

const studentCourses: StudentCoursesProps[] = [
    {
        name: "Mathematics",
        date: new Date("2022-04-15"),
        comment: "Great course! Enjoyed learning advanced algebra.",
    },
    {
        name: "English Literature",
        date: new Date("2021-09-01"),
        comment: "Interesting readings and insightful discussions.",
    },
    {
        name: "Physics",
        date: new Date("2021-11-10"),
        comment: "Challenging but rewarding experiments and concepts.",
    },
    {
        name: "History",
        date: new Date("2022-02-28"),
        comment: "Fascinating study of ancient civilizations.",
    },
    {
        name: "Computer Science",
        date: new Date("2022-01-05"),
        comment: "Loved coding projects and problem-solving challenges.",
    },
    {
        name: "Biology",
        date: new Date("2022-03-20"),
        comment: "Exploring the wonders of life and its mechanisms.",
    },
    {
        name: "Chemistry",
        date: new Date("2023-12-03"),
        comment: "Hands-on experiments and understanding chemical reactions.",
    },
    {
        name: "Art",
        date: new Date("2023-05-08"),
        comment: "Expressing creativity through various mediums.",
    },
    {
        name: "Music",
        date: new Date("2023-07-12"),
        comment: "Learning to play instruments and appreciating different genres.",
    },
    {
        name: "Physical Education",
        date: new Date("2023-09-22"),
        comment: "Engaging in team sports and improving fitness levels.",
    },
    {
        name: "Geography",
        date: new Date("2023-06-05"),
        comment: "Exploring the diversity of landscapes and cultures.",
    },
    {
        name: "Literary Analysis",
        date: new Date("2023-10-17"),
        comment: "Analyzing classic literature and developing critical thinking.",
    },
    {
        name: "Psychology",
        date: new Date("2023-08-02"),
        comment: "Understanding human behavior and the mind.",
    },
    {
        name: "Economics",
        date: new Date("2023-11-30"),
        comment: "Studying supply and demand, and global economic systems.",
    },
    {
        name: "Spanish",
        date: new Date("2023-10-25"),
        comment: "Learning a new language and practicing conversational skills.",
    }
];

export default studentCourses