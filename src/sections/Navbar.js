import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'
import { Badge } from '@mui/material';
import { mobile } from '../util/responsive';
import { AddShoppingCart } from '@mui/icons-material';
// custome React router Link for general
import { CustomLink } from '../util/CustomLink';


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
  border: 0.5px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  border-radius: 10px;
  padding: 5px;
    ${mobile({

})}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "60px", border: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
    ${mobile({
  display: "none"
})}
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({
  fontSize: "18px"
})}
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
  cursor: pointer;
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
        <Center>
          <CustomLink to='/'>
            <Logo>HOME</Logo>
          </CustomLink>
        </Center>
        <Right>

          <CustomLink to='/register'>
            <MenuItem> REGISTER </MenuItem>
          </CustomLink>



          <CustomLink to='/login'>
            <MenuItem> SIGN IN </MenuItem>
          </CustomLink>
          <MenuItem>
            <Badge color="secondary" badgeContent={99}>
              <CustomLink to='/cart'>
                <AddShoppingCart />
              </CustomLink>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container >
  )
}

export default Navbar