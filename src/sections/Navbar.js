import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'
import { Badge } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';// import * as styled from '../style/navbar'
import { mobile } from '../util/responsive';
import { AddShoppingCart } from '@mui/icons-material';


const Container = styled.div`
  height: 60px;
  ${mobile({
  height: "55px"
})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
  padding: "10px 0px"
})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContianer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "18px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>

        <Left>
          <Language>EN</Language>


          <SearchContianer>search..
            <Input placeholder='' />
            <SearchIcon style={{ color: 'gray', fontSize: 30 }} />
          </SearchContianer>
        </Left>
        <Center><Logo>HOME</Logo></Center>
        <Right>
          <MenuItem> REGISTER </MenuItem>
          <MenuItem> SIGN IN </MenuItem>
          <MenuItem>
            <Badge color="secondary" badgeContent={99}>
              <AddShoppingCart />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container >
  )
}

export default Navbar