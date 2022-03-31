/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/Context";
import { CustomLink } from "../util/CustomLink";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 3;
  transition: all 0.6s ease-in-out;
`;
const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  cursor: pointer;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  background-color: whitesmoke;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  justify-content: center;
  margin: 10px;
  display: flex;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #e9f232;
    transform: scale(1.5);
  }
`;

// eslint-disable-next-line react/prop-types

const Product = ({ item }) => {
  const { addToCarts } = useContext(CartContext);
  function handleAddToCart() {
    addToCarts(item);
  }
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </Icon>

        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <CustomLink to="/product">
            <FavoriteBorderOutlined />
          </CustomLink>
        </Icon>
        <Typography>{item.name}</Typography>
      </Info>
    </Container>
  );
};

export default Product;
