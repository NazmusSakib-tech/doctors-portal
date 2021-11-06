import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Booking from '../Appointment/Booking/Booking';

const bookings = [
    {
        id:1,
        name: 'Teeth Orthodontics',
        time:"08.00 AM - 9.00 AM",
        space:10,

    },
    {
        id:2,
        name: 'Teeth Orthodontics',
        time:"08.00 AM - 9.00 AM",
        space:10,

    },
    {
        id:3,
        name: 'Teeth Orthodontics',
        time:"08.00 AM - 9.00 AM",
        space:10,

    },
    {
        id:4,
        name: 'Teeth Orthodontics',
        time:"08.00 AM - 9.00 AM",
        space:10,

    },
    {
        id:5,
        name: 'Teeth Orthodontics',
        time:"08.00 AM - 9.00 AM",
        space:10,

    },
    {
        id:6,
        name: 'Teeth Orthodontics',
        time:"08.00 AM - 9.00 AM",
        space:10,

    }
]

const AvailableAppoinments = ({ date }) => {
    return (
        <Container>
            <Typography sx={{ color: "#11BCA3", p:4, fontWeight: "bold"}} variant="h4">Available appointments {date}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking=><Booking key={booking.id} date={date} booking={booking}></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppoinments;