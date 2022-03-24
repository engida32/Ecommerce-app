import { FacebookOutlined, Instagram, InstallDesktopOutlined, MailOutlined, PhoneAndroidOutlined, RoomOutlined, Telegram, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
display: flex;
`

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;
display: flex;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color:#${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`

const Center = styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;

`
const ContactItem = styled.li`
list-style: none;
/* justify-content: space-around; */
margin-bottom: 20px;
display: flex;
align-items: center;
`
const List = styled.ul`
list-style: none;
margin: 0;
padding: 0;
padding: 10px;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
margin-bottom: 10px;
width: 50%;
`
const Right = styled.div`
flex:1;
padding: 20px;
`
const Payment = styled.img`
margin-top:10px
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DEV</Logo>
                <Desc>Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
                    aliquid. ipsum dolor sit amet consectetur, adipisicing elit. Fugit ipsum mole
                    stiae unde natus, provident reiciendis itaque soluta quisquam! Sint, sunt?
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <FacebookOutlined />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Telegram />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Instagram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title> Usefull Link</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Discount</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><RoomOutlined style={{ marginRight: '10px' }} />321 AA bole </ContactItem>
                <ContactItem><PhoneAndroidOutlined style={{ marginRight: '10px' }} />(125) 435 4522</ContactItem>
                <ContactItem><MailOutlined style={{ marginRight: '10px' }} />contact@dev.com</ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}

export default Footer