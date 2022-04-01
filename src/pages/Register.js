import React from "react";
import styled from "styled-components";
// import { mobile } from "../util/responsive";
import Announcement from "../sections/Announcement";
import Navbar from "../sections/Navbar";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../style/theme";
import Button from "@mui/material/Button";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
    ml: "100px",
    flex: 1,
    height: "40px",
    minWidth: "40%",
    alignItems: "center",
    margin: "20px 10px 0px 0px",
  },
  button: {
    width: "40%",
    border: "none",
    p: "15px 20px",
    backgroundColor: "teal",
    color: "white",
    cursor: "pointer",
  },
});
const Register = () => {
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
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Box
              component="input"
              className={classes.input}
              placeholder="name"
            />
            <Box
              component="input"
              className={classes.input}
              placeholder="last name"
            />
            <Box
              component="input"
              className={classes.input}
              placeholder="user name"
            />
            <Box
              component="input"
              className={classes.input}
              placeholder="email"
            />
            <Box
              component="input"
              className={classes.input}
              placeholder="password"
            />
            <Box
              component="input"
              className={classes.input}
              placeholder="consfirm password"
            />
            <Typography variant="p">
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Typography>
            <Button variant="button" color="red" className={classes.button}>
              CREATE
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Register;
