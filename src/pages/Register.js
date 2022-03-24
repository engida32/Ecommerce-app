import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
),
url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
center;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
margin-left: 100px;
flex:1;
height: 40px;
min-width: 40%;
align-items: center;
margin: 20px 10px 0px 0px;
`
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0px;`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;`
const Register = () => {
    return (
        <Container>

            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='name' />
                    <Input placeholder='last name' />
                    <Input placeholder='user name' />
                    <Input placeholder='email' />
                    <Input placeholder='password' />
                    <Input placeholder='consfirm password' />
                    <Agreement>    By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register