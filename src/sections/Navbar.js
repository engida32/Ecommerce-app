import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'
import { Badge } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';// import * as styled from '../style/navbar'


const Container = styled.div`
height: 60px;`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items: center;
 justify-content: space-between;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language = styled.span`
cursor: pointer;
font-weight: bold;
text-decoration: underline green 2px;
font-size:14px
`
const SearchContianer = styled.div`
border:1px solid ;
border-radius: 21px;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border:none
/* border-color: gray; */
/* border-radius: 12px; */
`
const Logo = styled.h1`
    font-weight:bold;
    align-items: center;
    justify-content: center;
    `


const Center = styled.div`
    flex: 1;
    align-items: center;
    text-align: center;
background-color:white
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
`
const Right = styled.div`
    justify-content: flex-end;
    display:flex;
    align-content: space-between;
    flex: 1 ;

`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>

                <Left>
                    <Language>EN</Language>


                    <SearchContianer>
                        <Input />
                        <SearchIcon style={{ color: 'gray', fontSize: 30 }} />
                    </SearchContianer>
                </Left>
                <Center><Logo>HOME</Logo></Center>
                <Right>
                    <MenuItem> REGISTER </MenuItem>
                    <MenuItem> SIGN IN </MenuItem>
                    <MenuItem>
                        <Badge color="secondary" badgeContent={99}>
                            <AddShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container >
    )
}

export default Navbar