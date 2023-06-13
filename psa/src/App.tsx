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


const App = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
                <Route path="/course/:id" element={<CourseDetails />} />
            </Routes>
        </Router>
    );
};

export default App;