import React, {useContext} from 'react';
import './App.css'
import store from "./redux/reducers/store";
import {createStore} from "redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from "./components/header";
import CourseDetails from "./components/course-details";
import Home from "./components/home";
import Login from "./components/login";
import {RootState} from "./redux/reducers/reducers";
import {Filter} from "./components/filter";


const App = () => {

    return (
        <Router>
            <Header/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;