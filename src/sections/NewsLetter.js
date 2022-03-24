import { Send } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
`
const Title = styled.h1`
font-size:70px;
margin-bottom: 20px;
`
const Description = styled.h2`

`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
 `
const Input = styled.input`
padding-left: 22px;
border: none;
flex: 8;
`
const Button = styled.button`
flex:1;
border:none;
background-color: teal;

`

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Dont miss update for your favorite product</Description>
            <InputContainer>
                <Input placeholder='Your email address' />
                <Button> <Send /> </Button>

            </InputContainer>
        </Container>
    )
}

export default NewsLetter