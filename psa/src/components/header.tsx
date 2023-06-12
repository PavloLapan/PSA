import React from 'react';
import {Box, Button} from "@mui/material";

const Header = () => {


    const logout = () => {
        console.log('logout')
    }


    return (
        <Box
        sx={{
            width: '100%', height: '50px', background: '#C4DFDF', m:0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}
        >
            <h3>Personal Student Account</h3>
            <Button sx={{m: 2,  width: '25ch' }} variant="outlined" onClick={logout}>Log out</Button>
        </Box>
    );
};

export default Header;