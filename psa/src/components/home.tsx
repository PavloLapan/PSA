import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setCourse, setCourses} from "../redux/actions/courseActions";
import studentCourses from "../helpers/courses-mock";
import {Box, CircularProgress} from "@mui/material";
import CardItem from "./card";
import {RootState} from "../redux/reducers/reducers";
import {Filter} from './filter';
import {Course} from "../redux/reducers/courseReducer";


const Home = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const courses = useSelector((state: RootState) => state.course.courses);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const [isLoading, setIsLoading] = useState(true);
    const [courseList, setCourseList] = useState<Course[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            // Simulate API call delay
            setTimeout(() => {
                dispatch(setCourses(studentCourses));
                setIsLoading(false);
            }, 2000);
        };

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        setCourseList(courses);
    }, [courses]);

    const handleCourseClick = (course: Course) => {
        dispatch(setCourse(course));
        isAuthenticated ? history(`/course/${course.id}`) : history(`/login`);
    };

    const handleSort = (sortBy: 'name' | 'date') => {
        const sortedCourses = [...courseList];
        sortedCourses.sort((a, b) => {
            if (sortBy === 'name') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'date') {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            }
            return 0;
        });
        setCourseList(sortedCourses);
    };

    const handleSearch = (value: string) => {
        const filteredCourses = courses.filter((course) =>
            course.name.toLowerCase().includes(value.toLowerCase())
        );
        setCourseList(filteredCourses);
    };

    if (isLoading && courseList.length === 0) {
        return (
            <Box sx={{width: '100%', height: '100%', textAlign: 'center', mt: '20%'}}>
                <CircularProgress/>
            </Box>
        );
    }

    return (
        <>
            <Filter filter={handleSearch} sort={handleSort}/>
            {courseList.length > 0 ? (
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {courseList.map((course) => (
                        <div key={course.id} onClick={() => handleCourseClick(course)}>
                            <CardItem name={course.name} date={course.date}/>
                        </div>
                    ))}
                </Box>
            ) : (
                <div>No courses available.</div>
            )}
        </>
    );
};

export default Home;
