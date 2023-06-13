import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Box, Button, styled} from "@mui/material";
import {useDispatch} from "react-redux";
import { login } from '../redux/actions/authActions';
import {useNavigate} from "react-router-dom";

const WrappedLogin = styled('div')(
    () => `
    border: 1px solid gray;
    border-radius: 15px;
    width: 40%;
    margin: 20% auto;
`,
);
const Login = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleLogin = () => {
        dispatch(login({email, password}));
        navigate('/')
    };

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
                        id="outlined-error"
                        label="Login"
                        onChange={(e) => setEmail(e.target.value)}
                        defaultValue=""
                    />

                    <TextField
                        id="outlined-error"
                        label="Password"
                        defaultValue=""
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}
                    />

                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <Button sx={{margin: '10px auto',  width: '25ch' }} variant="outlined" onClick={handleLogin}>Log in</Button>
                    </div>

                </Box>
            </WrappedLogin>
        </>
    );
};

export default Login;