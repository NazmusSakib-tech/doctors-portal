import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor1 from "../../../images/doctor.png"
import bg from "../../../images/appointment-bg.png"
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -115 }}

                        src={doctor1} alt="" />
                </Grid>
                <Grid item xs={12} md={6} style={{display:"flex", justifyContent: "flexStart", alignItems: "center",
                textAlign: "left"
            }}>
                    <Box>
                        <Typography variant="h6" sx={{ color: "#11BCA3", marginBottom:'10px'}}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: "white" }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{my:3}} variant="h6" style={{ color: "white", fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est natus repudiandae totam sit soluta!
                        </Typography>
                        <Button variant="contained" style={{backgroundColor:"#11BCA3"}}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;