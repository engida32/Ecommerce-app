import React from "react";
import styled from "styled-components";
// import { mobile } from "../util/responsive";
import Announcement from "../sections/Announcement";
import Navbar from "../sections/Navbar";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import theme from "../style/theme";
import Button from "@mui/material/Button";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 205, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const useStyle = makeStyles({
  container: {
    width: "100%",
    backgroundColor: "gray",
    height: "100vh",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  wrapper: {
    width: "40%",
    padding: "20px",
    backgroundColor: " white",
    [theme.breakpoints.down("md")]: {
      width: "75%",
      justifyContent: "center",
    },
  },
  input: {
    // ml: "100px",

    flex: 1,
    borderRadius: "10px",
    minWidth: "50%",
    alignItems: "center",
    margin: "30px 10px 0px 0px",
  },
  button: {
    width: "40%",
    border: "none",
    p: "15px 20px",
    backgroundColor: "teal",
    color: "white",
    cursor: "pointer",
  },
  link: {
    m: "15px 0px",
    fontSize: "18px",
    textDecoration: "underline",
    // color: "teal",
    cursor: "pointer",
  },
});
// const Link = styled.a`
//   margin: 15px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   /* color: red; */
//   cursor: pointer;
// `;

const Login = () => {
  const classes = useStyle();

  return (
    <>
      <Announcement />
      <Navbar />

      <Container>
        <Box className={classes.wrapper}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              fontWeight: 30,
            }}
          >
            CREATE AN ACCOUNT
          </Typography>
          <Box
            component="form"
            sx={{
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              width: "50%",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
              m: 5,
            }}
          >
            <Box
              component="input"
              className={classes.input}
              placeholder="user name"
            />
            <Box
              component="input"
              className={classes.input}
              placeholder="password"
            />
            <Box
              sx={{
                borderRadius: "10px",
                m: "15px",
                backgroundColor: "teal",
                cursor: "pointer",
              }}
            >
              <Button variant="button" color="red" className={classes.button}>
                Login
              </Button>
            </Box>

            <Typography variant="link" className={classes.link}>
              Dont Remember Your Password ..?
            </Typography>
            <Typography variant="link" className={classes.link}>
              CREATE NEW ACCOUNT
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
