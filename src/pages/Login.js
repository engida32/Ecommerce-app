import React from 'react'
import styled from 'styled-components'
import { mobile } from '../util/responsive'
import Announcement from '../sections/Announcement';
import Navbar from '../sections/Navbar';

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(
    rgba(255,255,205,0.5),
    rgba(255,255,255,0.5)
),
url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
center;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({
    width: '100%', justifyContent: 'center'

})}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 500;
`
const Form = styled.form`
flex-direction: column;
margin: 20px;
display: flex;
`
const Input = styled.input`
margin-left: 100px;
flex:1;
padding: 15px;
min-width: 40%;
align-items: center;
margin:20px 0px;
border-radius: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;`
const Link = styled.a`
margin: 15px 0px;
font-size: 12px;
text-decoration: underline;
/* color: red; */
cursor: pointer;
  `

const Login = () => {
    return (<>
        <Announcement />
        <Navbar />

        <Container>

            <Wrapper>
                <Title>LOGIN TO ACCOUNT</Title>
                <Form>
                    <Input placeholder='username' />
                    <Input placeholder='password' />
                    <Button>LOGIN</Button>
                    <Link> Dont Remember Your Password ..?</Link>
                    <Link> CREATE NEW ACCOUNT </Link>
                </Form>
            </Wrapper>

        </Container>
    </>
    )
}

export default Login