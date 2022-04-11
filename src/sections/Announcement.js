import React from 'react'
import { styled } from '@mui/system'; 
import { Typography } from '@mui/material';
const Container = styled('div',{})({
    height: '60px',
    backgroundColor: 'teal',
    display:  'flex',
    color: 'red',
    alignItems: 'center',
    fontWeight: 600,
    justifyContent: 'center',
    fontSize:'15px'
    
});
const Announcement = () => {
    return (
        <Container>
            <Typography>
            This Announcement from someone in the system
            </Typography>
        </Container>
    )
}

export default Announcement