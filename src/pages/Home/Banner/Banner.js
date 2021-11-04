import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';


const bannerBg = {
    background: `url(${bg}`,
    
};
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    border: "1px solid red",
    height: "400px"
}


const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{my:3, fontSize: 13, fontWeight: 300, color: "gray" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident possimus nulla nostrum et magni eos ratione ut pariatur voluptatum perspiciatis.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#11BCA3" }}> Get Appionment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: "350px" }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;