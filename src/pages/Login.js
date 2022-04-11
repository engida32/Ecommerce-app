import React from "react";

import Announcement from "../sections/Announcement";
import Navbar from "../sections/Navbar";
import { Box, Input, Typography } from "@mui/material";
import theme from "../style/theme";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const Container = styled(
  "div",
  {}
)({
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(45deg , #430089, #82ffa1)",
  // background:'luinear-gradient(to right bottom, #430089, #82ffa1)','url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const Wrapper = styled(
  Box,
  {}
)({
  width: "50%",
  padding: "20px",
  backgroundColor: " white",
  background:
    'url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
});
const Form = styled(
  "form",
  {}
)({
  minHeight: "100px",
  display: "flex",
  flexDirection: "column",
  width: "50%",

  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  margin: "5px",
});
const InputForm = styled(
  Input,
  {}
)({
  flex: 1,
  p: "50px ",
  borderRadius: "10px",
  height: "50px",
  minHeight: "20px",
  minWidth: "50%",
  alignItems: "center",
  margin: "30px 10px 0px 0px",
});

const Link = styled(
  Typography,
  {}
)({
  border: "none",
  padding: "15px 20px",
  backgroundColor: "teal",
  color: "white",
  fontWeight:'bold',
  fontStyle:'italic',
  cursor: "pointer",
  textDecoration: "underline",
});
const SButton = styled(
  Button,
  {}
)({
  width: "40%",
  border: "none",
  p: "15px 20px",
  backgroundColor: "teal",
  color: "white",
  cursor: "pointer",
});
const Login = () => {
  return (
    <>
      <Announcement />
      <Navbar />

      <Container>
        <Wrapper
          sx={{
            [theme.breakpoints.down("md")]: {
              width: "75%",
              justifyContent: "center",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              fontWeight: 30,
            }}
          >
            SIGN IN TO YOUR ACCOUNT
          </Typography>
          <Form>
            <InputForm placeholder="user name" />
            <InputForm placeholder="password" />
            <Box
              sx={{
                borderRadius: "10px",
                m: "15px",
                backgroundColor: "teal",
                cursor: "pointer",
              }}
            >
              <SButton>Login</SButton>
            </Box>

            <Link
              variant="link"
              sx={{
                backgroundColor: "inherit",
                color: "gray",
              }}
            >
              Forget Your Password..?
            </Link>
            <Link
              variant="link"
              sx={{
                backgroundColor: "inherit",
                color: "gray",
              }}
            >
              CREATE NEW ACCOUNT
            </Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
