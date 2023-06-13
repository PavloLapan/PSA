import React, {useContext} from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/header";
import CourseDetails from "./components/course-details";
import Home from "./components/home";
import Login from "./components/login";


const App = () => {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/course/:id" element={<CourseDetails/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
};

export default App;