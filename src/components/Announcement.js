import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
height: 30px;
background-color: teal;
display:  flex;
color: white;
align-items: center;
font-weight: 600;
justify-content: center;
font-size:15px
`
const Announcement = () => {
    return (
        <Container>
            This Announcement from some in the system

        </Container>
    )
}

export default Announcement