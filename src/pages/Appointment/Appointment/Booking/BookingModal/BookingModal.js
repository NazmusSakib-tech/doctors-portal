import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
    const { name, time } = booking;

    const handleBookSubmit = (e) => {
        e.preventDefault();
        alert('submit');
        handleBookingClose()
    }
    return (
        <div>

            <Modal
                open={openBooking}
                onClose={handleBookingClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>

                    <form onSubmit={handleBookSubmit}>
                        <TextField
                            disabled
                            sx={{ width: "90%", margin: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField

                            sx={{ width: "90%", margin: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Name"
                            size="small"
                        />
                        <TextField

                            sx={{ width: "90%", margin: 1 }}
                            id="outlined-size-small"
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField

                            sx={{ width: "90%", margin: 1 }}
                            id="outlined-size-small"
                            defaultValue="Email Address"
                            size="small"
                        />
                        <TextField

                            sx={{ width: "90%", margin: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toString()}
                            size="small"
                        />
                        <Button onClick={handleBookSubmit} type="submit" variant="contained">Send</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;