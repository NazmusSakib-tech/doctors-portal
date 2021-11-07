import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

      
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if(loginData.password !== loginData.password2) {
            alert("Password Did not matched");
             return
         }
    }

    return (
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom> Register</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="email"
                        type="email"
                        name="email"
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
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="outlined-password-input"
                        label="Re-Type Password"
                        type="password"
                        name="password2"
                        onChange={handleOnChange}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <NavLink to='/Login'> <Button>Is Registered, Please Login</Button></NavLink>
                    <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Register</Button>
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} alt="" />
            </Grid>

        </Grid>
    );
};

export default Register;