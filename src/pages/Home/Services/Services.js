import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Flouride Treatmwnt',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum et dolor ab iure rerum omnis tenetur beatae eligendi sapiente debitis earum vitae aliquam commodi, officiis corrupti consectetur, necessitatibus possimus nam.',
        img: fluoride
    },
    {
        name: 'Cavii Filing',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum et dolor ab iure rerum omnis tenetur beatae eligendi sapiente debitis earum vitae aliquam commodi, officiis corrupti consectetur, necessitatibus possimus nam.',
        img: cavity
    },
    {
        name: 'Whitening',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum et dolor ab iure rerum omnis tenetur beatae eligendi sapiente debitis earum vitae aliquam commodi, officiis corrupti consectetur, necessitatibus possimus nam.',
        img: whitening
    }
]

const Services = () => {
    return (
        <>
            <Container>
                <Typography sx={{fontWeight:500, m:2, color:'success.main'}} variant="h5" component="div">
                    Our Services
                </Typography>
                <Typography sx={{fontWeight:600, m:4}} variant="h4" component="div">
                    Services We Provide
                </Typography>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service, index) => (
                            <Service key={service.name} service={service}></Service>
                        ))}
                    </Grid>
                </Box>
            </Container>

        </>
    );
};

export default Services; <h2>Services page</h2>