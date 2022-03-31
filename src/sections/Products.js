import styled from "styled-components";
import Product from "../components/Product";
import { popularProducts } from "../util/data";
import { mobile } from "../util/responsive";
import React from "react";
const Container = styled.div`
  /* padding: 20px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({
    // display: 'none',
    // ObjectFit: 'cover',
    justifyContent: "center",
    padding: "0px",
  })}
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
