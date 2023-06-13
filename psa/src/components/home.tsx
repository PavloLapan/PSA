import React from 'react';
import Login from "./login";
import Header from "./header";
import CourseDetails from "./course-details";
import {Filter} from "./filter";


const Home = () => {
    return (
    <div>
        <Header/>
        <Filter/>
        <CourseDetails/>
        {/*<Login />*/}
    </div>
);
};

export default Home;