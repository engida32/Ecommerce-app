import React from "react";
// import styled from "styled-components";
import Navbar from "../sections/Navbar";
import Announcement from "../sections/Announcement";
import Products from "../sections/Products";
import NewsLetter from "../sections/NewsLetter";
import Footer from "../sections/Footer";
// import { mobile } from "../util/responsive";
import { Box, MenuItem, Typography, InputLabel } from "@mui/material";
import theme from "../style/theme";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";

// const Title = styled.h1`
//   margin: 20px;
// `;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-left: 10px;
// `;
// const Filter = styled.div`
//   margin: 20px;
//   ${mobile({
//     marginRight: "0px 20px",
//     display: "flex",
//     flexDirection: "column",
//   })}
// `;

// const FilterText = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   margin-right: 20px;
//   ${mobile({
//     marginRight: "0px",
//   })}
// `;
// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
//   margin-left: 20px;
//   ${mobile({
//     margin: "10px 0px",
//   })}
// `;
// const Option = styled.option``;
const ProductList = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Box
        sx={{
          alignContent: "center",
        }}
      >
        <Typography> Dresses</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            ml: "10px",
          }}
        >
          <Box m={10}>
            <Typography
              variant="span"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                mr: "20px",
                [theme.breakpoints.down("md")]: {
                  mr: 0,
                },
              }}
            >
              Filter Product
              <FormControl>
                <InputLabel
                  sx={{
                    alignContent: "center",
                  }}
                >
                  Color
                </InputLabel>
                <Select
                  sx={{
                    p: "10px",
                    mr: "20px",
                    ml: "20px",
                    [theme.breakpoints.down("md")]: {
                      m: 0,
                    },
                  }}
                  label="Age"
                >
                  <MenuItem>White</MenuItem>
                  <MenuItem>Black</MenuItem>
                  <MenuItem>Red</MenuItem>
                  <MenuItem>Yellow</MenuItem>
                  <MenuItem>Green</MenuItem>
                  <MenuItem>Pink</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel
                  sx={{
                    alignContent: "center",
                  }}
                >
                  Size
                </InputLabel>
                <Select
                  sx={{
                    p: "10px",
                    mr: "20px",
                    ml: "20px",
                    [theme.breakpoints.down("md")]: {
                      m: 0,
                    },
                  }}
                  label="Age"
                >
                  <MenuItem>XS</MenuItem>
                  <MenuItem>S</MenuItem>
                  <MenuItem>M</MenuItem>
                  <MenuItem>L</MenuItem>
                  <MenuItem>XL</MenuItem>
                  <MenuItem>XXL</MenuItem>
                </Select>
              </FormControl>
            </Typography>
          </Box>
          <Box
            sx={{
              m: "20px",
              [theme.breakpoints.down("md")]: {
                mr: "0px 20px",
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <Typography
              variant="span"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                mr: "20px",
                [theme.breakpoints.down("md")]: {
                  mr: 0,
                },
              }}
            >
              Sort Product
              <FormControl>
                <InputLabel
                  sx={{
                    alignContent: "center",
                  }}
                >
                  Size
                </InputLabel>
                <Select
                  sx={{
                    p: "10px",
                    mr: "20px",
                    ml: "20px",
                    [theme.breakpoints.down("md")]: {
                      m: 0,
                    },
                  }}
                >
                  <MenuItem disabled selected>
                    Newest
                  </MenuItem>
                  <MenuItem>Price(asc)</MenuItem>
                  <MenuItem>Price(desc)</MenuItem>
                </Select>
              </FormControl>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ProductList;
