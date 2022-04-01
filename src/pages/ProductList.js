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

const ProductList = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Box
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItem: "center",
          },
        }}
      >
        <Box
          sx={{
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItem: "center",
              mt: "100px",
            }}
          >
            <Box m={10}>
              <Typography
                variant="span"
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  mr: "20px",
                  alignContent: "center",
                  [theme.breakpoints.down("md")]: {
                    mr: 0,
                  },
                }}
              >
                Filter Product
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignContent: "center",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    value={age}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem>White</MenuItem>
                    <MenuItem>Black</MenuItem>
                    <MenuItem>Red</MenuItem>
                    <MenuItem>Yellow</MenuItem>
                    <MenuItem>Green</MenuItem>
                    <MenuItem>Pink</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  fullWidth
                  sx={{
                    m: "5px",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    // label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem>XS</MenuItem>
                    <MenuItem>S</MenuItem>
                    <MenuItem>M</MenuItem>
                    <MenuItem>L</MenuItem>
                    <MenuItem>XL</MenuItem>
                    <MenuItem>XXL</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              sx={{
                m: "20px",
                p: 8,
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
              </Typography>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Newst</InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={30} selected>
                    Newst
                  </MenuItem>
                  <MenuItem value={10}>Desc</MenuItem>
                  <MenuItem value={20}>Asc</MenuItem>
                </Select>
              </FormControl>
            </Box>
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
