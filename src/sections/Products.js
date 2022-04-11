import Product from "../components/Product";
import { popularProducts } from "../util/data";
// import { mobile } from "../util/responsive";
import React from "react";
import { makeStyles } from "@mui/styles";
import theme from "../style/theme";
import { Box } from "@mui/material";
// const Container = styled.div`
//   /* padding: 20px; */
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   background-color: red
//     ${mobile({
//       justifyContent: "center",
//       padding: "0px",
//     })};
// `;
const useStyles = makeStyles({
  contianer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // backgroundColor: "red",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      p: 0,
    },
  },
});
const Products = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contianer}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Products;
