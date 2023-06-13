import React from 'react';

import {  Card, CardContent, CardHeader, Typography } from "@mui/material";

//@ts-ignore
const CardItem = ({ name, date, comment }) => {
    return (

        <Card variant="outlined" sx={{ maxWidth: 345, m: 1, cursor: 'pointer' }}>
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