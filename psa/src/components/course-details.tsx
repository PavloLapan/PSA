import React from 'react';
import {Box} from "@mui/material";
import CardItem from "./card";
import {nanoid} from "nanoid";
import FilterHelperService, {Course} from "../helpers/filterHelper";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/reducers";

const CourseDetails = () => {

    const isFilterBy = useSelector((state: RootState) => state.filter.filter);
    const isSortBy = useSelector((state: RootState) => state.filter.sortBy);
    const sortedCourses = FilterHelperService.sortedCourses(isFilterBy, isSortBy)

    const courses = sortedCourses.map((course: Course) => {
        return (
            <CardItem
                key={nanoid()}
                name={course.name}
                date={course.date.toLocaleDateString()}
                comment={course.comment}
            />
        );
    });


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: 2,
                    margin: 3
                }}>
                {courses}
            </Box>
        </>
    );
};

export default CourseDetails;