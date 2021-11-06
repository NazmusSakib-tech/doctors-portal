import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from './BookingModal/BookingModal';

const Booking = ({ booking, date}) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const { name, space, time } = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ p: 5 }} elevation={3}>
                    <Typography sx={{ color: "info.main", fontWeight: 600 }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" sx={{ fontSize: 15 }} component="h6">
                        {space} Space Available
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" style={{ backgroundColor: "#11BCA3" }}>Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal date={date} booking={booking} openBooking={openBooking} handleBookingClose={handleBookingClose} variant="contained" ></BookingModal>
        </>
    );
};

export default Booking;