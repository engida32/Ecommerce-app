/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { mobile } from "../util/responsive";
import { Typography } from "@mui/material";
import { Box, fontWeight, minHeight, textAlign } from "@mui/system";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@emotion/react";

// const useStyles = makeStyles({
//   container: {
//     backgroundColor: "inherit",
//     [useTheme().breakpoints.down("sm")]: {
//       flexDirection: "column",
//     },
//   },
// });

const CategoryITem = ({ item }) => {
  // const classes = useStyles();
  return (
    <Box
      component="div"
       sx={{
        xs: "",
        display: "flex",
        position: "relative",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        objectFit: "fill",
        background: `url( ${item.img})`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          bottom: "0px",
          left: 40,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            mb: "auto",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Typography>
        <Button
          variant="contained"
          disableElevation
          sx={{
            fontSize: "20px",
            borderRadius: "30px",
            mb: "10px",
          }}
        >
          GET IT NOW
        </Button>
      </Box>
    </Box>
  );
};

export default CategoryITem;
