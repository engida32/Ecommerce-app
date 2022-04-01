import React, { useEffect } from "react";
// import styled from "styled-components";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";
import { Box, Button, Typography } from "@mui/material";
import theme from "../style/theme";
import SingleCartItem from "./SingleCartItem";
import { CartContext } from "../context/Context";
import { useContext, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
// import { PaymentElement } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51Kj9MUJJu9qZoZmmBdLCQUrnfw07kt5eyvxjU0kury3xHJXmhW7Aky1VcQcNpL22130074rtTqCO4rMnib8IB5Zz00x9IO2pIj"
// );

const Cart = () => {
  const [total, setTotal] = useState(0);
  async function handleToken(e, token, address, amount, name) {
    // const { error .e } = await stripe.createToken(cardElement);
    // const cardElement = elements.getElement(CardElement);

    e.preventDefault();
    const response = axios
      .post("http://localhost:5000/api/stripe/charge", {
        token,
        total,
        address,
        currency: "USB",
        amount,
        name,
      })
      .console.log((await response).data);
  }
  // eslint-disable-next-line no-unused-vars
  const { carts } = useContext(CartContext);
  useEffect(() => {
    let sum = 0;
    carts.map((cart) => {
      sum += cart.price;
    });
    setTotal(sum);
  }, [carts]);

  console.log(carts);
  return (
    <>
      <Navbar />
      <Announcement />
      <Box>
        <Box
          sx={{
            p: "20px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "32px",
              textDecoration: "underline gray solid  ",
              textAlign: "center",
              mt: 5,
            }}
          >
            YOUR CART
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItem: "center",
              justifyContent: "space-between",
              backgroundColor: "gray",
              p: "20px",
              [theme.breakpoints.down("sm")]: {
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <Button
              sx={{
                p: "10px",
                fontWeight: 600,
                cursor: "pointer",
                color: "white",
                backgroundColor: "gray",
              }}
            >
              CONTINUE SHOPPING
            </Button>
            <Typography
              sx={{
                cursor: "pointer ",
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              {/* Your Wish List {cartNum} */}
            </Typography>
            <Button
              sx={{
                p: "10px",
                fontWeight: 600,
                color: "white",
                backgroundColor: "gray",
              }}
            >
              CHECKOUT NOW
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              [theme.breakpoints.down("sm")]: {
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                flex: 3,
              }}
            >
              {carts.map((cart) => (
                <SingleCartItem
                  setTotal={setTotal}
                  id={cart.id}
                  url={cart.img}
                  name={cart.name}
                  price={cart.price}
                  key={cart.id}
                />
              ))}
            </Box>
            <Box
              sx={{
                justifyContent: "space-between",
                border: "0.5px solid lightgray",
                borderRadius: "5px",
                p: "20px",
                height: "60vh",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "lightsalmon",
                }}
              >
                ORDER SUMMARY
              </Typography>
              <Box
                sx={{
                  m: "30px 0px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography> Subtotal</Typography>
                <Typography> $ 80</Typography>
              </Box>
              <Box
                sx={{
                  m: "30px 0px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography> Estimated Shipping</Typography>
                <Typography> $ 5.8</Typography>
              </Box>
              <Box
                sx={{
                  m: "30px 0px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography> Discount</Typography>
                <Typography> $ - 3.6</Typography>
              </Box>
              <Box
                sx={{
                  m: "30px 0px",
                  display: "flex",
                  justifyContent: "space-between",
                  textDecoration: "underline gray",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "800",
                  }}
                >
                  Total
                </Typography>
                <Typography fontSize={27} fontWeight={700}>
                  $ {total}
                </Typography>
              </Box>
              <Button
                sx={{
                  mt: "145px",
                  p: "10px",
                  width: "100%",
                  backgroundColor: "gray",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                {/* <Elements stripe={stripePromise}> */}
                <StripeCheckout
                  stripeKey="pk_test_51Kj9MUJJu9qZoZmmBdLCQUrnfw07kt5eyvxjU0kury3xHJXmhW7Aky1VcQcNpL22130074rtTqCO4rMnib8IB5Zz00x9IO2pIj"
                  token={handleToken}
                  amount={total * 100}
                  name="stripe test"
                  billingAddress
                  shippingAddress
                  currency
                />
                {/* </Elements> */}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Cart;
