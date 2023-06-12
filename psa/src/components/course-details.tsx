import React from 'react';
import CoursesMock from "../helpers/courses-mock";
import {Box} from "@mui/material";
import CardItem from "./card";
import {nanoid} from "nanoid";

const CourseDetails = () => {




    return (
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: 2,
            margin: 3
        }}>
            { CoursesMock.map(course => {
                return (
                    <CardItem
                        key={nanoid()}
                        name={course.name}
                        date={course.date.toLocaleDateString()}
                        comment={course.comment}/>
                )
            })}

        </Box>
    );
};

export default CourseDetails;