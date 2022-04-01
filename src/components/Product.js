/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { CartContext } from "../context/Context";
import { CustomLink } from "../util/CustomLink";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";

// eslint-disable-next-line react/prop-types
const useStyles = makeStyles({
  Info: {
    opacity: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    zIndex: 2,
    transition: "all 0.6s ease-in-out",
  },
  Container: {
    // borderRadius: 12,
    m: "10px",
    minWidth: "280px",
    height: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5fbfd",
    position: "relative",
    "&:hover": {
      "& $Info": {
        opacity: 1,
      },
      cursor: "pointer",
    },
  },
  Icon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",

    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    display: "flex",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: "white",
      color: "yellow",
      fontSize: "12px",
      transform: "scale(1.9)",
    },
  },
});

const Product = ({ item }) => {
  const classes = useStyles();
  // using  usecart context
  const { addToCarts } = useContext(CartContext);
  function handleAddToCart() {
    addToCarts(item);
  }
  return (
    <Box
      sx={{
        p: 4,
      }}
      className={classes.Container}
    >
      <Box
        sx={{
          width: "200px",
          height: "200px",
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "whitesmoke",
        }}
      />
      <Box
        component="img"
        sx={{
          height: "75%",
          zIndex: 2,
        }}
        src={item.img}
        alt="no image"
      />
      <Box className={classes.Info}>
        <IconButton className={classes.Icon} onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </IconButton>

        <IconButton className={classes.Icon}>
          <SearchOutlined
          // sx={{
          //   color: "#e9f232",
          //   backgroundColor: "transparent",
          // }}
          />
        </IconButton>
        <IconButton className={classes.Icon}>
          <CustomLink to="/product">
            <FavoriteBorderOutlined />
          </CustomLink>
        </IconButton>
        {/* <Typography>{item.name}</Typography> */}
      </Box>
    </Box>
  );
};

export default Product;
