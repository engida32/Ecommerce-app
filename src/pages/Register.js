import React from "react";
import { styled } from "@mui/system";
// import { mobile } from "../util/responsive";
import Announcement from "../sections/Announcement";
import Navbar from "../sections/Navbar";
import { Box, Input, Typography } from "@mui/material";
import theme from "../style/theme";
import Button from "@mui/material/Button";

const Container = styled(

Box,  {}
)({
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(45deg , #4F0089, #82ffa1)",
  // background:'luinear-gradient(to right bottom, #430089, #82ffa1)','url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity:0.8
 
});
const Wrapper = styled(

  Box,  {}
  )({
    width: "50%",
    padding: "20px",
    opacity:9,
    backgroundColor: "lightgray",
    borderRadius:'20px',
    alignSelf:'center',
    alignContent:'center',
    //TODO: to be changed to other color 
    [theme.breakpoints.down("md")]: {
      width: "75%",
      justifyContent: "center",
    },

  })
  const InpuFeild = styled(

    Input,  {}
    )({
      marginLeft: "100px",
      flex: 1,
      height: "55px",
      minWidth: "40%",
      alignItems: "center",
      margin: "20px 10px 0px 0px",
    });
    const Sbutton = styled(

      Button,  {}
      )({
        width: "40%",
        marginTop:'10px',
        alignSelf:'center',
        border: "none",
        p: "15px 20px",
        alignItems:"center",
        alignContent:'center',
        backgroundColor: "gray",
        color: "green",
        fontSize:'20px',
        fontWeight:'bold',
        cursor: "pointer",
      });
// const useStyle = makeStyles({
//   // container: {
//   //   width: "100%",
//   //   backgroundColor: "gray",
//   //   height: "100vh",
//   //   // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   //   display: "flex",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   //   alignContent: "center",
//   // },
//   // wrapper: {
//   //   width: "40%",
//   //   padding: "20px",
//   //   backgroundColor: " white",
//   //   [theme.breakpoints.down("md")]: {
//   //     width: "75%",
//   //     justifyContent: "center",
//   //   },
//   // },
//   // input: {
//   //   ml: "100px",
//   //   flex: 1,
//   //   height: "40px",
//   //   minWidth: "40%",
//   //   alignItems: "center",
//   //   margin: "20px 10px 0px 0px",
//   // },
//   // button: {
//   //   width: "40%",
//   //   border: "none",
//   //   p: "15px 20px",
//   //   backgroundColor: "teal",
//   //   color: "white",
//   //   cursor: "pointer",
//   // },
// });
const Register = () => {
  // const classes = useStyle();
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              fontWeight: '900',
              alignText:'center'

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
            <InpuFeild
              placeholder="name"
            />
            <InpuFeild
              placeholder="last name"
            />
            <InpuFeild
              placeholder="user name"
            />
            <InpuFeild
              placeholder="email"
            />
            <InpuFeild
              placeholder="password"
            />
            <InpuFeild
              placeholder="consfirm password"
            />
            <Typography variant="p" >
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Typography>
            <Sbutton >
              Sign up
            </Sbutton>
          </Box>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
