import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Card, CardContent, CardHeader, styled, Typography } from "@mui/material";
import { StudentCoursesProps } from "../helpers/courses-mock";

//@ts-ignore
const CardItem = ({ name, date, comment }) => { // Added curly braces around the function parameter



    return (

        <Card variant="outlined" sx={{ maxWidth: 345, m: 1 }}>
            <CardHeader
                title={name}
                subheader={date > new Date().toLocaleDateString() ? `${date} passed`: `${date} upcoming`}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardItem;