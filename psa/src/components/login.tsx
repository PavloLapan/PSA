import React from 'react';
import TextField from '@mui/material/TextField';
import {Box, Button, styled} from "@mui/material";


const WrappedLogin = styled('div')(
    () => `
    border: 1px solid gray;
    border-radius: 15px;
    width: 40%;
    margin: 20% auto;
`,
);
const Login = () => {

    return (
        <>
            <WrappedLogin>
                <Box
                    sx={{
                        '& .MuiTextField-root': {
                            m: '2em auto',
                            width: '25ch',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',

                        },
                    }}
                >
                    <TextField
                        // error
                        id="outlined-error"
                        label="Login"
                        defaultValue=""
                    />

                    <TextField
                        // error
                        id="outlined-error"
                        label="Password"
                        defaultValue=""
                    />

                    <Button sx={{m: 2,  width: '25ch' }} variant="outlined">Log in</Button>

                </Box>
            </WrappedLogin>
        </>
    );
};

export default Login;