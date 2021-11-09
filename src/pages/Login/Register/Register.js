import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
import { useHistory, useLocation } from 'react-router-dom'


const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { registration, isLoading, error, user } = useAuth();
    const history = useHistory();

    const handleOnBlur = (e) => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

        console.log(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Password Did not matched");
            return
        }

        registration(loginData.email, loginData.password, loginData.name, history);

    }

    return (
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
                <Typography variant="body1" gutterBottom> Register</Typography>
                {!isLoading && <form onSubmit={handleLoginSubmit}>

                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="Your Name"
                        type="text"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" /> <br />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="Email"
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        variant="standard" /> <br />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="outlined-password1-input"
                        label="Re-Type Password"
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <NavLink to='/Login'> <Button>Is Registered, Please Login</Button></NavLink>
                    <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Register</Button>
                </form>}
                {isLoading && <CircularProgress color="success" />}
                {user?.email && <Alert severity="success">Register successfully</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={login} alt="" />
            </Grid>


        </Grid>
    );
};

export default Register;