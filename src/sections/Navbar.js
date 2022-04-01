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
  AccountBox,
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
import { makeStyles } from "@mui/styles";
import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles({
  AccountBox: {
    display: "flex",
    p: "10px",
    opacity: 0,
    [theme.breakpoints.down("sm")]: {
      opacity: 1,
    },
  },
});
const Navbar = () => {
  const { carts } = useContext(CartContext);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

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

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  cursor: "pointer",
                  color: "#0A0909",
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                }}
              >
                SHOPIFY
              </Typography>
              <IconButton className={classes.AccountBox}>
                <AccountBox onClick={handleToggle} />
                <Box
                  sx={{
                    height: "50%",
                  }}
                >
                  <Backdrop
                    sx={{
                      color: "#fefef",
                      height: "50%",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={open}
                    onClick={handleClose}
                  >
                    <Box
                      sx={{
                        backgroundColor: " transparent",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CustomLink to="/register">
                        <Button
                          sx={{
                            border: "1px solid white",
                            mb: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              cursor: "pointer",
                              color: "white",
                              fontSize: "31px",
                              fontWeight: 500,
                            }}
                          >
                            Register
                          </Typography>
                        </Button>
                      </CustomLink>
                      <CustomLink to="/login">
                        <Button
                          sx={{
                            border: "1px solid white",
                          }}
                        >
                          <Typography
                            sx={{
                              cursor: "pointer",
                              color: "white",
                              fontSize: "31px",
                              fontWeight: 500,
                            }}
                          >
                            LOGIN
                          </Typography>
                        </Button>
                      </CustomLink>
                      {/* <CircularProgress color="inherit" /> */}
                    </Box>
                  </Backdrop>
                </Box>
              </IconButton>
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
