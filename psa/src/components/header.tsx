import React from 'react';
import {Box, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { logout } from '../redux/actions/authActions';
import {RootState} from "../redux/reducers/reducers";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const dispatch = useDispatch();
    const email = useSelector((state: RootState) => {
        return state
    });
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };


    let initials
    // if(email){
    //     initials = email.substring(0, email.indexOf('@'));
    // }


    return (
        <Box
        sx={{
            width: '100%', height: '50px', background: '#C4DFDF', m:0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}
        >
            <h3>Personal Student Account</h3>
            <p>{initials}</p>
            {
                isAuthenticated &&
                <Button sx={{m: 2,  width: '25ch' }} variant="outlined" onClick={handleLogout}>Log out</Button>
            }

        </Box>
    );
};

export default Header;