import React, {useEffect, useState} from 'react';
import {
    Box, Button, CardContent,
    CircularProgress,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/reducers/reducers";
import {setCourse, setCourses} from "../redux/actions/courseActions";
import {Course} from "../redux/reducers/courseReducer";
import TextField from "@mui/material/TextField";
import {useNavigate} from "react-router-dom";

const CourseDetails = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [note, setNote] = useState<string>();
    const [courseObject, setCourseObject] = useState<Course | null>();
    const dispatch = useDispatch();

    const currentCourse = useSelector((state: RootState) => state.course.course);
    const allCourses = useSelector((state: RootState) => state.course.courses);
    const navigate = useNavigate()

    useEffect(() => {
        setCourseObject(currentCourse);
        setIsLoading(false);
    }, [currentCourse]);

    const handleNote = () => {
        if (courseObject) {
            const updatedCourse = {
                ...courseObject,
                comment: [...courseObject.comment, note],
            }


            const updatedCourses = allCourses.map((c) =>
                c.id === updatedCourse.id ? updatedCourse : c
            );

            dispatch(setCourse(updatedCourse));
            dispatch(setCourses(updatedCourses));
            setCourse(updatedCourse);
            setNote('');
        }
    };

    const handleHomepage = () => {
        navigate('/')
    }

    if (isLoading) {
        return (
            <Box sx={{width: '100%', height: '100%', textAlign: 'center', mt: '20%'}}>
                <CircularProgress/>
            </Box>
        );
    }


    return (
        <>
            <h1>Course details:</h1>
            {courseObject && (
                <React.Fragment>
                    <CardContent sx={{border: '1px solid black', m: 1, borderRadius: '15px'}}>
                        <Typography variant="h5" component="div">
                            {courseObject.name}
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            {courseObject.date} ({courseObject.date > new Date().toLocaleDateString() ? 'Passed' : 'Upcoming'})
                        </Typography>
                        <Typography variant="body2">{courseObject.descr}</Typography>

                        {courseObject.comment.map((note) => (
                            <Typography sx={{m: 1.5}} color="text.secondary">
                                {note}
                            </Typography>
                        ))}

                        <Box sx={{display: 'flex'}}>

                            <TextField id="outlined-basic" sx={{mr: 1.5}} value={note}
                                       variant="outlined" onChange={(e) => setNote(e.target.value)}/>
                            <Button variant="outlined" onClick={handleNote}>
                                Add a note
                            </Button>
                        </Box>
                    </CardContent>

                    <Button sx={{ml: 1.5}} variant="outlined" onClick={handleHomepage}>
                        Back to homepage
                    </Button>
                </React.Fragment>
            )}
        </>
    );
};


export default CourseDetails;