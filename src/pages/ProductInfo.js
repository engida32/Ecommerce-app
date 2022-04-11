import React from "react";
import styled from "styled-components";
import Navbar from "../sections/Navbar";
import NewsLetter from "../sections/NewsLetter";
import Footer from "../sections/Footer";
import Announcement from "../sections/Announcement";
import { Add, Remove } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { CustomLink } from "../util/CustomLink";
import { Box, Typography, Select, FormControl, MenuItem } from "@mui/material";
import { useState } from "react";

// import { makeStyles } from "@mui/styles";
 import theme from '../style/theme';

// const useStyles = makeStyles({
//   filterColor: {
//     width: "20px",
//     height: "20px",
//     borderRadius: "50%",
//     color: "red",
//     backgroundColor: "red",
//     margin: " 0px 5px",
//     cursor: "pointer",
//   },
// });

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const ProductInfo = () => {
  // const classes = useStyles();
  const [size, setSize] = useState("Size");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <Box>
      <Announcement />
      <Navbar />
      <Box
        sx={{
          p: "50px",
          display: "flex",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            padding: "10px",
          },
        }}
      >
        <Box flex={1}>
          <Box
            component={"img"}
            sx={{
              width: " 100%",
              height: "70vh",
              objectFit: " cover",
              [theme.breakpoints.down("md")]: {
                height: "50%",
              },
            }}
            src="https://i.ibb.co/S6qMxwr/jean.jpg/"
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            padding: "0px 50px",
            [theme.breakpoints.down("md")]: {
              height: "20px",
            },
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 400 }}>
            Denim Jump Suit
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 200,
              m: "20px,0px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Volupta
            tum voluptatibus ducimus delectus ut, deserunt nihil obcaecati odit
            p laceat voluptas quasi exImage plicabo voluptate. Maxime dolor
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              fontSize: "40px",
            }}
          >
            {" "}
            $ 40
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "50%",
              margin: "30px, 0px",
              justifyContent: "space-between",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Typography
                variant="span"
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              >
                Color
              </Typography>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Box>
            <Box
              Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="span"
                sx={{
                  fontSize: "20px",
                  fontWeight: 200,
                }}
              >
                Size
              </Typography>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={size}
                  onChange={handleChange}
                  sx={{
                    ml: "10px",
                    p: "5px",
                    border: "none",
                  }}
                >
                  <MenuItem value={size} disabled>
                    select Size
                  </MenuItem>
                  <MenuItem value={"XS"}>XS</MenuItem>
                  <MenuItem value={"S"}>S</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"L"}>L</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItem: "center",
              justifyContent: "space-between",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItem: "center",
                fontWeight: 700,
              }}
            >
              <Remove
                sx={{
                  cursor: "pointer",
                  width: "50px",
                  height: "50px",
                }}
              />
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  border: "1px solid teal",
                  display: "flex",
                  justifyContent: "center",
                  m: "10px  5px",
                  p: "10px",
                }}
              >
                1
              </Box>
              <Add
                sx={{
                  cursor: "pointer",
                  width: "50px",
                  height: "50px",
                }}
              />
              <CustomLink to="/cart">
                <Button
                  sx={{
                    ml: "30px",
                    p: "15px",
                    border: "2px solid teal ",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontWeight: 500,
                    "&:hover": {
                      background: "teal",
                      transition: "3 sec ease-in",
                    },
                  }}
                >
                  ADD TO CART
                </Button>
              </CustomLink>
            </Box>
          </Box>
        </Box>
      </Box>
      <NewsLetter />
      <Footer />
    </Box>
  );
};

export default ProductInfo;
