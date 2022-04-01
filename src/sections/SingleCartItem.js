/* eslint-disable react/prop-types */
import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import theme from "../style/theme";

const Image = styled.img`
  width: 200px;
`;
const SingleCartItem = ({ id, name, url, price, setTotal }) => {
  const [itemNumber, SetItemNumber] = useState(1);
  const [prices, setPrice] = useState(price);
  const handleAddClick = () => {
    SetItemNumber(itemNumber + 1);
    setPrice((prev) => prev + price);
    setTotal((prev) => prev + price);
  };
  const handleRemove = () => {
    if (itemNumber >= 1) {
      SetItemNumber(itemNumber - 1);
      setPrice((prev) => prev - price);
      setTotal((prev) => prev - price);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          mb: 0,
        },
      }}
    >
      <Box
        sx={{
          flex: "2",
          display: "flex",
        }}
      >
        <Image src={url} />
        <Box
          sx={{
            p: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography>
              <b>{name}</b> JSIE THUNDER SHOES
            </Typography>
            <Typography>
              <b>{id}</b> 09323438748
            </Typography>
            {/* <ProductColor color="black" /> */}
            <Typography>
              <b> {id}</b> 38.3
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            mb: "20px",
            cursor: "pointer",
          }}
        >
          <IconButton
            sx={{
              background: "whitesmoke",
            }}
            onClick={handleRemove}
          >
            <Remove />
          </IconButton>
          <Box
            sx={{
              fontSize: "30px",
              m: "5px",
            }}
          >
            {itemNumber}
          </Box>
          <IconButton
            sx={{
              background: "whitesmoke",
            }}
            onClick={handleAddClick}
          >
            <Add />
          </IconButton>
        </Box>
        <Box
          sx={{
            flex: 1,
            border: "0px solid lightgray",
            p: "20px",
            fontSize: "30px",
            fontWeight: 400,
          }}
        >
          $ {prices}
        </Box>
      </Box>
    </Box>
  );
};

export default SingleCartItem;
