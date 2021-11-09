import React, { useState } from 'react';
import Alert from '@mui/material/Alert';


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
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography sx={{ color: "#11BCA3", p:4, fontWeight: "bold"}} variant="h4">Available appointments {date}</Typography>
            {bookingSuccess && <Alert severity="success">Booking successfully</Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking=><Booking key={booking.id} date={date} setBookingSuccess={setBookingSuccess} booking={booking}></Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppoinments;