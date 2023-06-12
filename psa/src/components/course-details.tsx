import React, {useState} from 'react';
import CoursesMock from "../helpers/courses-mock";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import CardItem from "./card";
import {nanoid} from "nanoid";
import TextField from "@mui/material/TextField";


interface Course {
    name: string;
    date: Date;
    comment?: string;
}
const CourseDetails = () => {
    const [sortBy, setSortBy] = useState<string>('');
    const [filterBy, setFilterBy] = useState<string>('');

    const filteredCourses: Course[] = CoursesMock.filter((course: Course) =>
        course.name.toLowerCase().includes(filterBy.toLowerCase())
    );

    const sortedCourses: Course[] = filteredCourses.sort((courseA: Course, courseB: Course) => {
        if (sortBy === 'name') {
            return courseA.name.localeCompare(courseB.name);
        } else if (sortBy === 'date') {
            return new Date(courseA.date).getTime() - new Date(courseB.date).getTime();
        }
        return 0;
    });

    const handleSortByChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSortBy(event.target.value);
    };

    const handleFilterByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterBy(event.target.value);
    };

    return (
        <>
            <Box sx={{marginBottom: 2, display: 'flex', m: 2, pl: 4}}>
                <TextField
                    label="Filter by Name"
                    value={filterBy}
                    onChange={handleFilterByChange}
                />

                <FormControl sx={{ minWidth: 80, pl: 2 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Sort By:</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={sortBy}
                        onChange={handleSortByChange}
                        autoWidth
                        label="Sort By:"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'name'}>Name</MenuItem>
                        <MenuItem value={'date'}>Date</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: 2,
                    margin: 3
                }}>
                {/* Mapping over sorted and filtered courses */}
                {sortedCourses.map(course => {
                    return (
                        <CardItem
                            key={nanoid()}
                            name={course.name}
                            date={course.date.toLocaleDateString()}
                            comment={course.comment}
                        />
                    );
                })}

            </Box>
        </>
    );
};

export default CourseDetails;