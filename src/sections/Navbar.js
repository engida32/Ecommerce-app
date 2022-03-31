/* eslint-disable no-unused-vars */
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import {
  Paper,
  Divider,
  alpha,
  Badge,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuList,
  Button,
  Grid,
  Container,
} from "@mui/material";
// import { mobile } from '../util/responsive';
import {
  AddShoppingCart,
  LanguageOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { CustomLink } from "../util/CustomLink";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { CartContext } from "../context/Context";
import theme from "../style/theme";

// const Container = styled.div`
//   height: 60px;
//   ${mobile({
//   height: "55px"
// })}
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({
//   padding: "10px 0px"
// })}
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContianer = styled.div`
//   border: 0.5px solid gray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   border-radius: 10px;
//   padding: 5px;
//     ${mobile({

// })}
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "60px", border: "none" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
//     ${mobile({
//   display: "none"
// })}
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   cursor: pointer;
//   ${mobile({
//   fontSize: "18px"
// })}
// `;
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   ${mobile({ flex: 2, justifyContent: "center" })}
// `;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
//   cursor: pointer;
//   ${mobile({ fontSize: "12px", marginLeft: "10px" })}
// `;
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

const Navbar = () => {
  const { carts } = useContext(CartContext);
  return (
    <Container maxWidth="sm">
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton sx={{ mr: "15px" }}>
            <LanguageOutlined sx={{ color: "#616161" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
            component="div"
          >
            <Paper
              component="div"
              sx={{
                ml: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "50%",
                width: 200,
                color: "#948282",
              }}
            >
              <InputBase
                sx={{ ml: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Box>
              <Typography
                // variant="h3"
                sx={{
                  cursor: "pointer",
                  color: "#0A0909",
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                }}
              >
                SHOP HERE
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                }}
              >
                <Typography sx={{ mr: 3, cursor: "pointer", color: "#332E2E" }}>
                  Register
                </Typography>
                <Typography sx={{ mr: 3, cursor: "pointer", color: "#332E2E" }}>
                  {" "}
                  Login
                </Typography>
              </Box>
              <CustomLink to="/cart">
                <IconButton sx={{ color: "#332E2E", size: "large" }}>
                  <Badge badgeContent={carts.length} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </CustomLink>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
