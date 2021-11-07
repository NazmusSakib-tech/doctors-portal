import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const handleOnChange = (e) => {

        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        alert("hello")
    }
    return (
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom> Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="email"
                        name="email"
                        type="email"
                        onChange={handleOnChange}
                        variant="standard" /> <br />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <NavLink to='/register'> <Button>Is New User, Register</Button></NavLink>
                    <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Login</Button>
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} alt="" />
            </Grid>

        </Grid>
    );
};

export default Login;