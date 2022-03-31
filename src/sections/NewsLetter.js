import { Send } from "@mui/icons-material";
import React from "react";
// import styled from "styled-components";
// import { mobile } from "../util/responsive";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { InputBase, IconButton } from "@mui/material";
// const Container = styled.div`
//   height: 60vh;
//   background-color: #fcf5f5;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
// `;
// const Title = styled.h1`
//   font-size: 70px;
//   margin-bottom: 20px;
// `;
// const Description = styled.h2`
//   font-size: 24px;
//   font-weight: 300;
//   margin-bottom: 20px;
//   ${mobile({
//     textAlign: "center",
//   })}
// `;
// const InputContainer = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid lightgray;
//   ${mobile({
//     width: "80%",
//   })}
// `;
// const Input = styled.input`
//   padding-left: 22px;
//   border: none;
//   flex: 8;
// `;
// const Button = styled.button`
//   flex: 1;
//   border: none;
//   background-color: teal;
// `;

const NewsLetter = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        backgroundColor: "#fcf5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "70px",
          mb: "20px",
        }}
      >
        Newsletter
      </Typography>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: "24px",
          mb: "20px",
        }}
      >
        Dont miss update for your favorite product
      </Typography>
      <Box
        sx={{
          width: "50%",
          height: "40px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid lightgray",
          borderRadius: "10px",
        }}
      >
        <InputBase
          sx={{
            pl: "22px",
            border: "none",
            flex: 5,
          }}
          placeholder="Your email address"
        />
        <IconButton
          sx={{
            backgroundColor: "green",
            width: "40px",
          }}
        >
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NewsLetter;
