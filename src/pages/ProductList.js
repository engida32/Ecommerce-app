import React from "react";
import Navbar from "../sections/Navbar";
import Announcement from "../sections/Announcement";
import Products from "../sections/Products";
import NewsLetter from "../sections/NewsLetter";
import Footer from "../sections/Footer";
// import { mobile } from "../util/responsive";
import { Box, MenuItem, Typography, InputLabel } from "@mui/material";
import theme from "../style/theme";
// import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import Select, {   } from '@mui/material/Select';


const ProductList = () => {
  const [age, setAge] = React.useState("");
  const [color, setColor] = React.useState("");
  const [size, setSize] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    
  };
  const handleColorChange = (event) => {
     setColor(event.target.value  );
   };
  const handleSizeChange = (event) => {
    
    setSize(event.target.value );
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
                  // margin:'10px'
                }}
              >
                <FormControl  >
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    sx={{
                      padding: "10px",
                      width:'105px'
                    }}
                    value={color}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    //TODO: implement handlechange for color
                    onChange={handleColorChange}
                  >
                    <MenuItem value={'white'} >White</MenuItem>
                    <MenuItem value={'black'} >Black</MenuItem>
                    <MenuItem value={'Red'} >Red</MenuItem>
                    <MenuItem value={'Yellow'} >Yellow</MenuItem>
                    <MenuItem value={'Green'} >Green</MenuItem>
                    <MenuItem value={'Pink'} >Pink</MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  fullWidth
                  sx={{
                    ml:'60px'
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Size"
                   
                    onChange={handleSizeChange}
                    //TODO: implement handlechange for color

                    // onChange={handleChange}
                  >
                    <MenuItem value={'XS'} selected>XS</MenuItem>
                    <MenuItem  value={'X'}>S</MenuItem>
                    <MenuItem value={'M'}>M</MenuItem>
                    <MenuItem value={'L'}>L</MenuItem>
                    <MenuItem value={'XL'}>XL</MenuItem>
                    <MenuItem value={'XXL'}>XXL</MenuItem>
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
                    Newest
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
